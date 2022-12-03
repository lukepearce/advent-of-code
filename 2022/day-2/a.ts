console.log("Advent of code - Day 2");

const text = await Deno.readTextFile("./2022/day-2/input.txt");

const rounds = text.split("\n");

type Result = 'Win' | 'Lose' | 'Draw';
type Shape = 'Rock' | 'Paper' | 'Scissors';

interface ShapeResultMatrix {
  shape: Shape;
  values: string[];
  beats: Shape;
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

function getResult(myShape: ShapeResultMatrix, theirShape: ShapeResultMatrix): Result  {
  if (theirShape.shape === myShape.shape) {
    return 'Draw';
  }

  if (theirShape.shape === myShape.beats) {
    return 'Win';
  }

  return 'Lose';
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

const shapeMatrix: ShapeResultMatrix[] = [
  {
    shape: 'Rock',
    values: ['A', 'X'],
    beats: 'Scissors'
  },
  {
    shape: 'Paper',
    values: ['B', 'Y'],
    beats: 'Rock'
  },
  {
    shape: 'Scissors',
    values: ['C', 'Z'],
    beats: 'Paper'
  }
];

const scores: number[] = rounds.map((round): number => {
  const values = round.split(" ");

  const theirShape = shapeMatrix.find(shape => shape.values.includes(values[0]));
  const myShape = shapeMatrix.find(shape => shape.values.includes(values[1]));

  if (!myShape || !theirShape) return 0;
  
  const shapeScore = getScoreForShape(myShape.shape);
  
  const result = getResult(myShape, theirShape);

  const resultScore = getResultScore(result);

  return shapeScore + resultScore;
});

const scoresTotal = scores.reduce((acc, score) => acc + score, 0);

console.log('scoresTotal', scoresTotal);