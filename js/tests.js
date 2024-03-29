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
        // this.getCenterOfWeight(5, 100);
        // this.getCenterOfWeightFromFile(100, 0);
        // this.getCenterOfWeightFromFileFromIntervals(100, 0, [
        //     [0, 0, 1, 1],
        //     [4, 0, 6, 1],
        //     [8, 0, 9, 1],
        //     [0, 5, 1, 7],
        //     [4, 5, 6, 7],
        //     [8, 5, 9, 7],
        //     [0, 9, 1, 9],
        //     [4, 9, 6, 9],
        //     [8, 9, 9, 9],
        // ]);
        // this.getEntropyFromFile(100, 0, false);
        // this.getEntropyFromFile(100, 0, true);
        // this.getEntropyFromFile(300, 1, true);
        // this.getEntropyFromFile(300, 1, false);
        // this.getEntropyFromFile(300, 2, false);
        // this.getEntropyFromFile(300, 2, false);
        // this.calculateProbability(10, 100, 3);
        // this.calculateProbability(1000, 200, 3, true);
        // this.calculateProbability(10, 100, 3, true);
        // this.calculateProbability(200, 199, 5, true);
        // this.calculateProbability(10, 200, 4, true);
        // this.calculateProbability(200, 500, 3, true);
        // this.calculateProbabilityWithBarriers(201, 200, 3, true, 100);
        // this.calculateProbabilityWithBarriers(201, 200, 6, true, 100);
        // this.calculateProbability(300, 200, 7, true, true);
        // this.calculateProbability(100, 50, 3, true);
        // this.calculateProbability(200, 200, 8, true, true);
        // this.calculateProbabilityWithMovingBarriers(100, 400, 3, true, 100, 30);
        // this.calculateProbability(100, 300, 9, true, false);
        // this.calculateProbability(100, 300, 9, true, false);
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
        const probabilities = [100, 99, 98, 95, 90, 70, 50, 30, 1, 0];
        // const probabilities = [99.99, 99.95, 99.9, 99.8, 99.7, 99.6, 99.5, 99.4, 99.3, 99.2, 99.1, 97, 96, 94, 93, 92, 91, 89, 88, 87, 86, 85, 83, 80];
        // const probabilities = [100, 99.99, 99.95, 99.9, 99.8, 99.7, 99.6, 99.5, 99.4, 99.3, 99.2, 99.1, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 83, 80, 70, 50, 30, 1, 0];
        for (let i = 0; i < probabilities.length; i++) {
            this.calculateMean(100, probabilities[i]);
        }
    }

    calculateMean(cycles, probability) {
        let securityLevel = 1000;
        let results = [];
        this.setDefault(20, 20, probability, {
            borderTop: true,
            borderBottom: true,
            borderLeft: true,
            borderRight: true
        }, false);
        for (let i = 0; i < cycles; i++) {
            this.board.makeNewBoard();
            this.board.coordinatesToShape([9, 9, 10, 9, 10, 10, 9, 10]);
            for (let j = 0; j < securityLevel; j++) {
                this.board.steps();
                if (this.ifAllDead()) {
                    break;
                }
            }
            results.push(this.board.cyclesNumber);
        }
        this.saveToFile("mean2_p" + this.options.probability, this.array1dToString(results));
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
        document.querySelector("#fractionLife").checked = fractionLife;
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

    getCenterOfWeight(tribesNumber, cyclesNumber) {
        let tribesResults = [];
        this.setOptions({
            board: {
                width: 100,
                height: 100,
                fieldSize: 5,
            },
            probability: 100,
            borders: {
                borderTop: true,
                borderBottom: true,
                borderLeft: true,
                borderRight: true,
            },
            fractionNeighbors: true,
            timeInterval: 200,
            tribesNumber: tribesNumber,
            innerBorders: false,
            subtractGenerating: false,
            showFullColor: false,
            gaussRange: 300,
            massOfTribe: 100,
            underpopulation: 0.3,
            overpopulation: 0.6,
            minDeadCell: 0.45,
            maxDeadCell: 0.7,
            toManyOtherTribes: 0.3,
        });

        this.board.makeNewBoard();
        this.board.generateTribes();

        for (let tribe = 0; tribe < tribesNumber; tribe++) {
            tribesResults[tribe] = [this.calculateWeight(this.options.colors[tribe])];
        }

        for (let i = 0; i < cyclesNumber - 1; i++) {
            this.board.steps();
            if (this.ifAllDead()) {
                break;
            }
            for (let tribe = 0; tribe < tribesNumber; tribe++) {
                tribesResults[tribe].push(this.calculateWeight(this.options.colors[tribe]));
            }
        }

        for (let tribe = 0; tribe < tribesNumber; tribe++) {
            this.saveToFile("weight" + tribesNumber + "Tribe" + tribe, this.centerOfWeightToString(tribesResults[tribe]));
        }
    }

    calculateWeight(color, xFrom = 0, yFrom = 0, xTo = this.options.board.height - 1, yTo = this.options.board.width - 1) {
        let x = 0.0;
        let y = 0.0;
        let weightX = 0.0;
        let weightY = 0.0;
        let centerXVect = [];
        let centerYVect = [];

        for (let i = xFrom; i <= xTo; i++) {
            let weight = 0.0;
            let centerX = 0.0;
            for (let j = yFrom; j <= yTo; j++) {
                if (this.board.fields[i][j].type === "alive" && this.board.fields[i][j].getColor() === color) {
                    weight += this.board.fields[i][j].getLife();
                    centerX += this.board.fields[i][j].getLife() * (j + 1);
                }
            }
            if (weight !== 0.0) centerXVect.push({center: centerX / weight, weight: weight});
            else centerXVect.push({center: 0.0, weight: 0.0});
        }

        for (let i = 0; i < centerXVect.length; i++) {
            weightX += centerXVect[i].weight;
            x += centerXVect[i].weight * centerXVect[i].center;
        }
        if (weightX !== 0.0) x /= weightX;

        for (let j = yFrom; j <= yTo; j++) {
            let weight = 0.0;
            let centerY = 0.0;
            for (let i = xFrom; i <= xTo; i++) {
                if (this.board.fields[i][j].type === "alive" && this.board.fields[i][j].getColor() === color) {
                    weight += this.board.fields[i][j].getLife();
                    centerY += this.board.fields[i][j].getLife() * (i + 1);
                }
            }
            if (weight !== 0.0) centerYVect.push({center: centerY / weight, weight: weight});
            else centerYVect.push({center: 0.0, weight: 0.0});
        }

        for (let i = 0; i < centerYVect.length; i++) {
            weightY += centerYVect[i].weight;
            y += centerYVect[i].weight * centerYVect[i].center;
        }
        if (weightY !== 0.0) y /= weightY;

        return [{x: x - 1, y: y - 1, weight: weightX}];
    }

    centerOfWeightToString(weight) {
        let string = "";
        for (let i = 0; i < weight.length; i++) {
            for (let j = 0; j < weight[i].length; j++) {
                string += weight[i][j].x + '\t' + weight[i][j].y + '\t' + weight[i][j].weight + '\n';
            }
        }
        return string;
    }

    getCenterOfWeightFromFile(cyclesNumber, index) {
        this.board.loadConfiguration(index)
        let results = [this.calculateWeight("255,0,0")];

        for (let i = 0; i < cyclesNumber - 1; i++) {
            this.board.steps();
            if (this.ifAllDead()) {
                break;
            }
            results.push(this.calculateWeight("255,0,0"));
        }
        this.saveToFile("weightAll", this.centerOfWeightToString(results));
    }

    getCenterOfWeightFromFileFromIntervals(cyclesNumber, index, intervals) {
        let results = [];
        this.board.loadConfiguration(index)

        for (let interval = 0; interval < intervals.length; interval++) {
            results[interval] = [this.calculateWeight("255,0,0", ...intervals[interval])];
        }

        for (let i = 0; i < cyclesNumber - 1; i++) {
            this.board.steps();
            if (this.ifAllDead()) {
                break;
            }
            for (let interval = 0; interval < intervals.length; interval++) {
                results[interval].push(this.calculateWeight("255,0,0", ...intervals[interval]));
            }
        }

        for (let interval = 0; interval < intervals.length; interval++) {
            this.saveToFile("weightInterval" + interval, this.centerOfWeightToString(results[interval]));
        }
    }

    getEntropyFromFile(cyclesNumber, index, fraction) {
        this.board.loadConfiguration(index);
        let results = [this.calculateEntropy("255,0,0", fraction)];

        for (let i = 0; i < cyclesNumber - 1; i++) {
            this.board.steps();
            if (this.ifAllDead()) {
                break;
            }
            results.push(this.calculateEntropy("255,0,0", fraction));
        }
        this.saveToFile("entropy", this.array1dToString(results));
    }

    calculateEntropy(color, fraction = false, xFrom = 0, yFrom = 0, xTo = this.options.board.height - 1, yTo = this.options.board.width - 1) {
        let entropy = 0;

        for (let i = xFrom; i <= xTo; i++) {
            for (let j = yFrom; j <= yTo; j++) {
                if ((this.board.fields[i][j].type === "alive" && this.board.fields[i][j].getColor() === color) || (this.board.fields[i][j].type === "block" && this.board.fields[i][j].getColor() === color) && this.board.fields[i][j].isVisible === false) {
                    if (fraction) {
                        entropy += this.board.fields[i][j].getLife();
                    } else {
                        entropy++;
                    }
                }
            }
        }
        return entropy;
    }

    calculateProbability(numberOfRepetitions, numberOfCycles, index, fraction, saveAsTribes = false, configuration = {}, average = false) {
        let probabilities = [];
        let life = [];
        let imaginaryLife = []
        let phases = [];
        if (index === -1) {
            index = this.board.addConfiguration(configuration);
        }
        this.board.loadConfiguration(index);
        if (saveAsTribes) {
            for (let i = 0; i < this.options.tribesNumber; i++) {
                probabilities[i] = [];
                life[i] = [];
                imaginaryLife[i] = [];
                phases[i] = [];
            }
        }
        for (let repetition = 0; repetition < numberOfRepetitions; repetition++) {
            this.board.loadConfiguration(index);
            if (saveAsTribes) {
                for (let cycleNumber = 0; cycleNumber < numberOfCycles; cycleNumber++) {
                    for (let i = 0; i < this.options.tribesNumber; i++) {
                        if (average && cycleNumber % 10 === 0) {
                            this.board.averageCells2by2();
                        }
                        if (probabilities[i].length <= cycleNumber) {
                            probabilities[i].push(this.fetchMassOfBoard(fraction, this.options.colors[i]));
                        } else {
                            probabilities[i][cycleNumber] = this.updateProbability(repetition, probabilities[i][cycleNumber], fraction, this.options.colors[i]);
                        }
                        if (life[i].length <= cycleNumber) {
                            life[i].push(this.fetchLifeOfBoard(fraction, this.options.colors[i]));
                        } else {
                            life[i][cycleNumber] = this.updateLife(repetition, life[i][cycleNumber], fraction, this.options.colors[i]);
                        }
                        if (imaginaryLife[i].length <= cycleNumber) {
                            imaginaryLife[i].push(this.fetchImaginaryLifeOfBoard(fraction, this.options.colors[i]));
                        } else {
                            imaginaryLife[i][cycleNumber] = this.updateImaginaryLife(repetition, imaginaryLife[i][cycleNumber], fraction, this.options.colors[i]);
                        }
                        if (phases[i].length <= cycleNumber) {
                            phases[i].push(this.fetchPhaseOfBoard());
                        } else {
                            phases[i][cycleNumber] = this.updatePhase(repetition, phases[i][cycleNumber]);
                        }
                    }
                    this.board.steps();
                }
            } else {
                for (let cycleNumber = 0; cycleNumber < numberOfCycles; cycleNumber++) {
                    if (average && cycleNumber % 10 === 0) {
                        this.board.averageCells2by2();
                    }
                    if (probabilities.length <= cycleNumber) {
                        probabilities.push(this.fetchMassOfBoard(fraction));
                    } else {
                        probabilities[cycleNumber] = this.updateProbability(repetition, probabilities[cycleNumber], fraction);
                    }
                    if (life.length <= cycleNumber) {
                        life.push(this.fetchLifeOfBoard(fraction));
                    } else {
                        life[cycleNumber] = this.updateLife(repetition, life[cycleNumber], fraction);
                    }
                    if (imaginaryLife.length <= cycleNumber) {
                        imaginaryLife.push(this.fetchImaginaryLifeOfBoard(fraction));
                    } else {
                        imaginaryLife[cycleNumber] = this.updateImaginaryLife(repetition, imaginaryLife[cycleNumber], fraction);
                    }
                    if (phases.length <= cycleNumber) {
                        phases.push(this.fetchPhaseOfBoard());
                    } else {
                        phases[cycleNumber] = this.updatePhase(repetition, phases[cycleNumber]);
                    }
                    this.board.steps();
                }
            }
            if (average && numberOfCycles % 10 === 0) {
                this.board.averageCells2by2();
            }
        }
        if (saveAsTribes) {
            for (let i = 0; i < this.options.tribesNumber; i++) {
                this.saveToFile("probability_r" + numberOfRepetitions + "_c" + numberOfCycles + "_t" + (i + 1), this.array3dToString(probabilities[i]));
                this.saveToFile("life_r" + numberOfRepetitions + "_c" + numberOfCycles + "_t" + (i + 1), this.array3dToString(life[i]));
                this.saveToFile("imaginaryLife_r" + numberOfRepetitions + "_c" + numberOfCycles + "_t" + (i + 1), this.array3dToString(imaginaryLife[i]));
                this.saveToFile("phase_r" + numberOfRepetitions + "_c" + numberOfCycles + "_t" + (i + 1), this.array3dToString(phases[i]));
            }
        } else {
            this.saveToFile("probability_r" + numberOfRepetitions + "_c" + numberOfCycles, this.array3dToString(probabilities));
            this.saveToFile("life_r" + numberOfRepetitions + "_c" + numberOfCycles, this.array3dToString(life));
            this.saveToFile("imaginaryLife_r" + numberOfRepetitions + "_c" + numberOfCycles, this.array3dToString(imaginaryLife));
            this.saveToFile("phase_r" + numberOfRepetitions + "_c" + numberOfCycles, this.array3dToString(phases));
        }
    }

    updateProbability(repetition, probabilities, fraction, color = "none") {
        let mass = this.fetchMassOfBoard(fraction, color);
        for (let i in mass) {
            for (let j in mass[i]) {
                mass[i][j] = (probabilities[i][j] * repetition + mass[i][j]) / (repetition + 1)
            }
        }
        return mass;
    }

    updateLife(repetition, lives, fraction, color = "none") {
        let life = this.fetchLifeOfBoard(fraction, color);
        for (let i in life) {
            for (let j in life[i]) {
                life[i][j] = (lives[i][j] * repetition + life[i][j]) / (repetition + 1)
            }
        }
        return life;
    }

    updateImaginaryLife(repetition, imaginaryLives, fraction, color = "none") {
        let ImaginaryLife = this.fetchImaginaryLifeOfBoard(fraction, color);
        for (let i in ImaginaryLife) {
            for (let j in ImaginaryLife[i]) {
                ImaginaryLife[i][j] = (imaginaryLives[i][j] * repetition + ImaginaryLife[i][j]) / (repetition + 1)
            }
        }
        return ImaginaryLife;
    }

    fetchMassOfBoard(fraction, color = "none") {
        let mass = [];
        for (let i in this.board.fields) {
            mass[i] = [];
            for (let j in this.board.fields[i]) {
                if (this.board.fields[i][j].isAlive()) {
                    if (fraction) {
                        if (color !== "none") {
                            if (color === this.board.fields[i][j].getColor()) {
                                mass[i][j] = this.board.fields[i][j].getModulus();
                            } else {
                                mass[i][j] = 0.0;
                            }
                        } else {
                            mass[i][j] = this.board.fields[i][j].getModulus();
                        }
                    } else {
                        if (color === this.board.fields[i][j].getColor()) {
                            mass[i][j] = 1.0;
                        } else {
                            mass[i][j] = 0.0;
                        }
                    }
                } else {
                    mass[i][j] = 0.0;
                }
            }
        }
        return mass;
    }

    fetchLifeOfBoard(fraction, color = "none") {
        let life = [];
        for (let i in this.board.fields) {
            life[i] = [];
            for (let j in this.board.fields[i]) {
                if (this.board.fields[i][j].isAlive()) {
                    if (fraction) {
                        if (color !== "none") {
                            if (color === this.board.fields[i][j].getColor()) {
                                life[i][j] = this.board.fields[i][j].life;
                            } else {
                                life[i][j] = 0.0;
                            }
                        } else {
                            life[i][j] = this.board.fields[i][j].life;
                        }
                    } else {
                        if (color === this.board.fields[i][j].getColor()) {
                            life[i][j] = 1.0;
                        } else {
                            life[i][j] = 0.0;
                        }
                    }
                } else {
                    life[i][j] = 0.0;
                }
            }
        }
        return life;
    }

    fetchImaginaryLifeOfBoard(fraction, color = "none") {
        let imaginaryLife = [];
        for (let i in this.board.fields) {
            imaginaryLife[i] = [];
            for (let j in this.board.fields[i]) {
                if (this.board.fields[i][j].isAlive()) {
                    if (fraction) {
                        if (color !== "none") {
                            if (color === this.board.fields[i][j].getColor()) {
                                imaginaryLife[i][j] = this.board.fields[i][j].imaginaryLife;
                            } else {
                                imaginaryLife[i][j] = 0.0;
                            }
                        } else {
                            imaginaryLife[i][j] = this.board.fields[i][j].imaginaryLife;
                        }
                    } else {
                        if (color === this.board.fields[i][j].getColor()) {
                            imaginaryLife[i][j] = 1.0;
                        } else {
                            imaginaryLife[i][j] = 0.0;
                        }
                    }
                } else {
                    imaginaryLife[i][j] = 0.0;
                }
            }
        }
        return imaginaryLife;
    }

    updatePhase(repetition, phase) {
        let phaseTemp = this.fetchPhaseOfBoard();
        for (let i in phaseTemp) {
            for (let j in phaseTemp[i]) {
                phaseTemp[i][j] = (phase[i][j] * repetition + phaseTemp[i][j]) / (repetition + 1)
            }
        }
        return phaseTemp;
    }

    fetchPhaseOfBoard() {
        let phase = [];
        for (let i in this.board.fields) {
            phase[i] = [];
            for (let j in this.board.fields[i]) {
                phase[i][j] = this.board.fields[i][j].phase;
            }
        }
        return phase;
    }

    array3dToString(array) {
        let string = "";
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                for (let k = 0; k < array[i][j].length; k++) {
                    string += i + '\t' + j + '\t' + k + '\t' + array[i][j][k] + '\n';
                }
            }
        }
        return string;
    }

    calculateProbabilityWithBarriers(numberOfRepetitions, numberOfCycles, index, fraction, round_for_barriers) {
        let probabilities = [];
        for (let repetition = 0; repetition < numberOfRepetitions; repetition++) {
            this.board.loadConfiguration(index);
            for (let cycleNumber = 0; cycleNumber < numberOfCycles; cycleNumber++) {
                if (probabilities.length <= cycleNumber) {
                    probabilities.push(this.fetchMassOfBoard(fraction));
                } else {
                    probabilities[cycleNumber] = this.updateProbability(repetition, probabilities[cycleNumber], fraction);
                }

                if (cycleNumber >= round_for_barriers && cycleNumber < round_for_barriers + this.options.board.width) {
                    this.board.addBarrier(cycleNumber - round_for_barriers);
                }
                this.board.steps();
            }
        }
        this.saveToFile("probability_r" + numberOfRepetitions + "_c" + numberOfCycles, this.array3dToString(probabilities));
    }

    calculateProbabilityWithMovingBarriers(numberOfRepetitions, numberOfCycles, index, fraction, barriersStartRound, barriersInterval) {
        let probabilities = [];
        let barriersCounter = 0;
        let barriersTurn = true;
        for (let repetition = 0; repetition < numberOfRepetitions; repetition++) {
            this.board.loadConfiguration(index);
            for (let cycleNumber = 0; cycleNumber < numberOfCycles; cycleNumber++) {
                if (probabilities.length <= cycleNumber) {
                    probabilities.push(this.fetchMassOfBoard(fraction));
                } else {
                    probabilities[cycleNumber] = this.updateProbability(repetition, probabilities[cycleNumber], fraction);
                }

                if (cycleNumber >= barriersStartRound) {
                    if (barriersTurn) {
                        this.board.addBarrier(barriersCounter);
                        barriersCounter++;
                    } else {
                        this.board.subtractBarrier(barriersCounter);
                        barriersCounter--;
                    }
                    if (barriersCounter === 0 || barriersCounter === barriersInterval) {
                        barriersTurn = !barriersTurn;
                    }
                }
                this.board.steps();
            }
        }
        this.saveToFile("probability_r" + numberOfRepetitions + "_c" + numberOfCycles, this.array3dToString(probabilities));
    }
}