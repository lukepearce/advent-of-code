console.log("Advent of code - Day 2");

const text = await Deno.readTextFile("./2022/day-2/input.txt");

const rounds = text.split("\n");

type Result = 'Win' | 'Lose' | 'Draw';
type Shape = 'Rock' | 'Paper' | 'Scissors';

interface ShapeResultMatrix {
  shape: Shape;
  values: string[];
  beats: Shape;
  loses: Shape;
}

function getScoreForShape(shape: Shape): number {
  switch (shape) {
    case 'Rock':
      return 1;

    case 'Paper':
      return 2;

    case 'Scissors':
      return 3;

    default:
      return 0;
  }
}

function getShapeForResult(theirShape: ShapeResultMatrix, result: Result): Shape {
  if (result === 'Win') {
    return theirShape.loses;
  }

  if (result === 'Lose') {
    return theirShape.beats;
  }

  return theirShape.shape;
}

function getResultScore(result: Result): number {
  switch (result) {
    case 'Win':
      return 6;

    case 'Draw':
      return 3;

    default:
      return 0;
  }
}

function getResult(value: string): Result {
  switch (value) {
    case 'X':
      return 'Lose'
    
    case 'Y':
      return 'Draw'
      
    default:
      return 'Win'
  }
}

const shapeMatrix: ShapeResultMatrix[] = [
  {
    shape: 'Rock',
    values: ['A', 'X'],
    beats: 'Scissors',
    loses: 'Paper'
  },
  {
    shape: 'Paper',
    values: ['B', 'Y'],
    beats: 'Rock',
    loses: 'Scissors'
  },
  {
    shape: 'Scissors',
    values: ['C', 'Z'],
    beats: 'Paper',
    loses: 'Rock'
  }
];

const scores: number[] = rounds.map((round): number => {
  const values = round.split(" ");

  const theirShape = shapeMatrix.find(shape => shape.values.includes(values[0]));

  const requiredResult = getResult(values[1]);

  if (!theirShape) return 0;

  const myShape = getShapeForResult(theirShape, requiredResult);

  const shapeScore = getScoreForShape(myShape);

  const resultScore = getResultScore(requiredResult);

  return shapeScore + resultScore;
});

const scoresTotal = scores.reduce((acc, score) => acc + score, 0);

console.log('scoresTotal', scoresTotal);