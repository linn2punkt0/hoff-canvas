class Ball {
  radius = Math.round(Math.random() * (200 - 20) + 20);
  speedY = Math.round(Math.random() * (25 - 2) + 2);
  speedX = Math.round(Math.random() * (25 - 2) + 2);
  velocity = {
    x: Math.random() > 0.5 ? this.speedX : -this.speedX,
    y: Math.random() > 0.5 ? this.speedY : -this.speedY
  };

  constructor(context, x, y) {
    this.canvas = context.canvas;
    this.context = context;
    this.y = y;
    this.x = x;

    const colors = ["#7DDF64", "#FFF", "#1789FC", "#ED2A7E"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw() {
    context.fillStyle = this.color;
    context.shadowColor = this.color;
    context.shadowBlur = 150;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }

  move() {
    if (this.x > canvas.width - this.radius) {
      this.velocity.x = -this.speedX;
    }
    if (this.y > canvas.height - this.radius) {
      this.velocity.y = -this.speedY;
    }
    if (this.x < 0 + this.radius) {
      this.velocity.x = this.speedX;
    }
    if (this.y < 0 + this.radius) {
      this.velocity.y = this.speedY;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
