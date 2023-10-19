package main

import (
	"fmt"
	"log"
	"strconv"
	"strings"
)

func getInput() string {
	return `forward 5
	down 5
	forward 8
	up 3
	down 8
	forward 2`;
}

type Point struct {
	x int
	y int
}

func parseLine (line string) Point {
	parts := strings.Split(line, " ")
	amount, err := strconv.Atoi(parts[1])
	if err != nil {
		log.Fatal("this is not a number")
	}
	direction := parts[0]

	if direction == "forward" {
		return Point {
			x: amount,
			y: 0,
		}
	} else if direction == "up" {
		return Point {
			x: 0,
			y: -amount,
		}
	} 
		return Point {
			x: 0,
			y: amount,
		}
}

func main() {
	input := getInput()
	lines := strings.Split(input, "\n")
	
	position := Point {
		x: 0,
		y: 0,
	}

	for _, line := range lines {
		amount := parseLine(line)
		position.x += amount.x
		position.y += amount.y
	}

	fmt.Printf("point: %v\n", position)
}