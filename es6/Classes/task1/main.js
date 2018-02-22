class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(point) {
        let newPoint = new Point(point.x + this.x, point.y + this.y);
        return newPoint;
    }
}
console.log(new Point(1, 2).plus(new Point(2, 1)));
