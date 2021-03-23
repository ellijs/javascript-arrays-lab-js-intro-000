var kittens = ["Milo", "Otis", "Garfield"]; //define your array here


function destructivelyAppendKitten(name) {
  kitten.push(name);
  return kitten;
}

fnction destructivelyPrependKitten(name) {
  kitten.unshift(name);
  kitten;
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
  kitten.concat(name);
  return kitten;
}

function prependKitten(name) {
  kitten.slice(0, 0, name);
  return kitten;
}
