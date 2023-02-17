class Field {
    constructor(x, phase, size) {
        this.x = x;
        this.phase = phase;
        this.size = size;
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

    makeAlive(color) {
        if (color) {
            this.color = color;
        }
        this.life = (Math.floor(Math.random() * 50) + 51) / 100;
        this.type = "alive";
        this.changeFullColor();
    }

    makeDead() {
        this.type = "dead";
        this.life = 0.0;
        this.element.style.backgroundColor = "white";
    }

    click(color) {
        if (this.type === "alive") {
            this.makeDead();
        } else if (this.type === "dead") {
            this.makeAlive(color);
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
        this.element.style.backgroundColor = "rgba(" + this.color + "," + this.life + ")";
    }

    setCell(cell) {
        for (const param in cell) {
            if (param !== "positions") {
                this[param] = cell[param];
            }
        }
        this.changeFullColor();
    }
}