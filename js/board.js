class Board {
    constructor(options, testBoards, main) {
        this.element = document.createElement("div");
        this.element.className = "board";
        this.options = options;
        this.testBoards = testBoards;
        this.main = main;
        this.fields = [];
        this.interval = null;
        this.cyclesNumber = 0;
        this.isStart = false;
        this.barrierPosition = [-1, this.options.board.width];
        this.barrierNumber = [-1, this.options.board.width];
        this.barrierDirection = [true, true];
        this.barrierPhase = [-Math.PI / 2.0, Math.PI / 2.0];
        this.fieldSizeStyle = document.createElement('style');
        this.fieldSizeStyle.innerHTML = '.fieldSize { width: ' + this.options.board.fieldSize + 'px; height: ' + this.options.board.fieldSize + 'px; }';
        document.head.appendChild(this.fieldSizeStyle);
        this.makeNewBoard();
    }

    makeNewBoard() {
        this.cyclesNumber = 0;
        document.querySelector("#cycles").innerHTML = "Cycle " + this.cyclesNumber;
        this.barrierPosition = [-1, this.options.board.width];
        this.barrierNumber = [-1, this.options.board.width];
        this.barrierDirection = [true, true];
        this.barrierPhase = [-Math.PI / 2.0, Math.PI / 2.0];
        this.isStart = false;
        this.element.innerHTML = "";
        this.changeBoardStyle();
        this.fields = [];
        for (let i = 0; i < this.options.board.height; i++) {
            this.fields[i] = [];
            for (let j = 0; j < this.options.board.width; j++) {
                this.fields[i][j] = new Field(i, j, this.options.board.fieldSize, this.options);
                this.fields[i][j].getElement().addEventListener("mousedown", () => this.fieldMouseDown(i, j));
                this.fields[i][j].getElement().addEventListener("mouseover", () => this.fieldMouseOver(i, j));
                if (!this.options.innerBorders)
                    this.fields[i][j].getElement().style.border = "none";
                this.element.appendChild(this.fields[i][j].getElement());
            }
        }
    }

    changeBoardStyle() {
        this.element.style.gridTemplateRows = "repeat(" + this.options.board.height + ", 1fr)";
        this.element.style.gridTemplateColumns = "repeat(" + this.options.board.width + ", 1fr)";
        if (this.options.innerBorders) {
            this.element.style.width = this.options.board.width * this.options.board.fieldSize + 2 * this.options.board.width + "px";
            this.element.style.height = this.options.board.height * this.options.board.fieldSize + 2 * this.options.board.height + "px";
            this.fields.forEach((el) => el.forEach((el) => el.getElement().style.border = "1px grey solid"));
        } else {
            this.element.style.width = this.options.board.width * this.options.board.fieldSize + "px";
            this.element.style.height = this.options.board.height * this.options.board.fieldSize + "px";
            this.fields.forEach((el) => el.forEach((el) => el.getElement().style.border = "none"));
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
        } else if (event.target.name === "height") {
            this.options.board.height = parseInt(event.target.value);
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

    fieldMouseDown(i, j) {
        this.fieldClick();
        this.fieldMouseOver(i, j);
    }

    fieldMouseOver(i, j) {
        if (!this.isStart && this.options.mouseDown) {
            if (this.options.setBlock) {
                this.fields[i][j].makeBlock();
                if (this.options.wholeColumn)
                    for (let k = 0; k < this.options.board.height; k++)
                        this.fields[k][j].makeBlock();
                if (this.options.wholeRow)
                    for (let k = 0; k < this.options.board.width; k++)
                        this.fields[i][k].makeBlock();
            } else if (this.options.setDead) {
                this.fields[i][j].makeDead();
                if (this.options.wholeColumn)
                    for (let k = 0; k < this.options.board.height; k++)
                        this.fields[k][j].makeDead();
                if (this.options.wholeRow)
                    for (let k = 0; k < this.options.board.width; k++)
                        this.fields[i][k].makeDead();
            } else if (this.options.setAlive) {
                this.fields[i][j].makeAlive();
                if (this.options.wholeColumn)
                    for (let k = 0; k < this.options.board.height; k++)
                        this.fields[k][j].makeAlive();
                if (this.options.wholeRow)
                    for (let k = 0; k < this.options.board.width; k++)
                        this.fields[i][k].makeAlive();
            } else {
                this.fields[i][j].click();
                if (this.options.wholeColumn) {
                    for (let k = 0; k < this.options.board.height; k++) {
                        if (k !== i) this.fields[k][j].click();
                    }
                }
                if (this.options.wholeRow) {
                    for (let k = 0; k < this.options.board.width; k++) {
                        if (k !== j) this.fields[i][k].click();
                    }
                }
            }
        }
    }

    steps() {
        if (this.options.movingBarriers) {
            for (let i = 0; i < 2; i++) {
                if (this.cyclesNumber >= this.options.barriersMoveFromCycle[i]) {
                    if (this.options.barriersLinear[i]) {
                        this.moveBarrier(i, "linear");
                    } else {
                        this.moveBarrier(i, "sinusoid");
                    }
                }
            }
        }

        let fieldsCopy = [];
        for (let i = 0; i < this.fields.length; i++) {
            fieldsCopy.push([]);
            for (let j = 0; j < this.fields[i].length; j++) {
                if (this.fields[i][j].getType() === "block") {
                    this.fields[i][j].nextCycle();
                }
                fieldsCopy[i].push({
                    width: i,
                    height: j,
                    type: this.fields[i][j].getType(),
                    life: this.fields[i][j].getLife(),
                    imaginaryLife: this.fields[i][j].imaginaryLife,
                    color: this.fields[i][j].getColor(),
                    phase: this.fields[i][j].phase,
                    phaseStep: this.fields[i][j].phaseStep
                });
            }
        }

        for (let i = 0; i < this.fields.length; i++) {
            for (let j = 0; j < this.fields[i].length; j++) {
                this.changeFields(i, j, fieldsCopy);
            }
        }
        // let max = 0;
        // for (let i = 0; i < this.fields.length; i++) {
        //     for (let j = 0; j < this.fields[i].length; j++) {
        //         this.changeFields(i, j, fieldsCopy);
        //         if (this.fields[i][j].getModulus() > max)
        //             max = this.fields[i][j].getModulus();
        //     }
        // }
        this.cyclesNumber++;
        document.querySelector("#cycles").innerHTML = "Cycle " + this.cyclesNumber;
    }

    changeFields(width, height, fieldsCopy) {
        let probability = Math.random() * 100;
        let neighborsNumber;
        if (this.options.fractionNeighbors) {
            neighborsNumber = this.countNeighborsNumberAndColor(width, height, fieldsCopy)
        } else {
            neighborsNumber = this.countNeighborsNumber(width, height, fieldsCopy);
        }
        if (this.getModulus(neighborsNumber[0], neighborsNumber[1]) > 0 && probability > this.options.probability) {
            if (this.fields[width][height].getType() !== "block") {
                if (this.fields[width][height].getType() === "dead") {
                    let neighbors = this.countNeighborsNumberAndColor(width, height, fieldsCopy);
                    if (this.getModulus(neighbors[0], neighbors[1]) < this.options.minDeadCell || this.getModulus(neighbors[0], neighbors[1]) > this.options.maxDeadCell || this.getModulus(neighbors[2], neighbors[3]) > this.options.toManyOtherTribes) {
                        this.fields[width][height].setLife(neighbors[4], ...this.getAverageMass(width, height, fieldsCopy), this.getAveragePhase(width, height, fieldsCopy));
                        this.fields[width][height].updateMassAndPhaseWithoutNeighbours();
                    }
                } else {
                    let neighbors = this.countNeighborsNumberAndColor(width, height, fieldsCopy);
                    if (this.getModulus(neighbors[0], neighbors[1]) < this.options.minDeadCell || this.getModulus(neighbors[0], neighbors[1]) > this.options.maxDeadCell || this.getModulus(neighbors[2], neighbors[3]) > this.options.toManyOtherTribes) {
                        this.fields[width][height].setLife(neighbors[4], ...this.getAverageMass(width, height, fieldsCopy), this.getAveragePhase(width, height, fieldsCopy));
                        this.fields[width][height].updateMassAndPhaseWithoutNeighbours();
                    } else {
                        this.fields[width][height].makeDead();
                    }
                }
            } else {
                if (this.fields[width][height].flashing && !this.fields[width][height].isVisible) {
                    let neighbors = this.countNeighborsNumberAndColor(width, height, fieldsCopy);
                    if (this.fields[width][height].life === 0.0) {
                        this.fields[width][height].color = neighbors[4];
                        this.fields[width][height].life = this.getAverageMass(width, height, fieldsCopy)[0];
                        this.fields[width][height].imaginaryLife = this.getAverageMass(width, height, fieldsCopy)[1];
                        this.fields[width][height].phase = this.getAveragePhase(width, height, fieldsCopy);
                        this.fields[width][height].updateMassAndPhaseWithoutNeighbours();
                        this.changeFullColor();
                    } else {
                        if (this.getModulus(neighbors[0], neighbors[1]) < this.options.minDeadCell || this.getModulus(neighbors[0], neighbors[1]) > this.options.maxDeadCell || this.getModulus(neighbors[2], neighbors[3]) > this.options.toManyOtherTribes) {
                            this.fields[width][height].color = neighbors[4];
                            this.fields[width][height].life = this.getAverageMass(width, height, fieldsCopy)[0];
                            this.fields[width][height].imaginaryLife = this.getAverageMass(width, height, fieldsCopy)[1];
                            this.fields[width][height].phase = this.getAveragePhase(width, height, fieldsCopy);
                            this.fields[width][height].updateMassAndPhaseWithoutNeighbours();
                            this.changeFullColor();
                        } else {
                            this.fields[width][height].life = 0.0;
                            this.fields[width][height].imaginaryLife = 0.0;
                            this.fields[width][height].phase = 0.0;
                        }
                    }
                }
            }
            return;
        }

        if (this.options.fractionNeighbors) {
            if (fieldsCopy[width][height].type === "alive") {
                if (this.getModulus(neighborsNumber[0], neighborsNumber[1]) < this.options.underpopulation || this.getModulus(neighborsNumber[0], neighborsNumber[1]) > this.options.overpopulation) {
                    this.fields[width][height].makeDead();
                } else {
                    this.fields[width][height].setLife(this.fields[width][height].color, ...this.getNextCycleMass(fieldsCopy[width][height], neighborsNumber), this.getNextCyclePhase(fieldsCopy[width][height]));
                }
            } else if (fieldsCopy[width][height].type === "dead") {
                let neighbors = this.countNeighborsNumberAndColor(width, height, fieldsCopy)
                if (this.getModulus(neighbors[0], neighbors[1]) > this.options.minDeadCell && this.getModulus(neighbors[0], neighbors[1]) < this.options.maxDeadCell && this.getModulus(neighbors[2], neighbors[3]) < this.options.toManyOtherTribes) {
                    this.fields[width][height].setLife(neighbors[4], neighbors[0] / 2.0 + neighbors[2] / 4.0, neighbors[1] / 2.0 + neighbors[3] / 4.0, this.getAveragePhase(width, height, fieldsCopy));
                    this.fields[width][height].updateMassAndPhaseWithoutNeighbours();
                }
            } else if (fieldsCopy[width][height].type === "block" && this.fields[width][height].flashing && !this.fields[width][height].isVisible) {
                if (this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0) {
                    if (this.getModulus(neighborsNumber[0], neighborsNumber[1]) < this.options.underpopulation || this.getModulus(neighborsNumber[0], neighborsNumber[1]) > this.options.overpopulation) {
                        this.fields[width][height].life = 0.0;
                        this.fields[width][height].imaginaryLife = 0.0;
                        this.fields[width][height].phase = 0.0;
                    } else {
                        this.fields[width][height].setLife(this.fields[width][height].color, ...this.getNextCycleMass(fieldsCopy[width][height], neighborsNumber), this.getNextCyclePhase(fieldsCopy[width][height]));
                    }
                } else {
                    let neighbors = this.countNeighborsNumberAndColor(width, height, fieldsCopy)
                    if (this.getModulus(neighbors[0], neighbors[1]) > this.options.minDeadCell && this.getModulus(neighbors[0], neighbors[1]) < this.options.maxDeadCell && this.getModulus(neighbors[2], neighbors[3]) < this.options.toManyOtherTribes) {
                        this.fields[width][height].setLife(neighbors[4], neighbors[0] / 2.0 + neighbors[2] / 4.0, neighbors[1] / 2.0 + neighbors[3] / 4.0, this.getAveragePhase(width, height, fieldsCopy));
                        this.fields[width][height].updateMassAndPhaseWithoutNeighbours();
                    }
                }
            }
        } else {
            if (fieldsCopy[width][height].type === "alive") {
                if (neighborsNumber[0] < 2 || neighborsNumber[0] > 3) {
                    this.fields[width][height].makeDead();
                }
            } else if (fieldsCopy[width][height].type === "dead") {
                if (neighborsNumber[0] === 3) {
                    this.fields[width][height].makeAlive();
                }
            } else if (fieldsCopy[width][height].type === "block" && this.fields[width][height].flashing && !this.fields[width][height].isVisible) {
                if (this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0) {
                    if (neighborsNumber[0] < 2 || neighborsNumber[0] > 3) {
                        fieldsCopy[width][height].life = 0.0
                        fieldsCopy[width][height].imaginaryLife = 0.0
                        fieldsCopy[width][height].phase = 0.0
                    }
                } else {
                    if (neighborsNumber[0] === 3) {
                        let neighbors = this.countNeighborsNumberAndColor(width, height, fieldsCopy);
                        this.fields[width][height].setLife(neighbors[4], neighbors[0] / 2.0 + neighbors[2] / 4.0, neighbors[1] / 2.0 + neighbors[3] / 4.0, this.getAveragePhase(width, height, fieldsCopy));
                        this.fields[width][height].updateMassAndPhaseWithoutNeighbours();
                    }
                }
            }
        }
    }

    countNeighborsNumber(width, height, fieldsCopy) {
        let neighborsNumber = 0;

        if (width > 0 && height > 0 || !this.options.borders["borderBottom"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                neighborsNumber++;
        }
        if (width > 0 || !this.options.borders["borderBottom"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                neighborsNumber++;
        }
        if (width > 0 && height < this.options.board.width - 1 || !this.options.borders["borderBottom"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                neighborsNumber++;
        }
        if (height > 0 || !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                neighborsNumber++;
        }
        if (height < this.options.board.width - 1 || !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                neighborsNumber++;
        }
        if (width < this.options.board.height - 1 && height > 0 || !this.options.borders["borderTop"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                neighborsNumber++;
        }
        if (width < this.options.board.height - 1 || !this.options.borders["borderTop"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                neighborsNumber++;
        }
        if (width < this.options.board.height - 1 && height < this.options.board.width - 1 || !this.options.borders["borderTop"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                neighborsNumber++;
        }
        if (this.options.neighboursRange > 1) {
            if ((width > 1 || !this.options.borders["borderBottom"]) && (height > 1 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width > 1 || !this.options.borders["borderBottom"]) && (height > 0 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width - 1) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if (width > 1 || !this.options.borders["borderBottom"]) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width > 1 || !this.options.borders["borderBottom"]) && (height < this.options.board.width - 1 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width + 1) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width > 1 || !this.options.borders["borderBottom"]) && (height < this.options.board.width - 2 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width > 0 || !this.options.borders["borderBottom"]) && (height > 1 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height - 1) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width > 0 || !this.options.borders["borderBottom"]) && (height < this.options.board.width - 2 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height - 1) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if (height > 1 || !this.options.borders["borderRight"]) {
                const i = (width + this.options.board.height) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if (height < this.options.board.width - 2 || !this.options.borders["borderLeft"]) {
                const i = (width + this.options.board.height) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width < this.options.board.height - 1 || !this.options.borders["borderTop"]) && (height > 1 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height + 1) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width < this.options.board.height - 1 || !this.options.borders["borderTop"]) && (height < this.options.board.width - 2 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height + 1) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width < this.options.board.height - 2 || !this.options.borders["borderTop"]) && (height > 1 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width < this.options.board.height - 2 || !this.options.borders["borderTop"]) && (height > 0 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width - 1) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if (width < this.options.board.height - 2 || !this.options.borders["borderTop"]) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width < this.options.board.height - 2 || !this.options.borders["borderTop"]) && (height < this.options.board.width - 1 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width + 1) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
            if ((width < this.options.board.height - 2 || !this.options.borders["borderTop"]) && (height < this.options.board.width - 2 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && this.getModulus(fieldsCopy[width][height].life, fieldsCopy[width][height].imaginaryLife) !== 0.0))
                    neighborsNumber++;
            }
        }

        return [neighborsNumber, neighborsNumber];
    }

    countNeighborsFraction(width, height, fieldsCopy) {
        let neighborsFraction = [0.0, 0.0, 0.0, 0.0, 0.0];
        let neighboursPower = 1.0;
        if (this.options.neighboursRange > 1) {
            neighboursPower = 0.75;
        }

        if (width > 0 && height > 0 || !this.options.borders["borderBottom"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width > 0 || !this.options.borders["borderBottom"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width > 0 && height < this.options.board.width - 1 || !this.options.borders["borderBottom"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (height > 0 || !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (height < this.options.board.width - 1 || !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width < this.options.board.height - 1 && height > 0 || !this.options.borders["borderTop"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width < this.options.board.height - 1 || !this.options.borders["borderTop"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width < this.options.board.height - 1 && height < this.options.board.width - 1 || !this.options.borders["borderTop"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (this.options.neighboursRange > 1) {
            neighboursPower = 0.25;
            if ((width > 1 || !this.options.borders["borderBottom"]) && (height > 1 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width > 1 || !this.options.borders["borderBottom"]) && (height > 0 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width - 1) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if (width > 1 || !this.options.borders["borderBottom"]) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width > 1 || !this.options.borders["borderBottom"]) && (height < this.options.board.width - 1 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width + 1) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width > 1 || !this.options.borders["borderBottom"]) && (height < this.options.board.width - 2 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height - 2) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width > 0 || !this.options.borders["borderBottom"]) && (height > 1 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height - 1) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width > 0 || !this.options.borders["borderBottom"]) && (height < this.options.board.width - 2 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height - 1) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if (height > 1 || !this.options.borders["borderRight"]) {
                const i = (width + this.options.board.height) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if (height < this.options.board.width - 2 || !this.options.borders["borderLeft"]) {
                const i = (width + this.options.board.height) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width < this.options.board.height - 1 || !this.options.borders["borderTop"]) && (height > 1 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height + 1) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width < this.options.board.height - 1 || !this.options.borders["borderTop"]) && (height < this.options.board.width - 2 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height + 1) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width < this.options.board.height - 2 || !this.options.borders["borderTop"]) && (height > 1 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width - 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width < this.options.board.height - 2 || !this.options.borders["borderTop"]) && (height > 0 || !this.options.borders["borderRight"])) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width - 1) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if (width < this.options.board.height - 2 || !this.options.borders["borderTop"]) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width < this.options.board.height - 2 || !this.options.borders["borderTop"]) && (height < this.options.board.width - 1 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width + 1) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
            }
            if ((width < this.options.board.height - 2 || !this.options.borders["borderTop"]) && (height < this.options.board.width - 2 || !this.options.borders["borderLeft"])) {
                const i = (width + this.options.board.height + 2) % this.options.board.height;
                const j = (height + this.options.board.width + 2) % this.options.board.width;
                if (fieldsCopy[i][j].type === "alive" ||
                    (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                    neighborsFraction = this.addNeighborsFraction(neighboursPower, neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
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

    countNeighborsNumberAndColor(width, height, fieldsCopy) {
        const color = fieldsCopy[width][height].color;
        let neighbors = [0.0, 0.0, 0.0, 0.0, color, 0.0];
        for (let tribe = 0; tribe < this.options.colors.length && tribe < this.options.tribesNumber; tribe++) {
            fieldsCopy[width][height].color = this.options.colors[tribe];
            const neighborsFraction = this.countNeighborsFraction(width, height, fieldsCopy);
            if (this.getModulus(neighborsFraction[0], neighborsFraction[1]) > this.getModulus(neighbors[0], neighbors[1])) {
                neighbors = [neighborsFraction[0], neighborsFraction[1], neighborsFraction[2], neighborsFraction[3], fieldsCopy[width][height].color, neighborsFraction[4]];
            }
        }
        fieldsCopy[width][height].color = color;
        return neighbors;
    }

    insertShape(configurations) {
        let shape = document.querySelector("#configurations").value.split('_');
        let shapesInType = configurations[shape[0]];
        let positions = [];
        shapesInType.forEach((el) => {
            if (el.name === shape[1]) {
                positions = el.positions;
            }
        });
        this.coordinatesToShape(positions);
    }

    coordinatesToShape(positions) {
        let positionsI = [];
        let positionsJ = [];
        for (let i = 0; i < positions.length; i++) {
            i % 2 === 0 ? positionsI.push(positions[i]) : positionsJ.push(positions[i]);
        }
        if (Math.max(...positionsI) >= this.options.board.height || Math.max(...positionsJ) >= this.options.board.width) {
            alert("Too big ship");
            return;
        }
        for (let i = 0; i < positions.length; i = i + 2) {
            this.fields[positions[i]][positions[i + 1]].makeAlive();
        }
    }

    fetchShape() {
        let positions = [];
        for (let i = 0; i < this.fields.length; i++) {
            for (let j = 0; j < this.fields[i].length; j++) {
                if (this.fields[i][j].isAlive()) {
                    positions.push(i);
                    positions.push(j);
                }
            }
        }
        console.log(positions);
    }

    changeTimeInterval(event) {
        this.options.timeInterval = parseInt(event.target.value);
        if (this.isStart) {
            clearInterval(this.interval);
            this.interval = setInterval(() => this.steps(), this.options.timeInterval);
        }
    }

    clearBoard(clearBlocks) {
        if (this.isStart) {
            clearInterval(this.interval)
        }
        for (let i = 0; i < this.options.board.height; i++) {
            for (let j = 0; j < this.options.board.width; j++) {
                if (clearBlocks || this.fields[i][j].getType() !== "block") {
                    this.fields[i][j].makeDead();
                }
            }
        }
        if (this.isStart) {
            this.interval = setInterval(() => this.steps(), this.options.timeInterval);
        }
    }

    changeProbability(event) {
        this.options.probability = event.target.value;
    }

    changeNeighbors(event) {
        this.options.fractionNeighbors = event.target.checked;
        this.fields.forEach((el) => el.forEach((el) => el.changeFullColor()));
    }

    changeBorder(event) {
        this.options.borders[event.target.id] = !this.options.borders[event.target.id];
        this.setBoundaries();
    }

    boundariesOn() {
        this.options.borders = {borderTop: true, borderBottom: true, borderLeft: true, borderRight: true};
        document.querySelectorAll(".border").forEach((el) => el.style.backgroundColor = "black");
        this.setBoundaries();
    }

    boundariesOff() {
        this.options.borders = {borderTop: false, borderBottom: false, borderLeft: false, borderRight: false};
        this.setBoundaries();
    }

    setBoundaries() {
        for (let border in this.options.borders) {
            let el = document.querySelector("#" + border);
            if (this.options.borders.hasOwnProperty(border) && this.options.borders[border]) {
                el.style.backgroundColor = "black";
                this.element.style[border] = "10px black solid";
            } else {
                el.style.backgroundColor = "white";
                this.element.style[border] = "10px white solid";
            }
        }
    }

    changeTribesNumber(event) {
        this.options.tribesNumber = parseInt(event.target.value);
    }

    generateTribes() {
        this.clearBoard(false);
        const sigma = this.options.gaussRange / 5;
        for (let tribe = 0; tribe < this.options.colors.length && tribe < this.options.tribesNumber; tribe++) {
            let sum = 0.0;
            let x0 = (Math.floor(Math.random() * this.options.board.width));
            let y0 = (Math.floor(Math.random() * this.options.board.height));
            for (let i = 0; i < this.options.board.height; i++) {
                for (let j = 0; j < this.options.board.width; j++) {
                    if (this.fields[i][j].getType() !== "block") {
                        let life = this.calculateLife(x0, y0, this.fields[i][j].x, this.fields[i][j].y, sigma);
                        if (life < 0.0001) life = 0;
                        sum += life;
                        if (this.options.subtractGenerating) {
                            if (life > this.fields[i][j].getModulus()) {
                                this.fields[i][j].setLife(this.options.colors[tribe], life - this.fields[i][j].getModulus() / Math.sqrt(2.0), life - this.fields[i][j].getModulus() / Math.sqrt(2.0));
                            } else if (this.fields[i][j].isAlive()) {
                                this.fields[i][j].setLife(this.fields[i][j].color, this.fields[i][j].getLife() / Math.sqrt(2.0) - life, this.fields[i][j].getLife() / Math.sqrt(2.0) - life);
                            }
                        } else if (life > this.fields[i][j].getLife()) {
                            this.fields[i][j].setLife(this.options.colors[tribe], life / Math.sqrt(2.0), life / Math.sqrt(2.0));
                        }
                    }
                }
            }
            this.fields.forEach((el) => el.forEach((el) => el.reduceLifeByVolume(this.options.colors[tribe], sum / this.options.massOfTribe)));
        }
    }

    calculateLife(x0, y0, x, y, sigma) {
        let distanceXMin = Math.abs(x0 - x);
        let distanceYMin = Math.abs(y0 - y);

        if (!this.options.borders.borderTop) {
            const distanceY = y0 + this.options.board.height - y;
            if (distanceYMin > distanceY) distanceYMin = distanceY;
        }
        if (!this.options.borders.borderBottom) {
            const distanceY = y + this.options.board.height - y0;
            if (distanceYMin > distanceY) distanceYMin = distanceY;
        }
        if (!this.options.borders.borderLeft) {
            const distanceX = x0 + this.options.board.width - x;
            if (distanceXMin > distanceX) distanceXMin = distanceX;
        }
        if (!this.options.borders.borderRight) {
            const distanceX = x + this.options.board.width - x0;
            if (distanceXMin > distanceX) distanceXMin = distanceX;
        }

        return Math.exp(-(distanceXMin * distanceXMin / sigma + distanceYMin * distanceYMin / sigma));
    }

    changeInnerBorders(event) {
        this.options.innerBorders = event.target.checked;
        this.changeBoardStyle();
    }

    changeSubtractGenerating(event) {
        this.options.subtractGenerating = event.target.checked;
    }

    changeGaussRange(event) {
        this.options.gaussRange = parseInt(event.target.value);
    }

    changeMassOfTribe(event) {
        this.options.massOfTribe = parseInt(event.target.value);
    }

    changeFullColor(event) {
        this.options.showFullColor = event.target.checked;
        this.fields.forEach((el) => el.forEach((el) => el.changeFullColor()));
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

    changeToManyOtherTribes(event) {
        this.options.toManyOtherTribes = event.target.value;
    }

    changeSetBlock(event) {
        this.options.setBlock = event.target.checked;
        if (this.options.setBlock) {
            this.options.setDead = false;
            document.querySelector("#setDead").checked = false;
            this.options.setAlive = false;
            document.querySelector("#setAlive").checked = false;
        }
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

    changeWholeColumn(event) {
        this.options.wholeColumn = event.target.checked;
    }

    changeWholeRow(event) {
        this.options.wholeRow = event.target.checked;
    }

    changeBlockIntensity(event) {
        this.options.blockIntensity = parseInt(event.target.value);
    }

    changeFlashing(event) {
        this.options.flashing = event.target.checked;
        if (!this.options.flashing) {
            document.querySelector("#disappearsAfter").disabled = true;
            document.querySelector("#appearsAfter").disabled = true;
        } else {
            document.querySelector("#disappearsAfter").disabled = false;
            document.querySelector("#appearsAfter").disabled = false;
        }
    }

    changeDisappearsAfter(event) {
        this.options.disappearsAfter = parseInt(event.target.value);
    }

    changeAppearsAfter(event) {
        this.options.appearsAfter = parseInt(event.target.value);
    }

    loadConfiguration(index = -1) {
        if (index === -1) {
            index = parseInt(document.querySelector("#loadConfiguration").value)
        }
        if (this.isStart) {
            this.isStart = false;
            clearInterval(this.interval);
        }
        this.clearBoard(true);
        this.setBoardFromJson(this.testBoards[index]);
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
                this.fields[testBoard.cells[i].positions[j].x][testBoard.cells[i].positions[j].y].setCell(testBoard.cells[i]);
            }
        }
    }

    setInitialValues() {
        document.querySelector("#width").value = this.options.board.width;
        document.querySelector("#height").value = this.options.board.height;
        document.querySelector("#fieldSize").value = this.options.board.fieldSize;
        document.querySelector("#probability").value = this.options.probability;
        document.querySelector("#fractionLife").checked = this.options.fractionNeighbors;
        document.querySelector("#time").value = this.options.timeInterval;
        document.querySelector("#tribesNumber").value = this.options.tribesNumber;
        document.querySelector("#innerBorders").checked = this.options.innerBorders;
        document.querySelector("#subtractGenerating").checked = this.options.subtractGenerating;
        document.querySelector("#showFullColor").checked = this.options.showFullColor;
        document.querySelector("#gaussRange").value = this.options.gaussRange;
        document.querySelector("#massOfTribe").value = this.options.massOfTribe;
        document.querySelector("#underpopulation").value = this.options.underpopulation;
        document.querySelector("#overpopulation").value = this.options.overpopulation;
        document.querySelector("#minDeadCell").value = this.options.minDeadCell;
        document.querySelector("#maxDeadCell").value = this.options.maxDeadCell;
        document.querySelector("#toManyOtherTribes").value = this.options.toManyOtherTribes;
        document.querySelector("#setBlock").checked = this.options.setBlock;
        document.querySelector("#setDead").checked = this.options.setDead;
        document.querySelector("#setAlive").checked = this.options.setAlive;
        document.querySelector("#wholeColumn").checked = this.options.wholeColumn;
        document.querySelector("#wholeRow").checked = this.options.wholeRow;
        document.querySelector("#blockIntensity").value = this.options.blockIntensity;
        document.querySelector("#flashing").checked = this.options.flashing;
        document.querySelector("#disappearsAfter").value = this.options.disappearsAfter;
        document.querySelector("#appearsAfter").value = this.options.appearsAfter;
        document.querySelector("#disappearsAfter").disabled = !this.options.flashing;
        document.querySelector("#appearsAfter").disabled = !this.options.flashing;
        document.querySelector("#neighboursRange").value = this.options.neighboursRange;
        document.querySelector("#movingBarriers").checked = this.options.movingBarriers;
        document.querySelector("#leftStartsAfter").value = this.options.barriersMoveFromCycle[0];
        document.querySelector("#leftStartsAfter").disabled = !this.options.movingBarriers;
        document.querySelector("#rightStartsAfter").value = this.options.barriersMoveFromCycle[1];
        document.querySelector("#rightStartsAfter").disabled = !this.options.movingBarriers;
        document.querySelector("#leftLinearBarriers").checked = this.options.barriersLinear[0];
        document.querySelector("#leftLinearBarriers").disabled = !this.options.movingBarriers;
        document.querySelector("#rightLinearBarriers").checked = this.options.barriersLinear[1];
        document.querySelector("#rightLinearBarriers").disabled = !this.options.movingBarriers;
        document.querySelector("#leftSinusoidBarriers").checked = this.options.barriersSinusoid[0];
        document.querySelector("#leftSinusoidBarriers").disabled = !this.options.movingBarriers;
        document.querySelector("#rightSinusoidBarriers").checked = this.options.barriersSinusoid[1];
        document.querySelector("#rightSinusoidBarriers").disabled = !this.options.movingBarriers;
        document.querySelector("#leftAmplitude").value = this.options.barriersAmplitude[0];
        document.querySelector("#leftAmplitude").disabled = !this.options.movingBarriers;
        document.querySelector("#rightAmplitude").value = this.options.barriersAmplitude[1];
        document.querySelector("#rightAmplitude").disabled = !this.options.movingBarriers;
        document.querySelector("#leftPeriod").value = this.options.barriersPeriod[0];
        document.querySelector("#leftPeriod").disabled = !this.options.movingBarriers;
        document.querySelector("#rightPeriod").value = this.options.barriersPeriod[1];
        document.querySelector("#rightPeriod").disabled = !this.options.movingBarriers;
        document.querySelector("#testRepetitions").value = this.options.testRepetitions;
        document.querySelector("#testCycles").value = this.options.testCycles;
        document.querySelector("#testTribes").checked = this.options.testTribes;
        this.setBoundaries();
    }

    saveConfiguration() {
        let options = this.options;
        options.cells = this.fetchCells();
        options = JSON.stringify(options)
        console.log(options.replace(/"([^"]+)":/g, '$1:'));
    }

    fetchCells() {
        const cells = [];
        for (let i = 0; i < this.fields.length; i++) {
            for (let j = 0; j < this.fields[i].length; j++) {
                if (this.fields[i][j].type === "alive") {
                    cells.push({
                        type: "alive",
                        positions: [{x: i, y: j}],
                        life: this.fields[i][j].life,
                        imaginaryLife: this.fields[i][j].imaginaryLife,
                        color: this.fields[i][j].color,
                        phase: this.fields[i][j].phase,
                        phaseStep: this.fields[i][j].phaseStep
                    });
                } else if (this.fields[i][j].type === "block") {
                    cells.push({
                        type: "block",
                        positions: [{x: i, y: j}],
                        flashing: this.fields[i][j].flashing,
                        disappearsAfter: this.fields[i][j].disappearsAfter,
                        appearsAfter: this.fields[i][j].appearsAfter,
                        counter: this.fields[i][j].counter,
                        blockIntensity: this.fields[i][j].blockIntensity
                    });
                }
            }
        }
        return cells;
    }

    changeNeighboursRange(event) {
        this.options.neighboursRange = parseInt(event.target.value);
    }

    addBarrier(number, direction = true) {
        if (number >= 0 && number < this.options.board.width) {
            for (let i = 0; i < this.options.board.width; i++) {
                if (direction) {
                    if (number < this.options.board.width - 2 && this.fields[i][number + 1].getType() !== "block") {
                        this.fields[i][number + 1].setLife(this.fields[i][number + 1].getColor(), this.fields[i][number].getLife() + this.fields[i][number + 1].getLife(), this.fields[i][number].imaginaryLife + this.fields[i][number + 1].imaginaryLife, this.fields[i][number].phase + this.fields[i][number + 1].phase)
                    }
                } else {
                    if (number > 0 && this.fields[i][number - 1].getType() !== "block") {
                        this.fields[i][number - 1].setLife(this.fields[i][number - 1].getColor(), this.fields[i][number].getLife() + this.fields[i][number - 1].getLife(), this.fields[i][number].imaginaryLife + this.fields[i][number - 1].imaginaryLife, this.fields[i][number].phase + this.fields[i][number - 1].phase)
                    }
                }
                this.fields[i][number].makeBlock();
            }
        }
    }

    subtractBarrier(number) {
        if (number >= 0 && number < this.options.board.width && this.fields[0][number].type === "block") {
            for (let i = 0; i < this.options.board.width; i++) {
                this.fields[i][number].makeDead();
            }
        }
    }

    changeMovingBarriers(event) {
        this.options.movingBarriers = event.target.checked;
        if (!this.options.movingBarriers) {
            document.querySelector("#leftStartsAfter").disabled = true;
            document.querySelector("#leftLinearBarriers").disabled = true;
            document.querySelector("#leftSinusoidBarriers").disabled = true;
            document.querySelector("#leftAmplitude").disabled = true;
            document.querySelector("#leftPeriod").disabled = true;
            document.querySelector("#rightStartsAfter").disabled = true;
            document.querySelector("#rightLinearBarriers").disabled = true;
            document.querySelector("#rightSinusoidBarriers").disabled = true;
            document.querySelector("#rightAmplitude").disabled = true;
            document.querySelector("#rightPeriod").disabled = true;
        } else {
            document.querySelector("#leftStartsAfter").disabled = false;
            document.querySelector("#leftLinearBarriers").disabled = false;
            document.querySelector("#leftSinusoidBarriers").disabled = false;
            document.querySelector("#leftAmplitude").disabled = false;
            document.querySelector("#leftPeriod").disabled = false;
            document.querySelector("#rightStartsAfter").disabled = false;
            document.querySelector("#rightLinearBarriers").disabled = false;
            document.querySelector("#rightSinusoidBarriers").disabled = false;
            document.querySelector("#rightAmplitude").disabled = false;
            document.querySelector("#rightPeriod").disabled = false;
        }
    }

    changeBarriersMoving(event, index) {
        this.options.barriersMoveFromCycle[index] = parseInt(event.target.value);
    }

    changeLinear(event, index) {
        this.options.barriersLinear[index] = event.target.checked;
        this.options.barriersSinusoid[index] = !event.target.checked;
        if (index === 0) {
            document.querySelector("#leftLinearBarriers").checked = event.target.checked;
            document.querySelector("#leftSinusoidBarriers").checked = !event.target.checked;
        } else {
            document.querySelector("#rightLinearBarriers").checked = event.target.checked;
            document.querySelector("#rightSinusoidBarriers").checked = !event.target.checked;
        }
    }

    changeSinusoid(event, index) {
        this.options.barriersSinusoid[index] = event.target.checked;
        this.options.barriersLinear[index] = !event.target.checked;
        if (index === 0) {
            document.querySelector("#leftSinusoidBarriers").checked = event.target.checked;
            document.querySelector("#leftLinearBarriers").checked = !event.target.checked;
        } else {
            document.querySelector("#rightSinusoidBarriers").checked = event.target.checked;
            document.querySelector("#rightLinearBarriers").checked = !event.target.checked;
        }
    }

    changeAmplitude(event, index) {
        this.options.barriersAmplitude[index] = parseInt(event.target.value);
    }

    changePeriod(event, index) {
        this.options.barriersPeriod[index] = parseInt(event.target.value);
    }

    moveBarrier(index, type) {
        if (index === 0) {
            if (type === "linear") {
                const fraction = this.options.barriersAmplitude[index] / (this.options.barriersPeriod[index] / 2.0)
                if (this.barrierDirection[index]) {
                    for (let i = this.barrierPosition[index]; i <= Math.round(this.barrierNumber[index] + fraction); i++) {
                        this.addBarrier(i);
                        this.barrierPosition[index] = Math.round(this.barrierNumber[index] + fraction);
                    }
                    this.barrierNumber[index] += fraction;
                    if (this.barrierNumber[index] >= this.options.barriersAmplitude[index] - 1) {
                        this.barrierDirection[index] = false;
                    }
                } else {
                    for (let i = this.barrierPosition[index]; i > Math.round(this.barrierNumber[index] - fraction); i--) {
                        this.subtractBarrier(i);
                        this.barrierPosition[index] = Math.round(this.barrierNumber[index] - fraction);
                    }
                    this.barrierNumber[index] -= fraction;
                    if (this.barrierNumber[index] <= -0.99) {
                        this.barrierDirection[index] = true;
                    }
                }
            } else if (type === "sinusoid") {
                const fraction = 2 * Math.PI / this.options.barriersPeriod[index];
                this.barrierPhase[index] += fraction;
                if (this.barrierPhase[index] > Math.PI) {
                    this.barrierPhase[index] -= 2 * Math.PI;
                }
                this.barrierNumber[index] = (this.options.barriersAmplitude[index] - 1) / 2.0 * Math.sin(this.barrierPhase[index]) + (this.options.barriersAmplitude[index] - 1) / 2.0
                if (this.barrierPosition[index] < Math.round(this.barrierNumber[index])) {
                    for (let i = this.barrierPosition[index]; i <= Math.round(this.barrierNumber[index]); i++) {
                        this.addBarrier(i);
                        this.barrierPosition[index] = Math.round(this.barrierNumber[index]);
                    }
                } else if (this.barrierPosition[index] > Math.round(this.barrierNumber[index])) {
                    for (let i = this.barrierPosition[index]; i >= Math.round(this.barrierNumber[index]); i--) {
                        this.subtractBarrier(i);
                        this.barrierPosition[index] = Math.round(this.barrierNumber[index]);
                    }
                }
            }
        } else if (index === 1) {
            if (type === "linear") {
                const fraction = this.options.barriersAmplitude[index] / (this.options.barriersPeriod[index] / 2.0)
                if (this.barrierDirection[index]) {
                    for (let i = this.barrierPosition[index]; i >= Math.round(this.barrierNumber[index] - fraction); i--) {
                        this.addBarrier(i, false);
                        this.barrierPosition[index] = Math.round(this.barrierNumber[index] - fraction);
                    }
                    this.barrierNumber[index] -= fraction;
                    if (this.barrierNumber[index] <= this.options.board.width - this.options.barriersAmplitude[index]) {
                        this.barrierDirection[index] = false;
                    }
                } else {
                    for (let i = this.barrierPosition[index]; i < Math.round(this.barrierNumber[index] + fraction); i++) {
                        this.subtractBarrier(i);
                        this.barrierPosition[index] = Math.round(this.barrierNumber[index] + fraction);
                    }
                    this.barrierNumber[index] += fraction;
                    if (this.barrierNumber[index] >= this.options.board.width - 0.01) {
                        this.barrierDirection[index] = true;
                    }
                }
            } else if (type === "sinusoid") {
                const fraction = 2 * Math.PI / this.options.barriersPeriod[index];
                this.barrierPhase[index] += fraction;
                if (this.barrierPhase[index] > Math.PI) {
                    this.barrierPhase[index] -= 2 * Math.PI;
                }
                this.barrierNumber[index] = (this.options.barriersAmplitude[index] - 1) / 2.0 * Math.sin(this.barrierPhase[index]) + (this.options.barriersAmplitude[index] - 1) / 2.0 + (this.options.board.width - this.options.barriersAmplitude[index])
                if (this.barrierPosition[index] > Math.round(this.barrierNumber[index])) {
                    for (let i = this.barrierPosition[index]; i >= Math.round(this.barrierNumber[index]); i--) {
                        this.addBarrier(i, false);
                        this.barrierPosition[index] = Math.round(this.barrierNumber[index]);
                    }
                } else if (this.barrierPosition[index] < Math.round(this.barrierNumber[index])) {
                    for (let i = this.barrierPosition[index]; i <= Math.round(this.barrierNumber[index]); i++) {
                        this.subtractBarrier(i);
                        this.barrierPosition[index] = Math.round(this.barrierNumber[index]);
                    }
                }
            }
        }
    }

    changeTestRepetitions(event) {
        this.options.testRepetitions = parseInt(event.target.value);
    }

    changeTestCycles(event) {
        this.options.testCycles = parseInt(event.target.value);
    }

    changeTestTribes(event) {
        this.options.testTribes = event.target.checked;
    }

    calculateProbability() {
        let options = this.options;
        options.cells = this.fetchCells();
        this.main.tests.calculateProbability(this.options.testRepetitions, this.options.testCycles, -1, true, this.options.testTribes, options, this.options.average);
    }

    addConfiguration(configuration) {
        this.testBoards.push(configuration);
        return this.testBoards.length - 1;
    }

    getModulus(re, im) {
        return Math.sqrt(re * re + im * im);
    }

    getNextCycleMass(cell, neighbors) {
        const modulus = this.getModulus(cell.life, cell.imaginaryLife) * (this.getModulus(neighbors[0], neighbors[1]) / 2.0 + this.getModulus(neighbors[2], neighbors[3]) / 3.0);
        return [modulus * Math.cos(this.getNextCyclePhase(cell)), modulus * Math.sin(this.getNextCyclePhase(cell))];
    }

    getNextCyclePhase(cell) {
        return cell.phase + cell.phaseStep;
    }

    getAverageMass(x, y, fieldsCopy) {
        const width = x;
        const height = y;
        let life = 0.0;
        let imaginaryLife = 0.0;
        let livingCells = 0;
        if (width > 0 && height > 0 || !this.options.borders["borderBottom"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                life += fieldsCopy[i][j].life;
                imaginaryLife += fieldsCopy[i][j].imaginaryLife;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width > 0 || !this.options.borders["borderBottom"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                life += fieldsCopy[i][j].life;
                imaginaryLife += fieldsCopy[i][j].imaginaryLife;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width > 0 && height < this.options.board.width - 1 || !this.options.borders["borderBottom"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                life += fieldsCopy[i][j].life;
                imaginaryLife += fieldsCopy[i][j].imaginaryLife;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (height > 0 || !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                life += fieldsCopy[i][j].life;
                imaginaryLife += fieldsCopy[i][j].imaginaryLife;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (height < this.options.board.width - 1 || !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                life += fieldsCopy[i][j].life;
                imaginaryLife += fieldsCopy[i][j].imaginaryLife;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width < this.options.board.height - 1 && height > 0 || !this.options.borders["borderTop"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                life += fieldsCopy[i][j].life;
                imaginaryLife += fieldsCopy[i][j].imaginaryLife;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width < this.options.board.height - 1 || !this.options.borders["borderTop"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                life += fieldsCopy[i][j].life;
                imaginaryLife += fieldsCopy[i][j].imaginaryLife;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width < this.options.board.height - 1 && height < this.options.board.width - 1 || !this.options.borders["borderTop"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                life += fieldsCopy[i][j].life;
                imaginaryLife += fieldsCopy[i][j].imaginaryLife;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (livingCells < 0.01) return [0, 0];
        return [life / livingCells, imaginaryLife / livingCells];
    }

    getAveragePhase(x, y, fieldsCopy) {
        const width = x;
        const height = y;
        let phase = 0.0;
        let livingCells = 0;
        if (width > 0 && height > 0 || !this.options.borders["borderBottom"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                phase += fieldsCopy[i][j].phase;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width > 0 || !this.options.borders["borderBottom"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                phase += fieldsCopy[i][j].phase;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width > 0 && height < this.options.board.width - 1 || !this.options.borders["borderBottom"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                phase += fieldsCopy[i][j].phase;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (height > 0 || !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                phase += fieldsCopy[i][j].phase;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (height < this.options.board.width - 1 || !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                phase += fieldsCopy[i][j].phase;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width < this.options.board.height - 1 && height > 0 || !this.options.borders["borderTop"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                phase += fieldsCopy[i][j].phase;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width < this.options.board.height - 1 || !this.options.borders["borderTop"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                phase += fieldsCopy[i][j].phase;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (width < this.options.board.height - 1 && height < this.options.board.width - 1 || !this.options.borders["borderTop"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible)) {
                phase += fieldsCopy[i][j].phase;
                livingCells += this.addLivingCells(fieldsCopy[i][j]);
            }
        }
        if (livingCells < 0.01) return 0;
        return phase / livingCells;
    }

    addLivingCells(cell) {
        return this.getModulus(cell.life, cell.imaginaryLife) > 0;
    }

    averageCells2by2() {
        let fieldsCopy = [];
        for (let i = 0; i < this.fields.length; i++) {
            fieldsCopy.push([]);
            for (let j = 0; j < this.fields[i].length; j++) {
                if (this.fields[i][j].getType() === "block") {
                    this.fields[i][j].nextCycle();
                }
                fieldsCopy[i].push({
                    width: i,
                    height: j,
                    type: this.fields[i][j].getType(),
                    life: this.fields[i][j].getLife(),
                    imaginaryLife: this.fields[i][j].imaginaryLife,
                    color: this.fields[i][j].getColor(),
                    phase: this.fields[i][j].phase,
                    phaseStep: this.fields[i][j].phaseStep
                });
            }
        }

        for (let i = 0; i < this.options.board.height; i++) {
            for (let j = 0; j < this.options.board.width; j++) {
                if (2 * Math.floor(i / 2) + 1 < this.options.board.height && 2 * Math.floor(j / 2) + 1 < this.options.board.width && this.fields[i][j].getType() !== "block") {
                    this.fields[i][j].setLife(this.fields[i][j].getColor(), ...this.calculateMassAndPhase(fieldsCopy, i, j));
                }
            }
        }
    }

    changeAverage(event) {
        this.options.average = event.target.checked;
    }

    calculateMassAndPhase(fieldsCopy, i, j) {
        const realMass = (fieldsCopy[2 * Math.floor(i / 2)][2 * Math.floor(j / 2)].life + fieldsCopy[2 * Math.floor(i / 2)][2 * Math.floor(j / 2) + 1].life + fieldsCopy[2 * Math.floor(i / 2) + 1][2 * Math.floor(j / 2)].life + fieldsCopy[2 * Math.floor(i / 2) + 1][2 * Math.floor(j / 2) + 1].life) / 4;
        const imaginaryMass = (fieldsCopy[2 * Math.floor(i / 2)][2 * Math.floor(j / 2)].imaginaryLife + fieldsCopy[2 * Math.floor(i / 2)][2 * Math.floor(j / 2) + 1].imaginaryLife + fieldsCopy[2 * Math.floor(i / 2) + 1][2 * Math.floor(j / 2)].imaginaryLife + fieldsCopy[2 * Math.floor(i / 2) + 1][2 * Math.floor(j / 2) + 1].imaginaryLife) / 4;
        const phase = (fieldsCopy[2 * Math.floor(i / 2)][2 * Math.floor(j / 2)].phase + fieldsCopy[2 * Math.floor(i / 2)][2 * Math.floor(j / 2) + 1].phase + fieldsCopy[2 * Math.floor(i / 2) + 1][2 * Math.floor(j / 2)].phase + fieldsCopy[2 * Math.floor(i / 2) + 1][2 * Math.floor(j / 2) + 1].phase) / 4;
        return [realMass, imaginaryMass, phase];
    }
}