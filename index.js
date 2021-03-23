var kittens = ["Milo", "Otis", "Garfield"]; //define your array here


function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kitten;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kitten;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kitten;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kitten;
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  kittens.slice(0, 0, name);
}
