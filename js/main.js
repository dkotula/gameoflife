class Main {
    constructor() {
        this.main = document.querySelector("#main");
        this.configurations = configurations_json;
        this.makeMenu();
        this.board = new Board();
        this.main.appendChild(this.board.getElement());
        this.addListeners();
        this.board.tests();
    }

    makeMenu() {
        for (let key in this.configurations) {
            if (this.configurations.hasOwnProperty(key)) {
                this.configurations[key].forEach((el) => this.addOption(key, el));
            }
        }
    }

    addListeners() {
        document.querySelectorAll(".ranges").forEach((el) => el.addEventListener("input", (event) => this.board.changeBoard(event)));
        document.querySelector("#start").addEventListener("click", () => this.board.start());
        document.querySelector("#stop").addEventListener("click", () => this.board.stop());
        document.querySelector("#restart").addEventListener("click", () => this.board.restart());
        document.querySelector("#insertShape").addEventListener("click", () => this.board.insertShape(this.configurations));
        document.querySelector("#fetchShape").addEventListener("click", () => this.board.fetchShape());
        document.querySelector("#slider").addEventListener("change", (event) => this.board.changeBoundaries(event));
        document.querySelector("#slider2").addEventListener("change", (event) => this.board.changeNeighbors(event));
        document.querySelector("#time").addEventListener("input", (event) => this.board.changeTimeInterval(event));
        document.querySelector("#clear").addEventListener("click", () => this.board.clearBoard());
        document.querySelector("#probability").addEventListener("input", (event) => this.board.changeProbability(event));
    }

    addOption(type, el) {
        let option = document.createElement("option");
        option.value = type + "_" + el.name;
        option.innerHTML = type + "-" + el.name;
        document.querySelector("#configurations").appendChild(option);
    }
}