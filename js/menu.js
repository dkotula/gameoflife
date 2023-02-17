class Menu {
    constructor(board) {
        this.board = board;
        this.hiddenMenu = false;
        this.element = document.querySelector("#menu");
        this.hideMenuElement = document.querySelector("#hideMenu");
        this.showMenuElement = document.querySelector("#showMenuContainer");
        this.board.setInitialValues();
        this.addListeners();
    }

    addListeners() {
        document.querySelectorAll(".ranges").forEach((el) => el.addEventListener("input", (event) => this.board.changeBoard(event)));
        document.querySelector("#start").addEventListener("click", () => this.board.start());
        document.querySelector("#stop").addEventListener("click", () => this.board.stop());
        document.querySelector("#restart").addEventListener("click", () => this.board.restart());
        document.querySelector("#time").addEventListener("input", (event) => this.board.changeTimeInterval(event));
        document.querySelector("#clear").addEventListener("click", () => this.board.clearBoard(true));
        document.querySelector("#probability").addEventListener("input", (event) => this.board.changeProbability(event));
        document.querySelector("#innerBorders").addEventListener("change", (event) => this.board.changeInnerBorders(event));
        document.querySelector("#hideMenu").addEventListener("click", () => this.showAndHideMenu());
        document.querySelector("#showMenu").addEventListener("click", () => this.showAndHideMenu());
        document.querySelector("#underpopulation").addEventListener("input", (event) => this.board.changeUnderpopulation(event));
        document.querySelector("#overpopulation").addEventListener("input", (event) => this.board.changeOverpopulation(event));
        document.querySelector("#minDeadCell").addEventListener("input", (event) => this.board.changeMinDeadCell(event));
        document.querySelector("#maxDeadCell").addEventListener("input", (event) => this.board.changeMaxDeadCell(event));
        document.querySelector("#setDead").addEventListener("change", (event) => this.board.changeSetDead(event));
        document.querySelector("#setAlive").addEventListener("change", (event) => this.board.changeSetAlive(event));
        document.querySelector("#main").addEventListener("mousedown", () => this.board.fieldClick());
        document.querySelector("#main").addEventListener("mouseup", () => this.board.fieldUnClick());
        document.querySelector("#testRepetitions").addEventListener("input", (event) => this.board.changeTestRepetitions(event));
        document.querySelector("#testCycles").addEventListener("input", (event) => this.board.changeTestCycles(event));
        document.querySelector("#testDownloadMap").addEventListener("click", () => this.board.calculateProbability());
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