class Main {
    constructor() {
        this.element = document.createElement("div");
        this.element.id = "game"
        this.options = options;
        this.board = new Board(this.options, this);
        this.element.appendChild(this.board.getElement());
        this.menu = new Menu(this.board);
        this.tests = new Tests(this.board);
    }

    getElement() {
        return this.element;
    }
}