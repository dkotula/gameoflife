class Board {
    constructor(options, main) {
        this.element = document.createElement("div");
        this.element.className = "board";
        this.options = options;
        this.main = main;
        this.fields = [];
        this.interval = null;
        this.cyclesNumber = 0;
        this.isStart = false;
        this.fieldSizeStyle = document.createElement('style');
        this.fieldSizeStyle.innerHTML = '.fieldSize { width: ' + this.options.board.fieldSize + 'px; height: ' + this.options.board.fieldSize + 'px; }';
        document.head.appendChild(this.fieldSizeStyle);
        this.makeNewBoard();
        this.loadDefault(); // TODO Zmieniłem to
    }

    makeNewBoard() {
        this.cyclesNumber = 0;
        document.querySelector("#cycles").innerHTML = "Cycle " + this.cyclesNumber;
        this.isStart = false;
        this.element.innerHTML = "";
        this.changeBoardStyle();
        this.fields = [];
        for (let i = 0; i < this.options.board.width; i++) {
            this.fields[i] = new Field(i, 0, this.options.board.fieldSize);
            this.fields[i].getElement().addEventListener("mousedown", () => this.fieldMouseDown(i));
            this.fields[i].getElement().addEventListener("mouseover", () => this.fieldMouseOver(i));
            if (!this.options.innerBorders)
                this.fields[i].getElement().style.border = "none";
            this.element.appendChild(this.fields[i].getElement());
        }
    }

    changeBoardStyle() {
        this.element.style.gridTemplateColumns = "repeat(" + this.options.board.width + ", 1fr)";
        if (this.options.innerBorders) {
            this.element.style.width = this.options.board.width * this.options.board.fieldSize + 2 * this.options.board.width + "px";
            this.element.style.height = this.options.board.fieldSize + 2 + "px";
            this.fields.forEach((el) => el.getElement().style.border = "1px grey solid");
        } else {
            this.element.style.width = this.options.board.width * this.options.board.fieldSize + "px";
            this.element.style.height = this.options.board.fieldSize + "px";
            this.fields.forEach((el) => el.getElement().style.border = "none");
        }
        this.fieldSizeStyle.innerHTML = '.fieldSize { width: ' + this.options.board.fieldSize + 'px; height: ' + this.options.board.fieldSize + 'px; }';
    }

    getElement() {
        return this.element;
    }

    changeBoard(event) {
        if (event.target.name === "width") {
            this.options.board.width = parseInt(event.target.value);
            this.makeNewBoard();
        } else if (event.target.name === "size") {
            this.options.board.fieldSize = parseInt(event.target.value);
            this.fieldSizeStyle.innerHTML = '.fieldSize { width: ' + this.options.board.fieldSize + 'px; height: ' + this.options.board.fieldSize + 'px; }';
            this.changeBoardStyle();
        }
    }

    start() {
        if (!this.isStart) {
            this.isStart = true;
            this.interval = setInterval(() => this.steps(), this.options.timeInterval);
        }
    }

    stop() {
        this.isStart = false;
        clearInterval(this.interval);
    }

    restart() {
        clearInterval(this.interval);
        this.makeNewBoard();
    }

    fieldClick() {
        this.options.mouseDown = true;
    }

    fieldUnClick() {
        this.options.mouseDown = false;
    }

    fieldMouseDown(i) {
        this.fieldClick();
        this.fieldMouseOver(i);
    }

    fieldMouseOver(i) {
        if (!this.isStart && this.options.mouseDown) {
            if (this.options.setDead) {
                this.fields[i].makeDead();
            } else if (this.options.setAlive) {
                this.fields[i].makeAlive();
            } else {
                this.fields[i].click();
            }
        }
    }

    steps() {
        let fieldsCopy = [];
        for (let i = 0; i < this.fields.length; i++) {
            fieldsCopy.push({
                width: i,
                phase: this.fields[i].phase,
                type: this.fields[i].getType(),
                life: this.fields[i].getLife(),
                imaginaryLife: this.fields[i].imaginaryLife,
                color: this.fields[i].getColor(),
                phaseStep: this.fields[i].phaseStep,
            });
        }

        for (let i = 0; i < this.fields.length; i++) {
            this.changeFields(i, fieldsCopy);
        }
        this.cyclesNumber++;
        document.querySelector("#cycles").innerHTML = "Cycle " + this.cyclesNumber;
    }

    changeFields(width, fieldsCopy) {
        let probability = Math.random() * 100;
        let neighborsNumber;
        neighborsNumber = this.countNeighborsNumberAndColor(width, fieldsCopy)
        if (this.getModulus(neighborsNumber[0], neighborsNumber[1]) > 0 && probability > this.options.probability) {
            this.fields[width].click(neighborsNumber[4]);
            return;
        }

        if (fieldsCopy[width].type === "alive") {
            if (this.getModulus(neighborsNumber[0], neighborsNumber[1]) < this.options.underpopulation || this.getModulus(neighborsNumber[0], neighborsNumber[1]) > this.options.overpopulation) {
                this.fields[width].makeDead();
            } else {
                this.fields[width].setLife(this.fields[width].color, ...this.getNextCycleMass(fieldsCopy[width]), this.getNextCyclePhase(fieldsCopy[width])); // TODO Zmieniłem to
            }
        } else if (fieldsCopy[width].type === "dead") {
            let neighbors = this.countNeighborsNumberAndColor(width, fieldsCopy)
            if (this.getModulus(neighbors[0], neighbors[1]) > this.options.minDeadCell && this.getModulus(neighbors[0], neighbors[1]) < this.options.maxDeadCell) {
                this.fields[width].setLife(neighbors[4], neighbors[0] / 2.0, neighbors[1] / 2.0, neighbors[5] / 2.0); // TODO Zmieniłem to (trzeba wprowadzić liczbę sąsiadów komórki)
            }
        }
    }

    countNeighborsFraction(width, fieldsCopy) {
        let neighborsFraction = [0.0, 0.0, 0.0, 0.0, 0.0];
        let neighboursPower = 1.0;

        if (width > 0) {
            const i = width - 1;
            if (fieldsCopy[i].type === "alive") {
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width], fieldsCopy[i]);
            }
        }

        if (width < this.options.board.width - 1) {
            const i = width + 1;
            if (fieldsCopy[i].type === "alive") {
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width], fieldsCopy[i]);
            }
        }

        return neighborsFraction;
    }

    addNeighborsFraction(neighboursPower, neighborsFraction, field1, field2) {
        if (field1.color === field2.color) {
            neighborsFraction[0] += neighboursPower * field2.life;
            neighborsFraction[1] += neighboursPower * field2.imaginaryLife;
        } else {
            neighborsFraction[2] += neighboursPower * field2.life;
            neighborsFraction[3] += neighboursPower * field2.imaginaryLife;
        }
        neighborsFraction[4] += field2.phase;
        return neighborsFraction;
    }

    countNeighborsNumberAndColor(width, fieldsCopy) {
        const color = fieldsCopy[width].color;
        let neighbors = [0.0, 0.0, 0.0, 0.0, color, 0.0];
        fieldsCopy[width].color = "255,0,0";
        const neighborsFraction = this.countNeighborsFraction(width, fieldsCopy);
        if (this.getModulus(neighborsFraction[0], neighborsFraction[1]) > this.getModulus(neighbors[0], neighbors[1])) {
            neighbors = [neighborsFraction[0], neighborsFraction[1], neighborsFraction[2], neighborsFraction[3], fieldsCopy[width].color, neighborsFraction[4]];
        }
        fieldsCopy[width].color = color;
        return neighbors;
    }

    changeTimeInterval(event) {
        this.options.timeInterval = parseInt(event.target.value);
        if (this.isStart) {
            clearInterval(this.interval);
            this.interval = setInterval(() => this.steps(), this.options.timeInterval);
        }
    }

    clearBoard() {
        if (this.isStart) {
            clearInterval(this.interval)
        }
        for (let i = 0; i < this.options.board.width; i++) {
            this.fields[i].makeDead();
        }
        if (this.isStart) {
            this.interval = setInterval(() => this.steps(), this.options.timeInterval);
        }
    }

    changeProbability(event) {
        this.options.probability = event.target.value;
    }

    changeInnerBorders(event) {
        this.options.innerBorders = event.target.checked;
        this.changeBoardStyle();
    }

    changeUnderpopulation(event) {
        this.options.underpopulation = event.target.value;
    }

    changeOverpopulation(event) {
        this.options.overpopulation = event.target.value;
    }

    changeMinDeadCell(event) {
        this.options.minDeadCell = event.target.value;
    }

    changeMaxDeadCell(event) {
        this.options.maxDeadCell = event.target.value;
    }

    changeSetDead(event) {
        this.options.setDead = event.target.checked;
        if (this.options.setDead) {
            this.options.setBlock = false;
            document.querySelector("#setBlock").checked = false;
            this.options.setAlive = false;
            document.querySelector("#setAlive").checked = false;
        }
    }

    changeSetAlive(event) {
        this.options.setAlive = event.target.checked;
        if (this.options.setAlive) {
            this.options.setBlock = false;
            document.querySelector("#setBlock").checked = false;
            this.options.setDead = false;
            document.querySelector("#setDead").checked = false;
        }
    }

    loadConfiguration(configuration) {
        if (this.isStart) {
            this.isStart = false;
            clearInterval(this.interval);
        }
        this.clearBoard(true);
        this.setBoardFromJson(configuration);
    }

    setBoardFromJson(testBoard) {
        for (const el in testBoard) {
            if (el === "board" || el === "borders") {
                for (const el2 in testBoard[el]) {
                    this.options[el][el2] = testBoard[el][el2];
                }
            } else if (el !== "cells") {
                this.options[el] = testBoard[el];
            }
        }
        this.setInitialValues();
        this.makeNewBoard();
        for (let i = 0; i < testBoard.cells.length; i++) {
            for (let j = 0; j < testBoard.cells[i].positions.length; j++) {
                this.fields[testBoard.cells[i].positions[j].x].setCell(testBoard.cells[i]);
            }
        }
    }

    setInitialValues() {
        document.querySelector("#width").value = this.options.board.width;
        document.querySelector("#fieldSize").value = this.options.board.fieldSize;
        document.querySelector("#probability").value = this.options.probability;
        document.querySelector("#time").value = this.options.timeInterval;
        document.querySelector("#innerBorders").checked = this.options.innerBorders;
        document.querySelector("#underpopulation").value = this.options.underpopulation;
        document.querySelector("#overpopulation").value = this.options.overpopulation;
        document.querySelector("#minDeadCell").value = this.options.minDeadCell;
        document.querySelector("#maxDeadCell").value = this.options.maxDeadCell;
        document.querySelector("#setDead").checked = this.options.setDead;
        document.querySelector("#setAlive").checked = this.options.setAlive;
        document.querySelector("#testRepetitions").value = this.options.testRepetitions;
        document.querySelector("#testCycles").value = this.options.testCycles;
    }

    fetchCells() {
        const cells = [];
        for (let i = 0; i < this.fields.length; i++) {
            if (this.fields[i].type === "alive") {
                cells.push({
                    type: "alive",
                    positions: [{x: i}],
                    phase: this.fields[i].phase,
                    life: this.fields[i].life,
                    color: this.fields[i].color
                });
            }
        }
        return cells;
    }

    changeTestRepetitions(event) {
        this.options.testRepetitions = parseInt(event.target.value);
    }

    changeTestCycles(event) {
        this.options.testCycles = parseInt(event.target.value);
    }

    calculateProbability() {
        let options = this.options;
        options.cells = this.fetchCells();
        this.main.tests.calculateProbability(this.options.testRepetitions, this.options.testCycles, options);
    }

    loadDefault() {
        if (this.options.board.width === 100) {
            this.fields[1].setLife("255,0,0", 0.5, 0.5, 0.0);
            this.fields[98].setLife("255,0,0", 0.5, 0.5, 0.0);
        }
    }

    getModulus(re, im) {
        return Math.sqrt(re * re + im * im);
    }

    getNextCycleMass(cell) {
        const modulus = this.getModulus(cell.life, cell.imaginaryLife);
        return [modulus * Math.cos(cell.phase), modulus * Math.sin(cell.phase)];
    }

    getNextCyclePhase(cell) {
        return cell.phase + cell.phaseStep;
    }
}