class Main {
  constructor() {
    this.main = document.querySelector("#main");
    this.makeBoard();
    document.querySelectorAll(".ranges").forEach((el) => el.addEventListener("input", (event) => this.board.changeBoard(event)));
    document.querySelector("#spaceship").addEventListener("change", (event) => this.board.changeInputSpaceship(event));
    document.querySelector("#start").addEventListener("click", () => this.board.start());
    document.querySelector("#restart").addEventListener("click", () => this.board.restart());
  }

  makeBoard() {
    this.board = new Board(document.querySelectorAll(".ranges")[0].value, document.querySelectorAll(".ranges")[1].value, document.querySelectorAll(".ranges")[2].value);
    this.main.appendChild(this.board.getElement());
  }
}