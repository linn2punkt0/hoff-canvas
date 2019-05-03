"use strict";

// Create a new <canvas> element and append it to the <body>.
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// Fetch the 2D context from the <canvas> element.
const context = canvas.getContext("2d");

// Set the width and height of the canvas.
canvas.height = window.innerHeight * 2;
canvas.width = window.innerWidth * 2;

// Set the width and height with CSS to scale down the <canvas> element. We need
// to do this in order to add retina support.
canvas.style.width = `${window.innerWidth}px`;
canvas.style.height = `${window.innerHeight}px`;

const balls = [];

for (let i = 0; i < 15; i++) {
  const ball = new Ball(context, canvas.width / 2, canvas.height / 2);
  balls.push(ball);
}

const hoffs = [
  new Hoff(context, canvas.width / 2, canvas.height / 2, "hassel"),
  new Hoff(context, canvas.width / 2, canvas.height / 2, "beer"),
  new Hoff(context, canvas.width / 2, canvas.height / 2, "beer")
];

(function animate() {
  context.fillStyle = "#000f08";
  context.fillRect(0, 0, canvas.width, canvas.height);

  hoffs.forEach(hoff => {
    hoff.move();
    hoff.draw();
  });

  balls.forEach(ball => {
    ball.move();
    ball.draw();
  });

  //  Loop the animation with request animation frame.
  window.requestAnimationFrame(animate);
})();

// Set the default positioning of our blue rectangle.
// let width = 100;
// let height = 100;
// let x = canvas.width / 2 - width / 2;
// let y = canvas.height / 2 - height / 2;
// let velocity = {
//   x: 10,
//   y: 0,
// };

// Lets start the animation with an iife.
// (function animate() {
// Set the fillStyle for the context.
//   context.fillStyle = '#ecf0f1';

// Add a new rectangle to the canvas and give it the size of the canvas.
//   context.fillRect(0, 0, canvas.width, canvas.height);

// Since we updated the fillStyle property above we need to change it in order
// to use another color for our next shape.
//   context.fillStyle = '#2772db';

// Update the x and y cordinates based on the velocity.
//   x += velocity.x;
//   y += velocity.y;

// Check if the rectangle collides the right side.
//   if (x + width > canvas.width) { velocity.x = -10; }

// Check if the rectangle collides the left side.
//   if (x <= 0) { velocity.x = 10; }

// Add a second smaller rectangle in the middle of the canvas.
//   context.fillRect(x, y, width, height);

// Loop the animation with request animation frame.
//   window.requestAnimationFrame(animate);
// })();
