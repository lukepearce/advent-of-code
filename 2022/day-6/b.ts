console.log("Advent of code - Day 6");

const text = await Deno.readTextFile("./2022/day-6/input.txt");

// console.log(text);

// 14 characters

// look for the first fourteen characters that are all different

const letters = text.split("");

let startIndex = 0;
let endIndex = 14;

for (let index = 0; index < letters.length; index++) {
  const fourteenLetters: string[] = letters.slice(startIndex, endIndex);

  const hasDuplicates = fourteenLetters.filter(letter => {
    const repeatedLetters = fourteenLetters.filter(innerLetter => innerLetter === letter);
    
    // If the letter is in the array more than once
    return repeatedLetters.length > 1;
  }).length > 1;

  if (!hasDuplicates) {
    console.log('first marker after character', endIndex);
    break;
  }

  startIndex++;
  endIndex++;
}