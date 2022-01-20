class Main {
    constructor() {
        this.element = document.createElement("div");
        this.configurations = configurations_json;
        this.menu = new Menu(this.configurations);
        this.board = new Board();
        this.element.appendChild(this.board.getElement());
        this.menu.addListeners(this.board);
        this.tests = new Tests(this.board);
        this.tests.makeTests();
    }

    getElement() {
        return this.element;
    }
}