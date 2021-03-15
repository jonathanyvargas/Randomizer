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

function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {

}

function mousePressed() {
  background(random(200, 255));

  randomIndex = int(random(dragons.length));
  text(dragons[randomIndex].name, 50, 50);
  dragons.splice(randomIndex,1);


}
