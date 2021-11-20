class Main {
    constructor() {
        this.main = document.querySelector("#main");
        this.configurations = configurations_json;
        this.makeMenu();
        this.board = new Board();
        this.main.appendChild(this.board.getElement());
        document.querySelectorAll(".ranges").forEach((el) => el.addEventListener("input", (event) => this.board.changeBoard(event)));
        document.querySelector("#start").addEventListener("click", () => this.board.start());
        document.querySelector("#stop").addEventListener("click", () => this.board.stop());
        document.querySelector("#restart").addEventListener("click", () => this.board.restart());
        document.querySelector("#insertShape").addEventListener("click", () => this.board.insertShape(this.configurations));
        document.querySelector("#fetchShape").addEventListener("click", () => this.board.fetchShape());
        document.querySelector("#slider").addEventListener("change", (event) => this.board.changeBoundaries(event));
        document.querySelector("#time").addEventListener("input", (event) => this.board.changeTimeInterval(event));
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
}