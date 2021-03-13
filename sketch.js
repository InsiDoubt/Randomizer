//feelings are feelings and nouns are nouns but nouns have adjectives so beeeeeee careful
//I did not include splice into this because these arrays are pretty short, but the functions are commented out.

let feelings = ["Happy", "Sad", "Furious", "Depressed", "Hungover", "Inevitable", "Fiery"];



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
  }
];
let randomFeelings;
let randomNouns;
let randomNouns2;

function setup() {
  createCanvas(400, 400);
  background (220);
}

function draw() {
}

  function mousePressed() {
  background(220);
  randomFeelings = int(random(feelings.length));
  randomNouns = int(random(nouns.length));
  randomNouns2 = int(random(nouns.length))

  text(feelings[randomFeelings], 50, 50);
  text(nouns[randomNouns].adjective, 50, 70);
  text(nouns[randomNouns2].name, 50, 90);
    
  //feelings.splice(randomFeelings, 1)
  //nouns.splice(randomNouns, 1);

}