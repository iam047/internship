var a=prompt('Введите год:', '');
if ((a % 100 == 0) && (a % 400 != 0)) {
    document.write("Год невисокосный");
} else if (a % 4 == 0) {
    document.write("Год високосный");
} else if (a % 4 != 0) {
    document.write("Год не високосный");
}