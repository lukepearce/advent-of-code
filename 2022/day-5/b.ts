console.log("Advent of code - Day 5");

const text = await Deno.readTextFile("./2022/day-5/input.txt");

const split = text.split("\n\n");

const stacks = split[0];

const allStacks = stacks.split("\n");

const allHorizontalStacks: string[][] = [];

for (let index = 0; index < allStacks.length; index++) {
  const stack = allStacks[index];

  const splitStack = stack.split(" ");

  const horizontalStack: string[] = [];
  let skippedSpaces = 1;
  for (let index = 0; index < splitStack.length; index++) {
    const element = splitStack[index];

    if (element != "") {
      horizontalStack.push(element);
      continue;
    }

    if (skippedSpaces < 3) {
      skippedSpaces++;
      continue;
    }

    skippedSpaces = 0;
    horizontalStack.push(element);
  }

  allHorizontalStacks.push(horizontalStack);
}

allHorizontalStacks.pop();

const verticalStacks: string[][] = [];

for (let index = 0; index < allHorizontalStacks.length; index++) {
  const horizontalStack = allHorizontalStacks[index];
  
  
  for (let index = 0; index < horizontalStack.length; index++) {
    const element = horizontalStack[index];

    if (element === "") {
      continue;
    }

    if (!verticalStacks[index]) {
      verticalStacks[index] = [];
    }

    verticalStacks[index].push(element);
  }
}

//console.log(verticalStacks);

const instructions = split[1].split("\n");

//console.log(instructions);

for (let index = 0; index < instructions.length; index++) {
  const instruction = instructions[index];

  const splitInstruction = instruction.split(" ");

  const amountOfCratesToMove = parseInt(splitInstruction[1]);
  const stackIndexToMoveFrom = parseInt(splitInstruction[3]);
  const stackIndexToMoveTo = parseInt(splitInstruction[5]);

  const cratesToMove = verticalStacks[stackIndexToMoveFrom - 1].splice(0, amountOfCratesToMove);
  const stackToMoveTo = verticalStacks[stackIndexToMoveTo - 1];

  stackToMoveTo.unshift(...cratesToMove)
}

//console.log(verticalStacks);

const topCrateInEachStack = verticalStacks.map(stack => {
  return stack[0]?.split("")[1];
});

console.log('topCrateInEachStack', topCrateInEachStack.join(""));
