package main

import (
	"fmt"
	"strings"
)

// https://adventofcode.com/2020/day/3
// We need to travel 3 right and 1 down and count how many trees we hit.
// # is a tree, . is snow.

const treeInput string = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

const TREE = "#"

// creates a 2d array of the tree input

func treeToMap(treeInput string) [][]string {
	lines := strings.Split(treeInput, "\n")
	numRows := len(lines)

	treeMap := make([][]string, 0, numRows)
	for _, line := range lines {
		row := strings.Split(line, "")
		treeMap = append(treeMap, row)
	}
	return treeMap
}

func main() {
	treeMap := treeToMap(treeInput)

	colLen := len(treeMap[0])

	numberTrees := 0

	// loop over the rows and check if we hit a tree
	for index, row := range treeMap {
		col := index * 3 % colLen

		// if we hit a tree, increment the number of trees
		if row[col] == TREE {
			numberTrees++
		}
	}

	fmt.Printf("Number of trees %v\n", numberTrees)
}
