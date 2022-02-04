class Board {
    constructor(options) {
        this.element = document.createElement("div");
        this.element.className = "board";
        this.options = options;
        this.fields = [];
        this.interval = null;
        this.cyclesNumber = 0;
        this.isStart = false;
        this.colors = ["255,0,0", "0,255,0", "0,0,255", "255,255,0", "255,0,255", "0,255,255"];
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
                this.fields[i][j].getElement().addEventListener("click", () => this.fieldClick(i, j));
                if (!this.options.innerBorders)
                    this.fields[i][j].getElement().style.border = "none";
                this.element.appendChild(this.fields[i][j].getElement());
            }
        }
        this.setBoundaries();
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
            this.fields.forEach((el) => el.forEach((el) => el.changeSize(parseInt(event.target.value))));
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

    fieldClick(width, height) {
        if (!this.isStart) {
            this.fields[width][height].click();
        }
    }

    steps() {
        let fieldsCopy = [];
        for (let i = 0; i < this.fields.length; i++) {
            fieldsCopy[i] = [];
            for (let j = 0; j < this.fields[i].length; j++) {
                fieldsCopy[i][j] = {
                    width: i,
                    height: j,
                    isAlive: this.fields[i][j].isAlive(),
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
        if (neighborsNumber > 0 && probability > this.options.probability) {
            this.fields[width][height].click();
            return;
        }

        if (this.options.fractionNeighbors) {
            if (fieldsCopy[width][height].isAlive) {
                if (neighborsNumber < this.options.underpopulation || neighborsNumber > this.options.overpopulation) {
                    this.fields[width][height].makeDead();
                }
            } else {
                if (neighborsNumber > this.options.minDeadCell && neighborsNumber < this.options.maxDeadCell) {
                    this.fields[width][height].setLife(neighborsNumber / 2.0);
                }
            }
        } else {
            if (fieldsCopy[width][height].isAlive) {
                if (neighborsNumber < 2 || neighborsNumber > 3) {
                    this.fields[width][height].makeDead();
                }
            } else {
                if (neighborsNumber === 3) {
                    this.fields[width][height].makeAlive();
                }
            }
        }
    }

    countNeighborsNumber(width, height, fieldsCopy) {
        let neighborsNumber = 0

        if (width > 0 && height > 0 || !this.options.borders["borderTop"] && !this.options.borders["borderLeft"])
            if (fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].isAlive) neighborsNumber++;
        if (width > 0 || !this.options.borders["borderTop"])
            if (fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width) % this.options.board.width].isAlive) neighborsNumber++;
        if (width > 0 && height < this.options.board.width - 1 || !this.options.borders["borderTop"] && !this.options.borders["borderRight"])
            if (fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].isAlive) neighborsNumber++;
        if (height > 0 || !this.options.borders["borderLeft"])
            if (fieldsCopy[(width + this.options.board.height) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].isAlive) neighborsNumber++;
        if (height < this.options.board.width - 1 || !this.options.borders["borderRight"])
            if (fieldsCopy[(width + this.options.board.height) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].isAlive) neighborsNumber++;
        if (width < this.options.board.height - 1 && height > 0 || !this.options.borders["borderBottom"] && !this.options.borders["borderLeft"])
            if (fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].isAlive) neighborsNumber++;
        if (width < this.options.board.height - 1 || !this.options.borders["borderBottom"])
            if (fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width) % this.options.board.width].isAlive) neighborsNumber++;
        if (width < this.options.board.height - 1 && height < this.options.board.width - 1 || !this.options.borders["borderBottom"] && !this.options.borders["borderRight"])
            if (fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].isAlive) neighborsNumber++;

        return neighborsNumber;
    }

    countNeighborsFraction(width, height, fieldsCopy) {
        let neighborsFraction = 0.0

        if (width > 0 && height > 0 || !this.options.borders["borderTop"] && !this.options.borders["borderLeft"])
            if (fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].isAlive) neighborsFraction += fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].life;
        if (width > 0 || !this.options.borders["borderTop"])
            if (fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width) % this.options.board.width].isAlive) neighborsFraction += fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width) % this.options.board.width].life;
        if (width > 0 && height < this.options.board.width - 1 || !this.options.borders["borderTop"] && !this.options.borders["borderRight"])
            if (fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].isAlive) neighborsFraction += fieldsCopy[(width + this.options.board.height - 1) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].life;
        if (height > 0 || !this.options.borders["borderLeft"])
            if (fieldsCopy[(width + this.options.board.height) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].isAlive) neighborsFraction += fieldsCopy[(width + this.options.board.height) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].life;
        if (height < this.options.board.width - 1 || !this.options.borders["borderRight"])
            if (fieldsCopy[(width + this.options.board.height) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].isAlive) neighborsFraction += fieldsCopy[(width + this.options.board.height) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].life;
        if (width < this.options.board.height - 1 && height > 0 || !this.options.borders["borderBottom"] && !this.options.borders["borderLeft"])
            if (fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].isAlive) neighborsFraction += fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width - 1) % this.options.board.width].life;
        if (width < this.options.board.height - 1 || !this.options.borders["borderBottom"])
            if (fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width) % this.options.board.width].isAlive) neighborsFraction += fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width) % this.options.board.width].life;
        if (width < this.options.board.height - 1 && height < this.options.board.width - 1 || !this.options.borders["borderBottom"] && !this.options.borders["borderRight"])
            if (fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].isAlive) neighborsFraction += fieldsCopy[(width + this.options.board.height + 1) % this.options.board.height][(height + this.options.board.width + 1) % this.options.board.width].life;

        return neighborsFraction;
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

    clearBoard() {
        if (this.isStart) {
            clearInterval(this.interval)
        }
        for (let i = 0; i < this.options.board.height; i++) {
            for (let j = 0; j < this.options.board.width; j++) {
                this.fields[i][j].makeDead();
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
        this.makeNewBoard();
        const sigma = this.options.board.height * this.options.board.height * this.options.gaussRange / 500;
        // const volume = sigma * Math.PI;
        let sum = 0.0;
        for (let tribe = 0; tribe < this.colors.length && tribe < this.options.tribesNumber; tribe++) {
            let x0 = (Math.floor(Math.random() * this.options.board.height));
            let y0 = (Math.floor(Math.random() * this.options.board.height));
            for (let i = 0; i < this.options.board.height; i++) {
                for (let j = 0; j < this.options.board.width; j++) {
                    let life = Math.exp(-((this.fields[i][j].width - x0) * (this.fields[i][j].width - x0) / sigma + (this.fields[i][j].height - y0) * (this.fields[i][j].height - y0) / sigma));
                    sum += life;
                    // life /= volume;
                    if (life < 0.0001) life = 0;
                    if (this.options.subtractGenerating) {
                        if (life > this.fields[i][j].getLife()) {
                            this.fields[i][j].setColor(this.colors[tribe]);
                            this.fields[i][j].setLife(life - this.fields[i][j].getLife());
                        } else if (this.fields[i][j].isAlive()) {
                            this.fields[i][j].setLife(this.fields[i][j].getLife() - life);
                        }
                    } else if (life > this.fields[i][j].getLife()) {
                        this.fields[i][j].setColor(this.colors[tribe]);
                        this.fields[i][j].setLife(life);
                    }
                }
            }
            this.fields.forEach((el) => el.forEach((el) => el.reduceLifeByVolume(sum)));
        }
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
}