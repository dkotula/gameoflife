class Main {
    constructor() {
      this.main = document.querySelector("#main");
      this.makeBoard();
      document.querySelectorAll(".ranges").forEach((el) => el.addEventListener("input", (event) => this.board.changeBoard(event)));
    }

    makeBoard() {
        this.board = new Board(document.querySelectorAll(".ranges")[0].value, document.querySelectorAll(".ranges")[1].value, document.querySelectorAll(".ranges")[2].value);
        this.main.appendChild(this.board.getElement());
    }
}