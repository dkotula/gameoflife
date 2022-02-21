class Field {
    constructor(y, x, size, options) {
        this.y = y;
        this.x = x;
        this.size = size;
        this.options = options;
        this.element = document.createElement("div");
        this.element.className = "field fieldSize";
        this.life = 0.0;
        this.color = "255,0,0";
        this.type = "dead";
    }

    getElement() {
        return this.element;
    }

    isAlive() {
        return this.type === "alive";
    }

    getType() {
        return this.type;
    }

    makeAlive() {
        this.life = (Math.floor(Math.random() * 50) + 51) / 100;
        this.type = "alive";
        this.changeFullColor();

    }

    makeDead() {
        this.type = "dead";
        this.life = 0.0;
        this.element.style.backgroundColor = "white";
    }

    makeBlock() {
        this.alive = false;
        this.color = "127,127,127";
        this.element.style.backgroundColor = "grey";
    }

    click() {
        if (this.type === "alive") {
            this.makeDead();
        } else if (this.type === "dead") {
            this.makeAlive();
        }
    }

    getLife() {
        return this.life;
    }

    setLife(color, life) {
        this.color = color;
        this.life = life;
        this.type = "alive";
        if (this.life === 0.0) {
            this.type = "dead";
        }
        this.changeFullColor();
    }

    getColor() {
        return this.color;
    }

    changeFullColor() {
        if (this.type === "alive") {
            if (this.options.fractionNeighbors && !this.options.showFullColor)
                this.element.style.backgroundColor = "rgba(" + this.color + "," + this.life + ")";
            else
                this.element.style.backgroundColor = "rgb(" + this.color + ")";
        }
    }

    reduceLifeByVolume(color, volume) {
        if (this.life > 0.0001 && volume > 0.0 && this.color === color) {
            this.life /= volume;
            this.changeFullColor();
        }
    }
}