function asd(start, end, step) {
    var mas = [];
    while (step > 0 ? end >= start : end <= start) {
        mas.push(start);
        start += step;
    };
    return console.log(mas);
}
asd(1, 10, 2);
asd('a','z',2);