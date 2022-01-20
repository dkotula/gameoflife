class Menu {
    constructor(options, configurations) {
        this.options = options;
        this.configurations = configurations;
        this.makeMenu();
        this.setInitialValues();
    }

    makeMenu() {
        for (let key in this.configurations) {
            if (this.configurations.hasOwnProperty(key)) {
                this.configurations[key].forEach((el) => this.addOption(key, el));
            }
        }
    }

    addOption(type, el) {
        let option = document.createElement("option");
        option.value = type + "_" + el.name;
        option.innerHTML = type + "-" + el.name;
        document.querySelector("#configurations").appendChild(option);
    }

    addListeners(board) {
        document.querySelectorAll(".ranges").forEach((el) => el.addEventListener("input", (event) => board.changeBoard(event)));
        document.querySelector("#start").addEventListener("click", () => board.start());
        document.querySelector("#stop").addEventListener("click", () => board.stop());
        document.querySelector("#restart").addEventListener("click", () => board.restart());
        document.querySelector("#insertShape").addEventListener("click", () => board.insertShape(this.configurations));
        document.querySelector("#fetchShape").addEventListener("click", () => board.fetchShape());
        document.querySelector("#slider").addEventListener("change", (event) => board.changeNeighbors(event));
        document.querySelector("#time").addEventListener("input", (event) => board.changeTimeInterval(event));
        document.querySelector("#clear").addEventListener("click", () => board.clearBoard());
        document.querySelector("#probability").addEventListener("input", (event) => board.changeProbability(event));
        document.querySelectorAll(".border").forEach((el) => el.addEventListener("click", (event) => board.changeBorder(event)));
        document.querySelector("#bordersOn").addEventListener("click", () => board.boundariesOn());
        document.querySelector("#bordersOff").addEventListener("click", () => board.boundariesOff());
        document.querySelector("#tribesNumber").addEventListener("input", (event) => board.changeTribesNumber(event));
        document.querySelector("#generateTribes").addEventListener("click", () => board.generateTribes());
    }

    setInitialValues() {
        document.querySelector("#width").value = this.options.board.width;
        document.querySelector("#height").value = this.options.board.height;
        document.querySelector("#fieldSize").value = this.options.board.fieldSize;
        document.querySelector("#probability").value = this.options.probability;
        document.querySelector("#slider").checked = this.options.fractionNeighbors;
        document.querySelector("#time").value = this.options.timeInterval;
    }
}