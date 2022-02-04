class Field {
    constructor(width, height, size, options) {
        this.width = width;
        this.height = height;
        this.size = size;
        this.options = options;
        this.element = document.createElement("div");
        this.element.className = "field";
        this.element.style.width = size + "px";
        this.element.style.height = size + "px";
        this.alive = false;
        this.life = 0.0;
        this.color = "255,0,0";
    }

    getElement() {
        return this.element;
    }

    changeSize(size) {
        this.size = size;
        this.element.style.width = size + "px";
        this.element.style.height = size + "px";
    }

    isAlive() {
        return this.alive;
    }

    makeAlive() {
        this.life = (Math.floor(Math.random() * 50) + 51) / 100;
        this.alive = true;
        this.changeFullColor();

    }

    makeDead() {
        this.alive = false;
        this.life = 0.0;
        this.element.style.backgroundColor = "white";
    }

    click() {
        if (this.alive) {
            this.makeDead();
        } else {
            this.makeAlive();
        }
    }

    getLife() {
        return this.life;
    }

    setLife(life) {
        this.life = life;
        this.alive = true;
        this.changeFullColor();
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    changeFullColor() {
        if (this.alive) {
            if (this.options.fractionNeighbors && !this.options.showFullColor)
                this.element.style.backgroundColor = "rgba(" + this.color + "," + this.life + ")";
            else
                this.element.style.backgroundColor = "rgb(" + this.color + ")";
        }
    }
}