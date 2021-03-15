// dragons I really like
let dragons = [{
  name: "blue-eyes",
  color: "white"
}, {
  name: "red-eyes",
  color: "black"
}, {
  name: "deathwing",
  color: "black"
}, {
  name: "bahamut",
  color: "black"
}, {
  name: "shenron",
  color: "green"
}, {
  name: "rayquaza",
  color: "green"
}];

let randomIndex;
let counter = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(34);

  text("click to randomize", 50, 50);

  setTimeout(changeBackground, 1000);

}

function draw() {

}

function changeBackground() {
  if (counter <= 5) {
    counter++;
    console.log(counter)
  background(random(255), (random(255), (random(255))
  setTimeout(changeBackground, 1000);
  } else {

  }

}

function mousePressed() {

  if (dragons[0]) {

  background(random(200, 255));

  randomIndex = int(random(dragons.length));
  text(dragons[randomIndex].name, 50, 50);
  dragons.splice(randomIndex,1);
  } else {
  background(random(200, 255));
  text("GAME OVER", 50, 50);
}


}
