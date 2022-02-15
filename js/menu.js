class Menu {
    constructor(options, configurations, board) {
        this.options = options;
        this.configurations = configurations;
        this.board = board;
        this.hiddenMenu = false;
        this.element = document.querySelector("#menu");
        this.hideMenuElement = document.querySelector("#hideMenu");
        this.showMenuElement = document.querySelector("#showMenuContainer");
        this.makeMenu();
        this.setInitialValues();
        this.addListeners();
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

    addListeners() {
        document.querySelectorAll(".ranges").forEach((el) => el.addEventListener("input", (event) => this.board.changeBoard(event)));
        document.querySelector("#start").addEventListener("click", () => this.board.start());
        document.querySelector("#stop").addEventListener("click", () => this.board.stop());
        document.querySelector("#restart").addEventListener("click", () => this.board.restart());
        document.querySelector("#insertShape").addEventListener("click", () => this.board.insertShape(this.configurations));
        document.querySelector("#fetchShape").addEventListener("click", () => this.board.fetchShape());
        document.querySelector("#fractionLife").addEventListener("change", (event) => this.board.changeNeighbors(event));
        document.querySelector("#time").addEventListener("input", (event) => this.board.changeTimeInterval(event));
        document.querySelector("#clear").addEventListener("click", () => this.board.clearBoard());
        document.querySelector("#probability").addEventListener("input", (event) => this.board.changeProbability(event));
        document.querySelectorAll(".border").forEach((el) => el.addEventListener("click", (event) => this.board.changeBorder(event)));
        document.querySelector("#bordersOn").addEventListener("click", () => this.board.boundariesOn());
        document.querySelector("#bordersOff").addEventListener("click", () => this.board.boundariesOff());
        document.querySelector("#tribesNumber").addEventListener("input", (event) => this.board.changeTribesNumber(event));
        document.querySelector("#generateTribes").addEventListener("click", () => this.board.generateTribes());
        document.querySelector("#innerBorders").addEventListener("change", (event) => this.board.changeInnerBorders(event));
        document.querySelector("#subtractGenerating").addEventListener("change", (event) => this.board.changeSubtractGenerating(event));
        document.querySelector("#gaussRange").addEventListener("input", (event) => this.board.changeGaussRange(event));
        document.querySelector("#hideMenu").addEventListener("click", () => this.showAndHideMenu());
        document.querySelector("#showMenu").addEventListener("click", () => this.showAndHideMenu());
        document.querySelector("#showFullColor").addEventListener("change", (event) => this.board.changeFullColor(event));
        document.querySelector("#underpopulation").addEventListener("input", (event) => this.board.changeUnderpopulation(event));
        document.querySelector("#overpopulation").addEventListener("input", (event) => this.board.changeOverpopulation(event));
        document.querySelector("#minDeadCell").addEventListener("input", (event) => this.board.changeMinDeadCell(event));
        document.querySelector("#maxDeadCell").addEventListener("input", (event) => this.board.changeMaxDeadCell(event));
        document.querySelector("#toManyOtherTribes").addEventListener("input", (event) => this.board.changeToManyOtherTribes(event));
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
        document.querySelector("#showFullColor").checked = this.options.showFullColor;
        document.querySelector("#gaussRange").value = this.options.gaussRange;
        document.querySelector("#underpopulation").value = this.options.underpopulation;
        document.querySelector("#overpopulation").value = this.options.overpopulation;
        document.querySelector("#minDeadCell").value = this.options.minDeadCell;
        document.querySelector("#maxDeadCell").value = this.options.maxDeadCell;
        document.querySelector("#toManyOtherTribes").value = this.options.toManyOtherTribes;
        this.board.setBoundaries();
    }

    showAndHideMenu() {
        if (this.hiddenMenu) {
            this.element.style.display = "block";
            this.hideMenuElement.style.display = "block";
            this.showMenuElement.style.display = "none";
        } else {
            this.element.style.display = "none";
            this.hideMenuElement.style.display = "none";
            this.showMenuElement.style.display = "block";
        }
        this.hiddenMenu = !this.hiddenMenu;
    }
}