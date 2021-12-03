class Board {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = "board";
        this.width = parseInt(document.querySelectorAll(".ranges")[0].value);
        this.height = parseInt(document.querySelectorAll(".ranges")[1].value);
        this.fieldSize = document.querySelectorAll(".ranges")[2].value;
        this.fields = [];
        this.interval = null;
        this.cyclesNumber = 0;
        this.isStart = false;
        this.boundaries = document.querySelector("#slider").checked;
        this.fractionNeighbors = document.querySelector("#slider2").checked;
        this.timeInterval = parseInt(document.querySelector("#time").value);
        this.probability = document.querySelector("#probability").value;
        this.borders = {upBorder: true, downBorder: true, leftBorder: true, rightBorder: true};
        this.makeNewBoard();
    }

    makeNewBoard() {
        this.cyclesNumber = 0;
        document.querySelector("#cycles").innerHTML = "Cycle " + this.cyclesNumber;
        this.isStart = false;
        this.element.innerHTML = "";
        this.element.style.gridTemplateRows = "repeat(" + this.height + ", 1fr)";
        this.element.style.gridTemplateColumns = "repeat(" + this.width + ", 1fr)";
        this.element.style.width = this.fieldSize * this.width + "px";
        this.element.style.height = this.fieldSize * this.height + "px";
        this.fields = [];
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
        } else if (event.target.name === "height") {
            this.height = parseInt(event.target.value);
            this.makeNewBoard();
        } else if (event.target.name === "size") {
            this.fieldSize = parseInt(event.target.value);
            this.element.style.width = this.fieldSize * this.width + "px";
            this.element.style.height = this.fieldSize * this.height + "px";
            this.fields.forEach((el) => el.forEach((el) => el.changeSize(parseInt(event.target.value))));
        }
    }

    start() {
        if (!this.isStart) {
            this.isStart = true;
            this.interval = setInterval(() => this.steps(), this.timeInterval);
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
        let probability = Math.floor(Math.random() * 100) + 1;
        let neighborsNumber;
        if (this.fractionNeighbors) {
            neighborsNumber = this.countNeighborsFraction(width, height, fieldsCopy);
        } else {
            neighborsNumber = this.countNeighborsNumber(width, height, fieldsCopy);
        }
        if (neighborsNumber > 0 && probability > this.probability) {
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

        if (width > 0 && height > 0 || !this.borders["upBorder"] && !this.borders["leftBorder"])
            if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsNumber++;
        if (width > 0 || !this.borders["upBorder"])
            if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width) % this.width].isAlive) neighborsNumber++;
        if (width > 0 && height < this.width - 1 || !this.borders["upBorder"] && !this.borders["rightBorder"])
            if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsNumber++;
        if (height > 0 || !this.borders["leftBorder"])
            if (fieldsCopy[(width + this.height) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsNumber++;
        if (height < this.width - 1 || !this.borders["rightBorder"])
            if (fieldsCopy[(width + this.height) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsNumber++;
        if (width < this.height - 1 && height > 0 || !this.borders["downBorder"] && !this.borders["leftBorder"])
            if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsNumber++;
        if (width < this.height - 1 || !this.borders["downBorder"])
            if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width) % this.width].isAlive) neighborsNumber++;
        if (width < this.height - 1 && height < this.width - 1 || !this.borders["downBorder"] && !this.borders["rightBorder"])
            if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsNumber++;

        return neighborsNumber;
    }

    countNeighborsFraction(width, height, fieldsCopy) {
        let neighborsFraction = 0.0

        if (width > 0 && height > 0 || !this.borders["upBorder"] && !this.borders["leftBorder"])
            if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsFraction += fieldsCopy[(width + this.height - 1) % this.height][(height + this.width - 1) % this.width].life;
        if (width > 0 || !this.borders["upBorder"])
            if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width) % this.width].isAlive) neighborsFraction += fieldsCopy[(width + this.height - 1) % this.height][(height + this.width) % this.width].life;
        if (width > 0 && height < this.width - 1 || !this.borders["upBorder"] && !this.borders["rightBorder"])
            if (fieldsCopy[(width + this.height - 1) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsFraction += fieldsCopy[(width + this.height - 1) % this.height][(height + this.width + 1) % this.width].life;
        if (height > 0 || !this.borders["leftBorder"])
            if (fieldsCopy[(width + this.height) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsFraction += fieldsCopy[(width + this.height) % this.height][(height + this.width - 1) % this.width].life;
        if (height < this.width - 1 || !this.borders["rightBorder"])
            if (fieldsCopy[(width + this.height) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsFraction += fieldsCopy[(width + this.height) % this.height][(height + this.width + 1) % this.width].life;
        if (width < this.height - 1 && height > 0 || !this.borders["downBorder"] && !this.borders["leftBorder"])
            if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width - 1) % this.width].isAlive) neighborsFraction += fieldsCopy[(width + this.height + 1) % this.height][(height + this.width - 1) % this.width].life;
        if (width < this.height - 1 || !this.borders["downBorder"])
            if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width) % this.width].isAlive) neighborsFraction += fieldsCopy[(width + this.height + 1) % this.height][(height + this.width) % this.width].life;
        if (width < this.height - 1 && height < this.width - 1 || !this.borders["downBorder"] && !this.borders["rightBorder"])
            if (fieldsCopy[(width + this.height + 1) % this.height][(height + this.width + 1) % this.width].isAlive) neighborsFraction += fieldsCopy[(width + this.height + 1) % this.height][(height + this.width + 1) % this.width].life;

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
        if (Math.max(...positionsI) >= this.height || Math.max(...positionsJ) >= this.width) {
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

    changeBoundaries(event) {
        this.boundaries = event.target.checked;
        if (this.boundaries) {
            this.borders = {upBorder: true, downBorder: true, leftBorder: true, rightBorder: true};
            document.querySelectorAll(".border").forEach((el) => el.style.backgroundColor = "black");
        } else {
            this.borders = {upBorder: false, downBorder: false, leftBorder: false, rightBorder: false};
            document.querySelectorAll(".border").forEach((el) => el.style.backgroundColor = "white");
        }
    }

    changeTimeInterval(event) {
        this.timeInterval = event.target.value;
        if (this.isStart) {
            clearInterval(this.interval);
            this.interval = setInterval(() => this.steps(), this.timeInterval);
        }
    }

    clearBoard() {
        if (this.isStart) {
            clearInterval(this.interval)
        }
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.fields[i][j].makeDead();
            }
        }
        if (this.isStart) {
            this.interval = setInterval(() => this.steps(), this.timeInterval);
        }
    }

    changeProbability(event) {
        this.probability = event.target.value;
    }

    tests() {
        // const rounds = [1, 2, 5, 10, 15, 20, 30, 40, 50];
        // const probabilities = [100, 99, 98, 95, 90, 70, 50, 30, 1, 0];
        // for (let i = 0; i < probabilities.length; i++) {
        //     this.calculateMean(500, probabilities[i]);
        //     for (let j = 0; j < rounds.length; j++) {
        //         this.calculateDensity(rounds[j], 200, probabilities[i]);
        //     }
        // }
    }

    calculateMean(cycles, probability) {
        let securityLevel = 1000;
        let results = [];
        this.setDefault(10, 10, probability, true);
        for (let i = 0; i < cycles; i++) {
            this.makeNewBoard();
            this.coordinatesToShape([4, 4, 4, 5, 5, 4, 5, 5]);
            for (let j = 0; j < securityLevel; j++) {
                this.steps();
                if (this.ifAllDead()) {
                    break;
                }
            }
            results[i] = this.cyclesNumber;
        }
        this.saveToFile("mean_p" + this.probability, this.array1dToString(results));
    }

    calculateDensity(rounds, cycles, probability) {
        let results = [];
        let resultsTemp = [];
        this.setDefault(10, 10, probability, true);
        for (let height = 0; height < this.height; height++) {
            results[height] = [];
            for (let width = 0; width < this.width; width++) {
                results[height][width] = 0;
            }
        }
        for (let i = 0; i < cycles; i++) {
            this.makeNewBoard();
            this.coordinatesToShape([4, 4, 4, 5, 5, 4, 5, 5]);
            for (let height = 0; height < this.height; height++) {
                resultsTemp[height] = [];
                for (let width = 0; width < this.width; width++) {
                    resultsTemp[height][width] = 0;
                }
            }
            for (let j = 0; j < rounds - 1; j++) {
                for (let height = 0; height < this.height; height++) {
                    for (let width = 0; width < this.width; width++) {
                        if (this.fields[height][width].isAlive()) {
                            resultsTemp[height][width]++;
                        }
                    }
                }
                this.steps();
            }
            for (let height = 0; height < this.height; height++) {
                for (let width = 0; width < this.width; width++) {
                    if (this.fields[height][width].isAlive()) {
                        resultsTemp[height][width]++;
                    }
                    results[height][width] += resultsTemp[height][width] / rounds;
                }
            }
        }
        for (let height = 0; height < this.height; height++) {
            for (let width = 0; width < this.width; width++) {
                results[height][width] /= cycles;
            }
        }
        this.saveToFile("density_r" + rounds + "_p" + this.probability, this.array2dToString(results));
    }

    setDefault(width, height, probability, boundaries) {
        this.width = width;
        this.height = height;
        this.probability = probability;
        this.boundaries = boundaries;
        document.querySelectorAll(".ranges")[0].value = width;
        document.querySelectorAll(".ranges")[1].value = height;
        document.querySelector("#probability").value = probability;
        document.querySelector("#slider").checked = boundaries;
    }

    ifAllDead() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (this.fields[i][j].isAlive()) {
                    return false;
                }
            }
        }
        return true;
    }

    countMean(results) {
        let sum = results.reduce((a, b) => a + b, 0)
        return sum / results.length;
    }

    array1dToString(array) {
        let string = "";
        for (let i = 0; i < array.length; i++) {
            string += i + '\t' + array[i] + '\n';
        }
        return string;
    }

    array2dToString(array) {
        let string = "";
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                string += i + '\t' + j + '\t' + array[i][j] + '\n';
            }
        }
        return string;
    }

    saveToFile(name, data) {
        let myBlob = new Blob([data], {type: "text/plain"});
        let url = window.URL.createObjectURL(myBlob);
        let anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = name + ".txt";
        anchor.click();
        window.URL.revokeObjectURL(url);
    }

    changeNeighbors(event) {
        this.fractionNeighbors = event.target.checked;
    }

    changeBorder(event) {
        this.borders[event.target.id] = !this.borders[event.target.id];
        if (this.borders[event.target.id]) {
            document.querySelector("#" + event.target.id).style.backgroundColor = "black";
        } else {
            document.querySelector("#" + event.target.id).style.backgroundColor = "white";
        }
        if (this.borders["upBorder"] && this.borders["downBorder"] && this.borders["leftBorder"] && this.borders["rightBorder"]) {
            this.boundaries = true
            document.querySelector("#slider").checked = true;
        } else if (!this.borders["upBorder"] && !this.borders["downBorder"] && !this.borders["leftBorder"] && !this.borders["rightBorder"]) {
            this.boundaries = false
            document.querySelector("#slider").checked = false;
        }
    }
}