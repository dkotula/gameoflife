class Main {
    constructor() {
        this.element = document.createElement("div");
        this.element.id = "game"
        this.options = options;
        this.configurations = configurations;
        this.testBoards = testBoards;
        this.board = new Board(this.options, this.testBoards);
        this.element.appendChild(this.board.getElement());
        this.menu = new Menu(this.configurations, this.board, this.testBoards);
        this.tests = new Tests(this.board, this.options, this.menu);
    }

    getElement() {
        return this.element;
    }
}