class Tests {
    constructor(board) {
        this.board = board;
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

    calculateProbability(numberOfRepetitions, numberOfCycles, configuration) {
        let probabilities = [];
        let phases = [];
        for (let repetition = 0; repetition < numberOfRepetitions; repetition++) {
            this.board.loadConfiguration(configuration);
            for (let cycleNumber = 0; cycleNumber < numberOfCycles; cycleNumber++) {
                if (probabilities.length <= cycleNumber) {
                    probabilities.push(this.fetchMassOfBoard());
                } else {
                    probabilities[cycleNumber] = this.updateProbability(repetition, probabilities[cycleNumber]);
                }
                if (phases.length <= cycleNumber) {
                    phases.push(this.fetchPhaseOfBoard());
                } else {
                    phases[cycleNumber] = this.updatePhase(repetition, phases[cycleNumber]);
                }
                this.board.steps();
            }
        }
        this.saveToFile("probability_r" + numberOfRepetitions + "_c" + numberOfCycles, this.array2dToString(probabilities));
        this.saveToFile("phase_r" + numberOfRepetitions + "_c" + numberOfCycles, this.array2dToString(phases));
    }

    updateProbability(repetition, probabilities, color = "none") {
        let mass = this.fetchMassOfBoard(color);
        for (let i in mass) {
            mass[i] = (probabilities[i] * repetition + mass[i]) / (repetition + 1)
        }
        return mass;
    }

    fetchMassOfBoard(color = "none") {
        let mass = [];
        for (let i in this.board.fields) {
            if (this.board.fields[i].isAlive() && this.board.fields[i].getModulus() > 0) {
                if (color !== "none") {
                    if (color === this.board.fields[i].getColor()) {
                        mass[i] = this.board.fields[i].getModulus();
                    } else {
                        mass[i] = 0.0;
                    }
                } else {
                    mass[i] = this.board.fields[i].getModulus();
                }
            } else {
                mass[i] = 0.0;
            }
        }
        return mass;
    }

    updatePhase(repetition, phase, color = "none") {
        let phaseTemp = this.fetchPhaseOfBoard(color);
        for (let i in phaseTemp) {
            phaseTemp[i] = (phase[i] * repetition + phaseTemp[i]) / (repetition + 1)
        }
        return phaseTemp;
    }

    fetchPhaseOfBoard(color = "none") {
        let phase = [];
        for (let i in this.board.fields) {
            if (this.board.fields[i].isAlive() && this.board.fields[i].phase > 0) {
                if (color !== "none") {
                    if (color === this.board.fields[i].getColor()) {
                        phase[i] = this.board.fields[i].phase;
                    } else {
                        phase[i] = 0.0;
                    }
                } else {
                    phase[i] = this.board.fields[i].phase;
                }
            } else {
                phase[i] = 0.0;
            }
        }
        return phase;
    }
}