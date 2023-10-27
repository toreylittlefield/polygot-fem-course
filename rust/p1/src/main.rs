fn get_input() -> &'static str {
	return "forward 5
	down 5
	forward 8
	up 3
	down 8
	forward 2";
}

#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn parse_line(line: &'static str) -> Point {
    let (direction, amount) = line.split_once(" ").expect("must contain a space");
    let amount: i32 = str::parse::<i32>(amount).expect("second argument must be an integer");

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

fn main() {
    let result = get_input().lines().map(parse_line).fold(Point {x: 0, y: 0}, | mut acc, point| {
        acc.x += point.x;
        acc.y += point.y;
        return acc;
    });

    println!("{:?}", result);
}
