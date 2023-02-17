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
                color: this.fields[i].getColor(),
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
        if (neighborsNumber[0] > 0 && probability > this.options.probability) {
            this.fields[width].click(neighborsNumber[2]);
            return;
        }

        if (fieldsCopy[width].type === "alive") {
            if (neighborsNumber[0] < this.options.underpopulation || neighborsNumber[0] > this.options.overpopulation) {
                this.fields[width].makeDead();
            } else {
                this.fields[width].setLife(this.fields[width].color, 0.9 * neighborsNumber[0]); // TODO Zmieniłem to
            }
        } else if (fieldsCopy[width].type === "dead") {
            let neighbors = this.countNeighborsNumberAndColor(width, fieldsCopy)
            if (neighbors[0] > this.options.minDeadCell && neighbors[0] < this.options.maxDeadCell) {
                this.fields[width].setLife(neighbors[2], neighbors[0]); // TODO Zmieniłem to
            }
        }
    }

    countNeighborsFraction(width, fieldsCopy) {
        let neighborsFraction = [0.0, 0.0];
        let neighboursPower = 1.0;

        if (width > 0) {
            const i = width - 1;
            if (fieldsCopy[i].type === "alive")
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width], fieldsCopy[i]);
        }

        if (width < this.options.board.width - 1) {
            const i = width + 1;
            if (fieldsCopy[i].type === "alive")
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width], fieldsCopy[i]);
        }

        return neighborsFraction;
    }

    addNeighborsFraction(neighboursPower, neighborsFraction, field1, field2) {
        if (field1.color === field2.color) neighborsFraction[0] += neighboursPower * field2.life;
        else neighborsFraction[1] += neighboursPower * field2.life;
        return neighborsFraction;
    }

    countNeighborsNumberAndColor(width, fieldsCopy) {
        const color = fieldsCopy[width].color;
        let neighbors = [0.0, 0.0, color];
        fieldsCopy[width].color = "255,0,0";
        const neighborsFraction = this.countNeighborsFraction(width, fieldsCopy);
        if (neighborsFraction[0] > neighbors[0]) {
            neighbors = [neighborsFraction[0], neighborsFraction[1], fieldsCopy[width].color];
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
    }

    changeTestCycles(event) {
        this.options.testCycles = parseInt(event.target.value);
    }

    calculateProbability() {
        this.main.tests.calculateProbability(1, this.options.testCycles);
    }

    loadDefault() {
        if (this.options.board.width === 100) {
            this.fields[1].setLife("255,0,0", 0.5);
            this.fields[98].setLife("255,0,0", 0.5);
        }
    }
}