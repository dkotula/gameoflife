class Board {
    constructor(options) {
        this.element = document.createElement("div");
        this.element.className = "board";
        this.options = options;
        this.fields = [];
        this.interval = null;
        this.cyclesNumber = 0;
        this.isStart = false;
        this.makeNewBoard();
    }

    makeNewBoard() {
        this.cyclesNumber = 0;
        document.querySelector("#cycles").innerHTML = "Cycle " + this.cyclesNumber;
        this.isStart = false;
        this.element.innerHTML = "";
        this.element.style.gridTemplateRows = "repeat(" + this.options.board.height + ", 1fr)";
        this.element.style.gridTemplateColumns = "repeat(" + this.options.board.width + ", 1fr)";
        this.element.style.width = this.options.board.width * this.options.board.fieldSize + 2 * this.options.board.width + "px";
        this.element.style.height = this.options.board.height * this.options.board.fieldSize + 2 * this.options.board.height + "px";
        this.fields = [];
        for (let i = 0; i < this.options.board.height; i++) {
            this.fields[i] = [];
            for (let j = 0; j < this.options.board.width; j++) {
                this.fields[i][j] = new Field(i, j, this.options.board.fieldSize);
                this.fields[i][j].getElement().addEventListener("click", () => this.fieldClick(i, j));
                this.element.appendChild(this.fields[i][j].getElement());
            }
        }
        this.setBoundaries();
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
            this.element.style.width = this.options.board.fieldSize * this.options.board.width + "px";
            this.element.style.height = this.options.board.fieldSize * this.options.board.height + "px";
            this.fields.forEach((el) => el.forEach((el) => el.changeSize(parseInt(event.target.value))));
            this.element.style.width = this.options.board.width * this.options.board.fieldSize + 2 * this.options.board.width + "px";
            this.element.style.height = this.options.board.height * this.options.board.fieldSize + 2 * this.options.board.height + "px";
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

        if (fieldsCopy[width][height].isAlive) {
            if (neighborsNumber <= 1 || neighborsNumber >= 4) {
                this.fields[width][height].makeDead();
            }
        } else {
            if (neighborsNumber > 2 && neighborsNumber <= 3) {
                this.fields[width][height].makeAlive();
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
        this.options.probability = parseInt(event.target.value);
    }

    changeNeighbors(event) {
        this.options.fractionNeighbors = event.target.checked;
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
}