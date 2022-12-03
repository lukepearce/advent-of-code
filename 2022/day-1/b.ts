console.log("Advent of code - Day 1");

const text = await Deno.readTextFile("./2022/day-1/input.txt");

console.log(text);

const elves = text.split("\n\n");

console.log('elves', elves[0]);

const elvesCalories = elves
  .map(elv => elv.split("\n"))
  .map(elv => elv.map(elv => parseInt(elv)));

const elvesValuesAddedUp = elvesCalories.map((elf) => {
  return elf.reduce((acc, calories) => {
    return acc + calories;
  }, 0);
});

console.log(elvesValuesAddedUp[0]);

const elfWithMostCalories = elvesValuesAddedUp.sort((a, b) => b - a);

console.log(elfWithMostCalories[0]);

const topThreeTotal = elfWithMostCalories[0] + elfWithMostCalories[1] + elfWithMostCalories[2];

console.log(topThreeTotal);
