class Tests {
    constructor(board, options, menu) {
        this.board = board;
        this.options = options;
        this.menu = menu;
        this.makeTests();
    }

    makeTests() {
        // this.meanAndDensityTest();
        // this.meanTest();
        this.getCenterOfWeight();
    }

    meanAndDensityTest() {
        const rounds = [1, 2, 5, 10, 15, 20, 30, 40, 50];
        const probabilities = [100, 99, 98, 95, 90, 70, 50, 30, 1, 0];
        for (let i = 0; i < probabilities.length; i++) {
            this.calculateMean(500, probabilities[i]);
            for (let j = 0; j < rounds.length; j++) {
                this.calculateDensity(rounds[j], 200, probabilities[i]);
            }
        }
    }

    meanTest() {
        const probabilities = [99.9, 99.8, 99.7, 99.6, 99.5, 99.4, 99.3, 99.2, 99.1, 99];
        for (let i = 0; i < probabilities.length; i++) {
            this.calculateMean(500, probabilities[i]);
        }
    }

    calculateMean(cycles, probability) {
        let securityLevel = 1000;
        let results = [];
        this.setDefault(10, 10, probability, {
            borderTop: true,
            borderBottom: true,
            borderLeft: true,
            borderRight: true
        }, false);
        for (let i = 0; i < cycles; i++) {
            this.board.makeNewBoard();
            this.board.coordinatesToShape([3, 4, 3, 5, 4, 3, 4, 6, 5, 3, 5, 6, 6, 4, 6, 5]);
            for (let j = 0; j < securityLevel; j++) {
                this.board.steps();
                if (this.ifAllDead()) {
                    break;
                }
            }
            results.push(this.board.cyclesNumber);
        }
        this.saveToFile("mean_p" + this.options.probability, this.array1dToString(results));
    }

    calculateDensity(rounds, cycles, probability) {
        let results = [];
        let resultsTemp = [];
        this.setDefault(10, 10, probability, {
            borderTop: false,
            borderBottom: true,
            borderLeft: false,
            borderRight: true
        }, false);
        for (let height = 0; height < this.options.board.height; height++) {
            results[height] = [];
            for (let width = 0; width < this.options.board.width; width++) {
                results[height][width] = 0;
            }
        }
        for (let i = 0; i < cycles; i++) {
            this.board.makeNewBoard();
            this.board.coordinatesToShape([4, 1, 4, 2, 4, 7, 4, 8, 5, 1, 5, 2, 5, 7, 5, 8]);
            for (let height = 0; height < this.options.board.height; height++) {
                resultsTemp[height] = [];
                for (let width = 0; width < this.options.board.width; width++) {
                    resultsTemp[height][width] = 0;
                }
            }
            for (let j = 0; j < rounds - 1; j++) {
                for (let height = 0; height < this.options.board.height; height++) {
                    for (let width = 0; width < this.options.board.width; width++) {
                        if (this.board.fields[height][width].isAlive()) {
                            resultsTemp[height][width]++;
                        }
                    }
                }
                this.board.steps();
            }
            for (let height = 0; height < this.options.board.height; height++) {
                for (let width = 0; width < this.options.board.width; width++) {
                    if (this.board.fields[height][width].isAlive()) {
                        resultsTemp[height][width]++;
                    }
                    results[height][width] += resultsTemp[height][width] / rounds;
                }
            }
        }
        for (let height = 0; height < this.options.board.height; height++) {
            for (let width = 0; width < this.options.board.width; width++) {
                results[height][width] /= cycles;
            }
        }
        this.saveToFile("density_r" + rounds + "_p" + this.options.probability, this.array2dToString(results));
    }

    setDefault(width, height, probability, boundaries, fractionLife) {
        this.options.board.width = width;
        this.options.board.height = height;
        this.options.probability = probability;
        this.options.borders = boundaries;
        this.options.fractionNeighbors = fractionLife;
        document.querySelectorAll(".ranges")[0].value = width;
        document.querySelectorAll(".ranges")[1].value = height;
        document.querySelector("#probability").value = probability;
        document.querySelector("#slider").checked = fractionLife;
        this.board.setBoundaries();
    }

    ifAllDead() {
        for (let i = 0; i < this.options.board.height; i++) {
            for (let j = 0; j < this.options.board.width; j++) {
                if (this.board.fields[i][j].isAlive()) {
                    return false;
                }
            }
        }
        return true;
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

    setOptions(options) {
        for (let option in options) {
            if (this.options.hasOwnProperty(option))
                this.options[option] = options[option];
        }
        this.menu.setInitialValues();
    }

    getCenterOfWeight() {
        
    }
}