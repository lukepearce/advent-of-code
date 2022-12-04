console.log("Advent of code - Day 4");

const text = await Deno.readTextFile("./2022/day-4/input.txt");

//console.log(text);

const pairs = text.split("\n");

//console.log(pairs)

const splitPairs = pairs.map(pair => pair.split(","));

//console.log(splitPairs)

const splitPairsAsTwoNumbers = splitPairs.map((pair) => {
  return pair
    .map(p => p.split("-"))
    .map(p => p.map(p => parseInt(p)))
});

// console.log(splitPairsAsTwoNumbers)

const pairsWithOverlap = splitPairsAsTwoNumbers.filter((pair) => {
  const [firstElf, secondElf] = pair;
  const [firstElfStart, firstElfEnd] = firstElf;
  const [secondElfStart, secondElfEnd] = secondElf;

  if (firstElfStart >= secondElfStart && firstElfEnd <= secondElfEnd) {
    return true;
  }

  if (secondElfStart >= firstElfStart && secondElfEnd <= firstElfEnd) {
    return true;
  }

  return false;
})

console.log(pairsWithOverlap.length)