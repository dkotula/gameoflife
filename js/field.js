class Field {
    constructor(y, x, size, options) {
        this.y = y;
        this.x = x;
        this.size = size;
        this.options = options;
        this.element = document.createElement("div");
        this.element.className = "field fieldSize";
        this.alive = false;
        this.life = 0.0;
        this.color = "255,0,0";
    }

    getElement() {
        return this.element;
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

    reduceLifeByVolume(volume) {
        if (this.life > 0.0001) {
            this.life /= volume;
            this.changeFullColor();
        }
    }
}