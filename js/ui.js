export class StatusMessage {
  constructor() {
    this.statusDiv = document.getElementById("status");
  }

  show(msg) {
    this.statusDiv.textContent = msg;
    this.statusDiv.classList.add("status-show");
  }

  hide() {
    this.statusDiv.classList.remove("status-show");
  }
}

export class FlashMessage {
  constructor() {
    this.flashTimeout = null;
    this.flashMessage = "";
  }

  show(msg, persistent = false) {
    this.flashMessage = msg;
    this.flashDiv.textContent = msg;
    this.flashDiv.classList.add("flash-show");
    clearTimeout(this.flashTimeout);

    if (!persistent) {
      this.flashTimeout = setTimeout(() => {
        this.flashDiv.classList.remove("flash-show");
      }, 1500);
    } else {
      this.flashDiv.classList.add("persistent");
    }
  }
}

export class ButtonGrid {
  constructor() {
    this.grid = document.getElementById("buttonGrid");
  }

  show(show = false) {
    if (show) {
      this.grid.classList.remove("hidden");
    } else {
      this.grid.classList.add("hidden");
    }
  }

  createButtons(buttons, handleClick) {
    this.grid.innerHTML = "";

    const createButton = (b) => {
      const btn = document.createElement("button");
      btn.id = b.id;
      btn.textContent = b.letter;
      btn.onclick = () => handleClick(b);
      return btn;
    };

    let max = 3;
    if (buttons.length == 4) max = 2;
    if (buttons.length == 7) max = 4;

    let row;
    buttons.forEach((b, i) => {
      if (i%max == 0) {
        row = document.createElement("div");
        row.className = "button-row";
        this.grid.appendChild(row);
      }
      row.appendChild(createButton(b));
    });
  }

  // createButtonsTwoRows(buttons, handleClick) {
  //   this.grid.innerHTML = "";
  //   const row1 = document.createElement("div");
  //   row1.className = "button-row";
  //   const row2 = document.createElement("div");
  //   row2.className = "button-row";

  //   const midpoint = Math.ceil(buttons.length / 2);

  //   const createButton = (b) => {
  //     const btn = document.createElement("button");
  //     btn.id = b.id;
  //     btn.textContent = b.letter;
  //     btn.onclick = () => handleClick(b);
  //     return btn;
  //   };

  //   buttons.slice(0, midpoint).forEach((b) => {
  //     row1.appendChild(createButton(b));
  //   });

  //   buttons.slice(midpoint).forEach((b) => {
  //     row2.appendChild(createButton(b));
  //   });

  //   this.grid.appendChild(row1);
  //   this.grid.appendChild(row2);
  // }
}
