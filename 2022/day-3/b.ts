console.log("Advent of code - Day 3");

const text = await Deno.readTextFile("./2022/day-3/input.txt");

const rucksacks = text.split("\n");

const groups = [];
// sometimes the non-functional way is waaaay easier to reason about
for (let i = 0; i < rucksacks.length; i += 3) {
  groups.push([...rucksacks].slice(i, i + 3));
}

const itemsInEveryRucksack = groups.map((rucksacks) => {
  const [ firstRucksack, secondRucksack, thirdRucksack ] = rucksacks.map(rucksack => rucksack.split(""));

  // the use of set means the item will only be added once (if it occurs multiple times in each compartment)
  return [...new Set(
    firstRucksack.filter(item => secondRucksack.includes(item) && thirdRucksack.includes(item))
  )];
}).flat();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const getPriority = (letter: string): number => {
  const index = alphabet.indexOf(letter);

  // Uppercase letters are worth an extra 26 points compared to lowercase
  if (index === -1) {
    return 26 + alphabet.indexOf(letter.toLowerCase()) + 1;
  }

  return index + 1;
}

const priorities = itemsInEveryRucksack.map((item) => {
  return getPriority(item);
});

const sumOfPriorities = priorities.reduce((acc, priority) => acc + priority, 0);

console.log(sumOfPriorities)

