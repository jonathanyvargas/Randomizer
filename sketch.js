// dragons I really like
let dragons = [{
  name: "blue-eyes",
  action: "is summoned"
}, {
  name: "red-eyes",
  action: "deals 9,000 damage"
}, {
  name: "deathwing",
  action: "shatters the earth"
}, {
  name: "bahamut",
  action: "descends"
}, {
  name: "shenron",
  action: "tears the sky"
}, {
  name: "rayquaza",
  action: "calls for back up"
}];

let randomIndex;
let animating = false;


function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(34);

  text("click to play", 50, 50);
}

function draw() {

  if(animating == true) {
    ellipse(random(width), random(height), random(50, 200));
  }

}

function randomizer() {

  animating = false;
  if (dragons[0]) {

  background(random(200, 255));

  randomIndex = int(random(dragons.length));
  text(`${dragons[randomIndex].name}
   ${dragons[randomIndex].action}`, 50, 50);
  dragons.splice(randomIndex,1);
  } else {
  background(random(200, 255));
  text("GAME OVER", 50, 50);
}


}

function mousePressed() {
animating = true;
setTimeout(randomizer, 2000);

}
