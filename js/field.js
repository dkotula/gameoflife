class Field {
    constructor(width, height, size) {
        this.width = width;
        this.height = height;
        this.size = size;
        this.element = document.createElement("div");
        this.element.className = "field";
        this.element.style.width = size + "px";
        this.element.style.height = size + "px";
        this.alive = false;
    }

    getElement() {
        return this.element;
    }

    changeSize(size) {
        this.size = size;
        this.element.style.width = size + "px";
        this.element.style.height = size + "px";
    }

    changeWidth(width) {
        this.width = width;
    }

    changeHeight(height) {
        this.height = height;
    }

    isAlive() {
        return this.alive;
    }

    click() {
        if (this.alive) {
            this.alive = false;
            this.element.style.backgroundColor = "white";
        }
        else {
            this.alive = true;
            this.element.style.backgroundColor = "black";
        }
    }
}