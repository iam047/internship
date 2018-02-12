function asd(x) {
    if ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20)) {
        console.log(true, x);
    }else {
        console.log(false, x);
    }

}

asd(10);
asd(90);
asd(100);
asd(300);
