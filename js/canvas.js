export class Canvas {
  constructor() {
    this.canvas = document.getElementById("liquidCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.setupCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.canvas.style.width = window.innerWidth + "px";
    this.canvas.style.height = window.innerHeight + "px";
    this.ctx.scale(dpr, dpr);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  drawWave(baseY, t, alter = 1) {
    const amplitude = Math.max(10, this.height * 0.02);
    const wavelength = 130;

    this.ctx.beginPath();
    this.ctx.moveTo(0, this.height);
    let y;
    for (let x = 1; x <= this.width; x += 50) {
      y = baseY + Math.sin((x * alter + t) / wavelength) * amplitude;
      this.ctx.lineTo(x, y);
    }
    this.ctx.lineTo(this.width, y);
    this.ctx.lineTo(this.width, this.height);
    this.ctx.closePath();
    this.ctx.fillStyle = "#3278f07F";
    this.ctx.fill();
  }

  drawCircle(x, y) {
    const radius = 5; // 10px diameter
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "#000";
    this.ctx.fill();
  }

  drawHouse(boxX, boxY, boxWidth) {
    const roofH = boxWidth * 0.6;
    this.ctx.fillStyle = "#a12b1f";
    this.ctx.fillRect(boxX, boxY - 2, boxWidth, (7 * boxWidth) / 10);
    this.ctx.beginPath();
    this.ctx.moveTo(boxX - boxWidth / 5, boxY);
    this.ctx.lineTo(boxX + boxWidth / 2, boxY - roofH);
    this.ctx.lineTo(boxWidth / 5 + boxX + boxWidth, boxY);
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawTerrain(floorX, floorY, boxWidth) {
    const mid = this.width / 2;
    const pull = this.height / 4;
    const ext = this.height / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(-ext, this.height);
    this.ctx.bezierCurveTo(
      mid,
      this.height,
      this.width / 2 - pull,
      floorY,
      floorX - boxWidth / 2,
      floorY + 5
    );
    this.ctx.lineTo(floorX + boxWidth / 2, floorY + 5);
    this.ctx.bezierCurveTo(
      mid + pull,
      floorY,
      mid,
      this.height,
      this.width + ext,
      this.height
    );
    this.ctx.closePath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fill();

    // Draw anchor points
    // this.drawCircle(this.width / 2, this.height);
    // this.drawCircle(this.width / 2 - this.height, floorY);
    // this.drawCircle(this.width / 2 + this.height, floorY);
    // this.drawCircle(this.width / 2, this.height);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
