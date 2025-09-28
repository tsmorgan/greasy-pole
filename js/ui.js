export class FlashMessage {
  constructor() {
    this.flashDiv = document.getElementById("flash");
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

    buttons.forEach((b) => {
      this.grid.appendChild(createButton(b));
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
