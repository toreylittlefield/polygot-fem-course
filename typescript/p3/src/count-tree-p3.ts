// https://adventofcode.com/2020/day/3
// We need to travel 3 right and 1 down and count how many trees we hit.
// # is a tree, . is snow.

const treeInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
` as const;

const TREE_OR_SNOW = {
  TREE: '#',
  SNOW: '.',
} as const;

// creates a 2d array of the tree input
const treeToMap = treeInput.split('\n').map((row) => row.split(''));

// the number items in each row (columns)
const colLength = treeToMap[0]?.length ?? 0;

if (!colLength) {
  throw new Error('No columns found');
}

// the number of rows
const rowLength = treeToMap.length;

// the number of trees we hit
let treeCount = 0;

treeToMap.forEach((row, index) => {
  // the current column we are on
  // the mod is to handle the repeating pattern and wrap around the row array
  const col = (index * 3) % colLength;

  // if we hit a tree, increment the tree count
  if (row[col] === TREE_OR_SNOW.TREE) {
    treeCount++;
  }
  console.log({ row, index, col, colLength, rowLength, mod: index * 3, treeCount, piece: row[col] });
});

console.log({ treeCount });
