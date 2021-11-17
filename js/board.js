class Board {
    constructor(width, height, fieldSize) {
        this.element = document.createElement("div");
        this.element.className = "board";
        this.width = parseInt(width);
        this.height = parseInt(height);
        this.fieldSize = fieldSize;
        this.fields = [];
        this.interval = null;
        this.makeNewBoard();
    }

    makeNewBoard() {
        this.element.innerHTML = "";
        this.element.style.gridTemplateRows = "repeat(" + this.height + ", 1fr)";
        this.element.style.gridTemplateColumns = "repeat(" + this.width + ", 1fr)";
        this.element.style.width = this.fieldSize * this.width + "px";
        this.element.style.height = this.fieldSize * this.height + "px";
        for (let i = 0; i < this.height; i++) {
            this.fields[i] = [];
            for (let j = 0; j < this.width; j++) {
                this.fields[i][j] = new Field(i, j, this.fieldSize);
                this.fields[i][j].getElement().addEventListener("click", () => this.fieldClick(i, j));
                this.element.appendChild(this.fields[i][j].getElement());
            }
        }
    }

    getElement() {
        return this.element;
    }

    changeBoard(event) {
        if (event.target.name === "width") {
            this.width = parseInt(event.target.value);
            this.makeNewBoard();
        }
        else if (event.target.name === "height") {
            this.height = parseInt(event.target.value);
            this.makeNewBoard();
        }
        else if (event.target.name === "size") {
            this.fieldSize = parseInt(event.target.value);
            this.element.style.width = this.fieldSize * this.width + "px";
            this.element.style.height = this.fieldSize * this.height + "px";
            this.fields.forEach((el) => el.forEach((el) => el.changeSize(parseInt(event.target.value))));
        }
    }

    changeInputSpaceship(event) {

    }

    start() {
        document.querySelectorAll("input").forEach((el) => el.disabled = true);
        document.querySelector("#restart").disabled = false;
        start.disabled = true;
        this.interval = setInterval(() => this.steps(), 100);
    }

    restart() {
        document.querySelectorAll("input").forEach((el) => el.disabled = false);
        document.querySelector("#restart").disabled = true;
        start.disabled = false;
        clearInterval(this.interval);
        this.makeNewBoard();
    }

    fieldClick(width, height) {
        if (document.querySelector("#spaceship").checked && !document.querySelector("#start").disabled) {
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
                };
            }
        }

        for (let i = 0; i < this.fields.length; i++) {
            for (let j = 0; j < this.fields[i].length; j++) {
                this.changeFields(i, j, fieldsCopy);
            }
        }
    }

    changeFields(width, height, fieldsCopy) {
        let neighborsNumber = 0;
        if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsNumber++;
        if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width) % this.width].isAlive) neighborsNumber++;
        if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsNumber++;
        if (fieldsCopy[(width + this.height) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsNumber++;
        if (fieldsCopy[(width + this.height) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsNumber++;
        if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsNumber++;
        if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width) % this.width].isAlive) neighborsNumber++;
        if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsNumber++;

        if (fieldsCopy[width][height].isAlive) {
            if (neighborsNumber != 2 && neighborsNumber != 3) {
                this.fields[width][height].makeDead();
            }
        }
        else {
            if (neighborsNumber == 3) {
                this.fields[width][height].makeAlive();
            }
        }
    }

    insertShape(configurations) {
        let shape = document.querySelector("#configurations").value.split('_');
        let shapesInType = configurations[shape[0]];
        let positions = [];
        shapesInType.forEach((el) => {
            if (el.name == shape[1]) {
                positions = el.positions;
            }
        });
        this.restart();
        for (let i = 0; i < positions.length; i = i + 2) {
            this.fields[positions[i]][positions[i + 1]].click();
        }
    }
}