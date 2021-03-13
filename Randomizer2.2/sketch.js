//feelings are feelings and nouns are nouns but nouns have adjectives so beeeeeee careful
//I did not include splice into this because these arrays are pretty short, but the functions are commented out.
let feelings = ["happy", "sad", "furious", "depressed", "hungover", "Inevitable", "fiery"];

//name, adjective
let nouns = [{
  name: "dog",
  adjective: "schitzoid"
}, {
  name: "tree",
  adjective: "tall"
}, {
  name: "building",
  adjective: "wide"
}, {
  name: "Timothy",
  adjective: "stupid"
}, {
  name: "can",
  adjective: "tin"
}, {
  name: "2014 Scion TC with italian leather seats",
  adjective: "perfect"
}, {
  name: "devil",
  adjective: "evil"
}, {
  name: "fireball",
  adjective: "dumb"
}];
let verbs = ["died.", "laughed.", "cried.", "smiled.", "became sentient.", "took over france.", "transcended this plane of existence.", "screamed"];

let randomFeelings;
let randomNouns;
let randomNouns2;
let randomVerbs;
let animation = false;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(18);
  changeFontColor();
  noStroke();
}

function draw() {
 if (animation == true) {
   fill(random(255),random(255),random(255));
   circle(random(width), random(height), random(50,200));
 }
}

function randomizer() {
  animation = false;
  fill(0);
  if (feelings[0]) {
    background(220);
    randomFeelings = int(random(feelings.length));
    randomNouns = int(random(nouns.length));
    randomNouns2 = int(random(nouns.length));
    randomVerbs = int(random(verbs.length));
    text(`The ${feelings[randomFeelings]}`, 50,50);
    text(nouns[randomNouns].adjective, 50, 70);
    text(nouns[randomNouns2].name, 50, 90);
    text(verbs[randomVerbs], 100 ,110);

   // feelings.splice(randomFeelings, 1);
    //nouns.splice(randomNouns, 1);
    //verbs.splice(randomVerbs, 1);
  } else {
    background(202);
    text("NO MORE", 50, 50);
  }
}

function mousePressed() {
  animation = true;
  setTimeout(randomizer, 750);
}

function changeFontColor() {
  circle(200, 200, 100),
    text("Click For random", 130, 120);
}