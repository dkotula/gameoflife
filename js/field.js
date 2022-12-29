class Field {
    constructor(y, x, size, options) {
        this.y = y;
        this.x = x;
        this.size = size;
        this.options = options;
        this.element = document.createElement("div");
        this.element.className = "field fieldSize";
        this.life = 0.0;
        this.blockIntensity = 0.0;
        this.color = "255,0,0";
        this.type = "dead";
        this.flashing = false;
        this.disappearsAfter = 1;
        this.appearsAfter = 1;
        this.isVisible = true;
        this.counter = 0;
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

    makeBlock() {
        this.type = "block";
        this.life = 0.0;
        this.blockIntensity = this.options.blockIntensity / 100;
        this.flashing = this.options.flashing;
        this.disappearsAfter = this.options.disappearsAfter;
        this.appearsAfter = this.options.appearsAfter;
        this.counter = 0;
        this.changeFullColor();
    }

    click(color) {
        if (this.type === "alive") {
            this.makeDead();
        } else if (this.type === "dead" || this.type === "block") {
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
        if (this.type === "alive") {
            if (this.options.fractionNeighbors && !this.options.showFullColor)
                this.element.style.backgroundColor = "rgba(" + this.color + "," + this.life + ")";
            else
                this.element.style.backgroundColor = "rgb(" + this.color + ")";
        } else if (this.type === "block") {
            if (this.flashing) {
                if (this.isVisible) {
                    if (this.options.fractionNeighbors && !this.options.showFullColor)
                        this.element.style.backgroundColor = "rgba(128,128,128," + this.blockIntensity + ")";
                    else
                        this.element.style.backgroundColor = "rgb(128,128,128)";
                } else {
                    if (this.life > 0.0) {
                        if (this.options.fractionNeighbors && !this.options.showFullColor)
                            this.element.style.backgroundColor = "rgba(" + this.color + "," + this.life + ")";
                        else
                            this.element.style.backgroundColor = "rgb(" + this.color + ")";
                    } else {
                        this.element.style.backgroundColor = "rgba(255,255,255)";
                    }
                }
            } else {
                if (this.options.fractionNeighbors && !this.options.showFullColor)
                    this.element.style.backgroundColor = "rgba(128,128,128," + this.blockIntensity + ")";
                else
                    this.element.style.backgroundColor = "rgb(128,128,128)";
            }
        }
    }

    reduceLifeByVolume(color, volume) {
        if (this.life > 0.0001 && volume > 0.0 && this.color === color && this.type !== "block") {
            this.life /= volume;
            this.changeFullColor();
        }
    }

    nextCycle() {
        if (this.flashing) {
            if (this.isVisible) {
                this.counter = ++this.counter % this.disappearsAfter;
                if (!this.counter) {
                    this.isVisible = false;
                }
            } else {
                this.counter = ++this.counter % this.appearsAfter;
                if (!this.counter) {
                    this.isVisible = true;
                    this.life = 0.0;
                }
            }
            this.changeFullColor();
        }
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