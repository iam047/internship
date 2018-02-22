class Point {
    constructor(x, y) {
        this.x = x, this.y = y
    }
    add(other) {
        return new Point(this.x + other.x, this.y + other.y)
    }
}

const fakePoint = Object.create(Point.prototype);
console.log(typeof fakePoint);
console.log(fakePoint instanceof Point);
