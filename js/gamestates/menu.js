/**
 * @file menu.js
 * @description Title screen and "Start" button.
 */

var startButton = new GameObject();
startButton.width = 200;
startButton.hitBoxWidth = 800;

var menuBackground = new GameObject();

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: MENU BACKGROUND IMAGE
   Replace with your own JPG/PNG; keep aspect ratio close to canvas.
   ===================================================================== */
menuBackground.img.src = "images/mrt.jpg";
menuBackground.width = canvas.width;
menuBackground.height = canvas.height;

gameStates[`menu`] = function () {
  // Hover & click
  if (startButton.overlap(mouse)) {
    if (mouse.pressed) { gameStates.changeState(`level1`); }
    startButton.color = `yellow`;
  } else {
    startButton.color = `red`;
  }

  menuBackground.drawStaticImage();
  startButton.render();
};