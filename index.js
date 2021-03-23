var kittens = ["Milo", "Otis", "Garfield"]; //define your array here


function destructivelyAppendKitten(name) {
  kitten.push(name);
  return kitten;
}

function destructivelyPrependKitten(name) {
  kitten.unshift(name);
  return kitten;
}

function destructivelyRemoveLastKitten() {
  kitten.pop();
  return kitten;
}

function destructivelyRemoveFirstKitten() {
  kitten.shift();
  return kitten;
}

function appendKitten(name) {
  return kitten.concat(name);
}

function prependKitten(name) {
  kitten.slice(0, 0, name);
}
