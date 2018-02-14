function audit (a) {
    return (typeof a == "object") && (a instanceof Array);
}

console.log(audit('w3resource'));
console.log(audit(['add', 'asf', 'afaf','ffasfa']));
console.log(audit([0, 11, 5, 6]));
console.log(audit([12]));
console.log(audit(13));