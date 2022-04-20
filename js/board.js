class Board {
    constructor(options, testBoards) {
        this.element = document.createElement("div");
        this.element.className = "board";
        this.options = options;
        this.testBoards = testBoards;
        this.fields = [];
        this.interval = null;
        this.cyclesNumber = 0;
        this.isStart = false;
        this.fieldSizeStyle = document.createElement('style');
        this.fieldSizeStyle.innerHTML = '.fieldSize { width: ' + this.options.board.fieldSize + 'px; height: ' + this.options.board.fieldSize + 'px; }';
        document.head.appendChild(this.fieldSizeStyle);
        this.makeNewBoard();
    }

    makeNewBoard() {
        this.cyclesNumber = 0;
        document.querySelector("#cycles").innerHTML = "Cycle " + this.cyclesNumber;
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
        let fieldsCopy = [];
        for (let i = 0; i < this.fields.length; i++) {
            fieldsCopy[i] = [];
            for (let j = 0; j < this.fields[i].length; j++) {
                if (this.fields[i][j].getType() === "block") {
                    this.fields[i][j].nextCycle();
                }
                fieldsCopy[i][j] = {
                    width: i,
                    height: j,
                    type: this.fields[i][j].getType(),
                    life: this.fields[i][j].getLife(),
                    color: this.fields[i][j].getColor(),
                };
            }
        }

        for (let i = 0; i < this.fields.length; i++) {
            for (let j = 0; j < this.fields[i].length; j++) {
                this.changeFields(i, j, fieldsCopy);
            }
        }
        this.cyclesNumber++;
        document.querySelector("#cycles").innerHTML = "Cycle " + this.cyclesNumber;
    }

    changeFields(width, height, fieldsCopy) {
        let probability = Math.random() * 100;
        let neighborsNumber;

        if (this.options.fractionNeighbors) {
            neighborsNumber = this.countNeighborsFraction(width, height, fieldsCopy);
        } else {
            neighborsNumber = this.countNeighborsNumber(width, height, fieldsCopy);
        }
        if (neighborsNumber[0] > 0 && probability > this.options.probability) {
            if (this.fields[width][height].getType() !== "block") {
                this.fields[width][height].click();
            } else {
                if (this.fields[width][height].flashing && !this.fields[width][height].isVisible) {
                    if (this.fields[width][height].life > 0.0)
                        this.fields[width][height].life = 0.0;
                    else
                        this.fields[width][height].life = (Math.floor(Math.random() * 50) + 51) / 100;
                }
            }
            return;
        }

        if (this.options.fractionNeighbors) {
            if (fieldsCopy[width][height].type === "alive") {
                if (neighborsNumber[0] < this.options.underpopulation || neighborsNumber[0] > this.options.overpopulation) {
                    this.fields[width][height].makeDead();
                } else {
                    this.fields[width][height].setLife(this.fields[width][height].color, neighborsNumber[0] / 2.0 + neighborsNumber[1] / 3.0);
                }
            } else if (fieldsCopy[width][height].type === "dead") {
                let neighbors = this.countNeighborsNumberAndColor(width, height, fieldsCopy)
                if (neighbors[0] > this.options.minDeadCell && neighbors[0] < this.options.maxDeadCell && neighbors[1] < this.options.toManyOtherTribes) {
                    this.fields[width][height].setLife(neighbors[2], neighbors[0] / 2.0 + neighbors[1] / 4.0);
                }
            } else if (fieldsCopy[width][height].type === "block" && this.fields[width][height].flashing && !this.fields[width][height].isVisible) {
                if (fieldsCopy[width][height].life > 0.0) {
                    if (neighborsNumber[0] < this.options.underpopulation || neighborsNumber[0] > this.options.overpopulation) {
                        this.fields[width][height].life = 0.0;
                    } else {
                        this.fields[width][height].life = neighborsNumber[0] / 2.0 + neighborsNumber[1] / 3.0;
                    }
                } else {
                    let neighbors = this.countNeighborsNumberAndColor(width, height, fieldsCopy)
                    if (neighbors[0] > this.options.minDeadCell && neighbors[0] < this.options.maxDeadCell && neighbors[1] < this.options.toManyOtherTribes) {
                        this.fields[width][height].life = neighbors[0] / 2.0 + neighbors[1] / 4.0;
                        this.fields[width][height].color = neighbors[2];
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
                if (fieldsCopy[width][height].life > 0.0) {
                    if (neighborsNumber[0] < 2 || neighborsNumber[0] > 3) {
                        fieldsCopy[width][height].life = 0.0
                    }
                } else {
                    if (neighborsNumber[0] === 3) {
                        this.fields[width][height].life = (Math.floor(Math.random() * 50) + 51) / 100;
                    }
                }
            }
        }
    }

    countNeighborsNumber(width, height, fieldsCopy) {
        let neighborsNumber = 0;

        if (width > 0 && height > 0 || !this.options.borders["borderTop"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && fieldsCopy[i][j].life > 0.0))
                neighborsNumber++;
        }
        if (width > 0 || !this.options.borders["borderTop"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && fieldsCopy[i][j].life > 0.0))
                neighborsNumber++;
        }
        if (width > 0 && height < this.options.board.width - 1 || !this.options.borders["borderTop"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && fieldsCopy[i][j].life > 0.0))
                neighborsNumber++;
        }
        if (height > 0 || !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && fieldsCopy[i][j].life > 0.0))
                neighborsNumber++;
        }
        if (height < this.options.board.width - 1 || !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && fieldsCopy[i][j].life > 0.0))
                neighborsNumber++;
        }
        if (width < this.options.board.height - 1 && height > 0 || !this.options.borders["borderBottom"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && fieldsCopy[i][j].life > 0.0))
                neighborsNumber++;
        }
        if (width < this.options.board.height - 1 || !this.options.borders["borderBottom"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && fieldsCopy[i][j].life > 0.0))
                neighborsNumber++;
        }
        if (width < this.options.board.height - 1 && height < this.options.board.width - 1 || !this.options.borders["borderBottom"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible && fieldsCopy[i][j].life > 0.0))
                neighborsNumber++;
        }

        return [neighborsNumber, neighborsNumber];
    }

    countNeighborsFraction(width, height, fieldsCopy) {
        let neighborsFraction = [0.0, 0.0];

        if (width > 0 && height > 0 || !this.options.borders["borderTop"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                this.addNeighborsFraction(neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width > 0 || !this.options.borders["borderTop"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                this.addNeighborsFraction(neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width > 0 && height < this.options.board.width - 1 || !this.options.borders["borderTop"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height - 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                this.addNeighborsFraction(neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (height > 0 || !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                this.addNeighborsFraction(neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (height < this.options.board.width - 1 || !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                this.addNeighborsFraction(neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width < this.options.board.height - 1 && height > 0 || !this.options.borders["borderBottom"] && !this.options.borders["borderLeft"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width - 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                this.addNeighborsFraction(neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width < this.options.board.height - 1 || !this.options.borders["borderBottom"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                this.addNeighborsFraction(neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }
        if (width < this.options.board.height - 1 && height < this.options.board.width - 1 || !this.options.borders["borderBottom"] && !this.options.borders["borderRight"]) {
            const i = (width + this.options.board.height + 1) % this.options.board.height;
            const j = (height + this.options.board.width + 1) % this.options.board.width;
            if (fieldsCopy[i][j].type === "alive" ||
                (fieldsCopy[i][j].type === "block" && this.fields[i][j].flashing && !this.fields[i][j].isVisible))
                this.addNeighborsFraction(neighborsFraction, fieldsCopy[width][height], fieldsCopy[i][j]);
        }

        return neighborsFraction;
    }

    addNeighborsFraction(neighborsFraction, field1, field2) {
        if (field1.color === field2.color) neighborsFraction[0] += field2.life;
        else neighborsFraction[1] += field2.life;
    }

    countNeighborsNumberAndColor(width, height, fieldsCopy) {
        let neighbors = [0.0, 0.0, fieldsCopy[width][height].color];
        for (let tribe = 0; tribe < this.options.colors.length && tribe < this.options.tribesNumber; tribe++) {
            fieldsCopy[width][height].color = this.options.colors[tribe];
            const neighborsFraction = this.countNeighborsFraction(width, height, fieldsCopy);
            if (neighborsFraction[0] > neighbors[0]) {
                neighbors = [neighborsFraction[0], neighborsFraction[1], fieldsCopy[width][height].color];
            }
        }
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
                            if (life > this.fields[i][j].getLife()) {
                                this.fields[i][j].setLife(this.options.colors[tribe], life - this.fields[i][j].getLife());
                            } else if (this.fields[i][j].isAlive()) {
                                this.fields[i][j].setLife(this.fields[i][j].color, this.fields[i][j].getLife() - life);
                            }
                        } else if (life > this.fields[i][j].getLife()) {
                            this.fields[i][j].setLife(this.options.colors[tribe], life);
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

    loadConfiguration() {
        if (this.isStart) {
            this.isStart = false;
            clearInterval(this.interval);
        }
        this.clearBoard(true);
        this.setBoardFromJson(this.testBoards[0]);
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
                        color: this.fields[i][j].color
                    });
                } else if (this.fields[i][j].type === "block") {
                    cells.push({
                        type: "block",
                        positions: [{x: i, y: j}],
                        flashing: this.fields[i][j].flashing,
                        disappearsAfter: this.fields[i][j].disappearsAfter,
                        appearsAfter: this.fields[i][j].appearsAfter,
                        counter: this.fields[i][j].counter
                    });
                }
            }
        }
        return cells;
    }
}