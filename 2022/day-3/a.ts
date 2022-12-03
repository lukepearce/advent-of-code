console.log("Advent of code - Day 3");

const text = await Deno.readTextFile("./2022/day-3/input.txt");

const rucksacks = text.split("\n");

const splitRucksacks = rucksacks.map((rucksack) => {
  return [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2, rucksack.length),
  ]
});

console.log(splitRucksacks);

const doubledUpItems = splitRucksacks.map((rucksack) => {
  const firstCompartment = rucksack[0].split("");
  const secondCompartment = rucksack[1].split("");

  // the use of set means the item will only be added once (if it occurs multiple times in each compartment)
  return [...new Set(firstCompartment.filter(item => secondCompartment.includes(item)))];
}).flat();

console.log(doubledUpItems)

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const getPriority = (letter: string): number => {
  const index = alphabet.indexOf(letter);

  // Uppercase letters are worth an extra 26 points compared to lowercase
  if (index === -1) {
    return 26 + alphabet.indexOf(letter.toLowerCase()) + 1;
  }

  return index + 1;
}

const priorities = doubledUpItems.map((item) => {
  return getPriority(item);
});

const sumOfPriorities = priorities.reduce((acc, priority) => acc + priority, 0);

console.log(sumOfPriorities)

