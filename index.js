var kittens = ["Milo", "Otis", "Garfield"]; //define your array here


function destructivelyAppendKitten(name) {
  return kittens.push(name);

}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
