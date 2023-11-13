// https://adventofcode.com/2020/day/3
// We need to travel 3 right and 1 down and count how many trees we hit.
// # is a tree, . is snow.
const TREE_INPUT: &str = "..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#";

fn tree_to_map(tree_input: &str) -> Vec<&str> {
    let map = tree_input
    .lines()
    .collect::<Vec<&str>>();
    return map;
}

fn main() {
    let tree_map = tree_to_map(TREE_INPUT);
    let tree_count = tree_map.iter().enumerate().filter(|&(idx, line)| {
        return line.chars().nth(idx * 3 % line.len()) == Some('#');
    }).count();
    println!("{}", tree_count)
}