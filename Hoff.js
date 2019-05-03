class Hoff {
  radius = 350;
  speedY = Math.round(Math.random() * (25 - 2) + 2);
  speedX = Math.round(Math.random() * (25 - 2) + 2);
  velocity = {
    x: Math.random() > 0.5 ? this.speedX : -this.speedX,
    y: Math.random() > 0.5 ? this.speedY : -this.speedY
  };

  constructor(context, x, y, hofftype) {
    this.hofftype = hofftype;
    this.canvas = context.canvas;
    this.context = context;
    this.y = y;
    this.x = x;
  }

  draw(x, y) {
    if (this.hofftype === "hassel") {
      this.radius = 350;
      var myImg = new Image();
      myImg.src = "./hoff.png";
      context.shadowColor = "#ED2A7E";
      context.shadowBlur = 150;
      context.drawImage(myImg, this.x, this.y, this.radius, this.radius);
    } else {
      this.radius = 450;
      var myImg = new Image();
      myImg.src =
        "https://www.ibat.nu/thumbs/1024x768r/2018-10/carlsberg-hof-4.2-33cl-24p-21731-.png";
      context.shadowColor = "#7DDF64";
      context.shadowBlur = 150;
      context.drawImage(myImg, this.x, this.y, this.radius, this.radius);
    }
  }

  move() {
    if (this.x > canvas.width - this.radius) {
      this.velocity.x = -this.speedX;
    }
    if (this.y > canvas.height - this.radius) {
      this.velocity.y = -this.speedY;
    }
    if (this.x < 0) {
      this.velocity.x = this.speedX;
    }
    if (this.y < 0) {
      this.velocity.y = this.speedY;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
