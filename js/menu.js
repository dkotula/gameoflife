class Menu {
    constructor(options, configurations) {
        this.options = options;
        this.configurations = configurations;
        this.hiddenMenu = false;
        this.element = document.querySelector("#menu");
        this.hideMenuElement = document.querySelector("#hideMenu");
        this.showMenuElement = document.querySelector("#showMenuContainer");
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
        document.querySelector("#fractionLife").addEventListener("change", (event) => board.changeNeighbors(event));
        document.querySelector("#time").addEventListener("input", (event) => board.changeTimeInterval(event));
        document.querySelector("#clear").addEventListener("click", () => board.clearBoard());
        document.querySelector("#probability").addEventListener("input", (event) => board.changeProbability(event));
        document.querySelectorAll(".border").forEach((el) => el.addEventListener("click", (event) => board.changeBorder(event)));
        document.querySelector("#bordersOn").addEventListener("click", () => board.boundariesOn());
        document.querySelector("#bordersOff").addEventListener("click", () => board.boundariesOff());
        document.querySelector("#tribesNumber").addEventListener("input", (event) => board.changeTribesNumber(event));
        document.querySelector("#generateTribes").addEventListener("click", () => board.generateTribes());
        document.querySelector("#innerBorders").addEventListener("change", (event) => board.changeInnerBorders(event));
        document.querySelector("#subtractGenerating").addEventListener("change", (event) => board.changeSubtractGenerating(event));
        document.querySelector("#gaussRange").addEventListener("input", (event) => board.changeGaussRange(event));
        document.querySelector("#hideMenu").addEventListener("click", () => this.showAndHideMenu());
        document.querySelector("#showMenu").addEventListener("click", () => this.showAndHideMenu());
    }

    setInitialValues() {
        document.querySelector("#width").value = this.options.board.width;
        document.querySelector("#height").value = this.options.board.height;
        document.querySelector("#fieldSize").value = this.options.board.fieldSize;
        document.querySelector("#probability").value = this.options.probability;
        document.querySelector("#fractionLife").checked = this.options.fractionNeighbors;
        document.querySelector("#time").value = this.options.timeInterval;
        document.querySelector("#tribesNumber").value = this.options.tribesNumber;
        document.querySelector("#innerBorders").checked = this.options.innerBorders;
        document.querySelector("#subtractGenerating").checked = this.options.subtractGenerating;
        document.querySelector("#gaussRange").value = this.options.gaussRange;
    }

    showAndHideMenu() {
        if (this.hiddenMenu) {
            this.element.style.display = "block";
            this.hideMenuElement.style.display = "block";
            this.showMenuElement.style.display = "none";
        }
        else {
            this.element.style.display = "none";
            this.hideMenuElement.style.display = "none";
            this.showMenuElement.style.display = "block";
        }
        this.hiddenMenu = !this.hiddenMenu;
    }
}