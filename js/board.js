class Board {
    constructor(width, height, fieldSize) {
        this.element = document.createElement("div");
        this.element.className = "board";
        this.width = width;
        this.height = height;
        this.fieldSize = fieldSize;
        this.fields = [];
        this.makeNewBoard();
    }

    makeNewBoard() {
        this.element.innerHTML = "";
        this.element.style.gridTemplateRows = "repeat(" + this.height + ", 1fr)";
        this.element.style.gridTemplateColumns = "repeat(" + this.width + ", 1fr)";
        this.element.style.width = this.fieldSize * this.width + "px";
        this.element.style.height = this.fieldSize * this.height + "px";
        for(let i = 0; i < this.height; i++) {
            this.fields[i] = [];
            for(let j = 0; j < this.width; j++) {
                this.fields[i][j] = new Field(i, j, this.fieldSize);
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
}