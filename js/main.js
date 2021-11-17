class Main {
  constructor() {
    this.main = document.querySelector("#main");
    this.configurations = {
      still: [
        { name: "block", positions: [0, 0, 0, 1, 1, 0, 1, 1] },
        { name: "bee-hive", positions: [1, 0, 0, 1, 0, 2, 1, 3, 2, 2, 2, 1] },
        { name: "loaf", positions: [1, 0, 0, 1, 0, 2, 1, 3, 2, 3, 3, 2, 2, 1] },
        { name: "boat", positions: [0, 0, 0, 1, 1, 0, 2, 1, 1, 2] },
        { name: "tub", positions: [0, 1, 1, 0, 2, 1, 1, 2] },
      ],
      oscilators: [

      ],
      spaceships: [

      ]
    }
    this.makeMenu();
    this.makeBoard();
    document.querySelectorAll(".ranges").forEach((el) => el.addEventListener("input", (event) => this.board.changeBoard(event)));
    document.querySelector("#spaceship").addEventListener("change", (event) => this.board.changeInputSpaceship(event));
    document.querySelector("#start").addEventListener("click", () => this.board.start());
    document.querySelector("#restart").addEventListener("click", () => this.board.restart());
    document.querySelector("#insertShape").addEventListener("click", () => this.board.insertShape(this.configurations));
  }

  makeMenu() {
    this.configurations.still.forEach((el) => this.addOption("still", el));
    this.configurations.oscilators.forEach((el) => this.addOption("oscilators", el));
    this.configurations.spaceships.forEach((el) => this.addOption("spaceships", el));
  }

  addOption(type, el) {
    let option = document.createElement("option");
    option.value = type + "_" + el.name;
    option.innerHTML = type + "-" + el.name;
    document.querySelector("#configurations").appendChild(option);
  }

  makeBoard() {
    this.board = new Board(document.querySelectorAll(".ranges")[0].value, document.querySelectorAll(".ranges")[1].value, document.querySelectorAll(".ranges")[2].value);
    this.main.appendChild(this.board.getElement());
  }
}