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

const pairsWithOverlap = splitPairsAsTwoNumbers.filter((pair) => {
  const [firstElf, secondElf] = pair;

  const firstElfRange: number[] = [];
  for (let i = firstElf[0]; i <= firstElf[1]; i++) {
    firstElfRange.push(i);
  }

  const secondElfRange: number[] = [];
  for (let i = secondElf[0]; i <= secondElf[1]; i++) {
    secondElfRange.push(i);
  }

  if (firstElfRange.filter(number => secondElfRange.includes(number)).length) {
    return true;
  }

  return false;
})

console.log(pairsWithOverlap.length)