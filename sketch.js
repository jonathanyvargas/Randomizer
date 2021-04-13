// dragons I really like
let dragons = [{
  name: "Blue-eyes",
  action: "is summoned!"
}, {
  name: "Red-eyes",
  action: "deals 9,000 damage!"
}, {
  name: "Deathwing",
  action: "shatters the earth!"
}, {
  name: "Bahamut",
  action: "descends!"
}, {
  name: "Shenron",
  action: "tears the sky!"
}, {
  name: "Rayquaza",
  action: "calls for back up!"
}];

let randomIndex;
let animating = false;
let dragonDrawings = [];
let imageCounter = 0;
let button;

function preload(){

 for (let i = 0; i <= 5; i++){
  dragonDrawings[i] = loadImage(`assets/drawing_${i}.png`)

 }

}


function setup() {
  createCanvas(400, 400);
  background(0);
  textSize(34);
  textStyle(BOLD);
  textAlign(CENTER);
  fill(255);
  imageMode(CENTER);
  frameRate(3);

  text("Click to play", 200, 200);

  // console.log(dragonDrawings);
}

function draw() {


  if(animating == true) {
    // clear();
    // ellipse(random(width), random(height), random(50, 200));
    image(dragonDrawings[imageCounter], width/2, height/2);

    if (imageCounter < dragonDrawings.length -1){
    imageCounter++;
  } else {
    imageCounter = 0;
  }
  }

}

function randomizer() {

  animating = false;
  if (dragons[0]) {

  // background(random(200, 255));
  // clear();
  background(0)
  randomIndex = int(random(dragons.length));
  image(random(dragonDrawings), width/2, height/2);
  text(`${dragons[randomIndex].name}`, 200, 180);
  text(`${dragons[randomIndex].action}`, 200, 220);
  dragons.splice(randomIndex, 1);
  } else {
  // background(random(200, 255));
  background(0)
  text("GAME OVER", 200, 200);

  var button = createButton ("Click to restart");
  button.mousePressed(refresh)
  button.style("padding", "20px")
  button.style("background-color", "#000000")
  button.style("color: white")
}

function refresh(){
  window.location.reload("refresh")

}

}

function mousePressed() {
animating = true;
setTimeout(randomizer, 2000);


}
