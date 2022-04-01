class Menu {
    constructor(options, configurations, board) {
        this.options = options;
        this.configurations = configurations;
        this.board = board;
        this.hiddenMenu = false;
        this.hiddenMenuBlock = false;
        this.element = document.querySelector("#menu");
        this.elementBlock = document.querySelector("#menuBlock");
        this.hideMenuElement = document.querySelector("#hideMenu");
        this.showMenuElement = document.querySelector("#showMenuContainer");
        this.hideMenuBlockElement = document.querySelector("#hideMenuBlock");
        this.showMenuBlockElement = document.querySelector("#showMenuBlockContainer");
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
        document.querySelector("#clear").addEventListener("click", () => this.board.clearBoard(true));
        document.querySelector("#probability").addEventListener("input", (event) => this.board.changeProbability(event));
        document.querySelectorAll(".border").forEach((el) => el.addEventListener("click", (event) => this.board.changeBorder(event)));
        document.querySelector("#bordersOn").addEventListener("click", () => this.board.boundariesOn());
        document.querySelector("#bordersOff").addEventListener("click", () => this.board.boundariesOff());
        document.querySelector("#tribesNumber").addEventListener("input", (event) => this.board.changeTribesNumber(event));
        document.querySelector("#generateTribes").addEventListener("click", () => this.board.generateTribes());
        document.querySelector("#innerBorders").addEventListener("change", (event) => this.board.changeInnerBorders(event));
        document.querySelector("#subtractGenerating").addEventListener("change", (event) => this.board.changeSubtractGenerating(event));
        document.querySelector("#gaussRange").addEventListener("input", (event) => this.board.changeGaussRange(event));
        document.querySelector("#massOfTribe").addEventListener("input", (event) => this.board.changeMassOfTribe(event));
        document.querySelector("#hideMenu").addEventListener("click", () => this.showAndHideMenu());
        document.querySelector("#showMenu").addEventListener("click", () => this.showAndHideMenu());
        document.querySelector("#showFullColor").addEventListener("change", (event) => this.board.changeFullColor(event));
        document.querySelector("#underpopulation").addEventListener("input", (event) => this.board.changeUnderpopulation(event));
        document.querySelector("#overpopulation").addEventListener("input", (event) => this.board.changeOverpopulation(event));
        document.querySelector("#minDeadCell").addEventListener("input", (event) => this.board.changeMinDeadCell(event));
        document.querySelector("#maxDeadCell").addEventListener("input", (event) => this.board.changeMaxDeadCell(event));
        document.querySelector("#toManyOtherTribes").addEventListener("input", (event) => this.board.changeToManyOtherTribes(event));
        document.querySelector("#setBlock").addEventListener("change", (event) => this.board.changeSetBlock(event));
        document.querySelector("#setDead").addEventListener("change", (event) => this.board.changeSetDead(event));
        document.querySelector("#setAlive").addEventListener("change", (event) => this.board.changeSetAlive(event));
        document.querySelector("#wholeColumn").addEventListener("change", (event) => this.board.changeWholeColumn(event));
        document.querySelector("#wholeRow").addEventListener("change", (event) => this.board.changeWholeRow(event));
        document.querySelector("#main").addEventListener("mousedown", () => this.board.fieldClick());
        document.querySelector("#main").addEventListener("mouseup", () => this.board.fieldUnClick());
        document.querySelector("#clearWithoutBlocks").addEventListener("click", () => this.board.clearBoard(false));
        document.querySelector("#hideMenuBlock").addEventListener("click", () => this.showAndHideMenuBlock());
        document.querySelector("#showMenuBlock").addEventListener("click", () => this.showAndHideMenuBlock());
        document.querySelector("#blockIntensity").addEventListener("input", (event) => this.board.changeBlockIntensity(event));
        document.querySelector("#flashing").addEventListener("change", (event) => this.board.changeflashing(event));
        document.querySelector("#disappearsAfter").addEventListener("input", (event) => this.board.changeDisappearsAfter(event));
        document.querySelector("#appearsAfter").addEventListener("input", (event) => this.board.changeAppearsAfter(event));
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
        document.querySelector("#massOfTribe").value = this.options.massOfTribe;
        document.querySelector("#underpopulation").value = this.options.underpopulation;
        document.querySelector("#overpopulation").value = this.options.overpopulation;
        document.querySelector("#minDeadCell").value = this.options.minDeadCell;
        document.querySelector("#maxDeadCell").value = this.options.maxDeadCell;
        document.querySelector("#toManyOtherTribes").value = this.options.toManyOtherTribes;
        document.querySelector("#setBlock").checked = this.options.setBlock;
        document.querySelector("#setDead").checked = this.options.setDead;
        document.querySelector("#setAlive").checked = this.options.setAlive;
        document.querySelector("#wholeColumn").checked = this.options.wholeColumn;
        document.querySelector("#wholeRow").checked = this.options.wholeRow;
        document.querySelector("#blockIntensity").value = this.options.blockIntensity;
        document.querySelector("#flashing").checked = this.options.flashing;
        document.querySelector("#disappearsAfter").value = this.options.disappearsAfter;
        document.querySelector("#appearsAfter").value = this.options.appearsAfter;
        if (!this.options.flashing) {
            document.querySelector("#disappearsAfter").disabled = true;
            document.querySelector("#appearsAfter").disabled = true;
        }
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

    showAndHideMenuBlock() {
        if (this.hiddenMenuBlock) {
            this.elementBlock.style.display = "block";
            this.hideMenuBlockElement.style.display = "block";
            this.showMenuBlockElement.style.display = "none";
        } else {
            this.elementBlock.style.display = "none";
            this.hideMenuBlockElement.style.display = "none";
            this.showMenuBlockElement.style.display = "block";
        }
        this.hiddenMenuBlock = !this.hiddenMenuBlock;
    }
}