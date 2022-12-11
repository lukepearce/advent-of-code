console.log("Advent of code - Day 6");

const text = await Deno.readTextFile("./2022/day-6/input.txt");

// console.log(text);

// 4 characters

// look for the first four characters that are all different

const letters = text.split("");

// abcb
// bcbc
// cbcd
// bcdc

let startIndex = 0;
let endIndex = 4;

for (let index = 0; index < letters.length; index++) {
  //const letter = letters[index];
  //console.log(letter);

  const fourLetters: string[] = letters.slice(startIndex, endIndex);

  if (fourLetters.length < 4) continue;

  console.log(fourLetters);
  // abcb

  const hasDuplicates = fourLetters.filter(letter => {
    return fourLetters.filter(innerLetter => innerLetter === letter).length > 1;
  }).length > 1;

  console.log(hasDuplicates);

  if (!hasDuplicates) {
    console.log('first marker after character', endIndex);
    break;
  }

  startIndex++;
  endIndex++;
}




// const duplicateLetters: string[] = letters.filter(letter => {
//   return letters.filter());

//console.log(duplicateLetters);