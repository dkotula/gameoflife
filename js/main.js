class Main {
    constructor() {
        this.element = document.createElement("div");
        this.options = options;
        this.configurations = configurations;
        this.board = new Board(this.options);
        this.element.appendChild(this.board.getElement());
        this.menu = new Menu(this.options, this.configurations, this.board);
        this.tests = new Tests(this.board, this.options, this.menu);
    }

    getElement() {
        return this.element;
    }
}