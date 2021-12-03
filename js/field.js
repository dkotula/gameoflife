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
        this.life = 1.0;
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
        this.element.style.backgroundColor = "rgba(255,0,0," + this.life + ")";
    }

    makeDead() {
        this.alive = false;
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
}