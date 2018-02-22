const callbacks = [];
for (let i = 0; i < 10; i++) {
    callbacks.push(function() { console.log(i) })
}

callbacks[2]();
callbacks[3]();
callbacks[1]();
callbacks[4]();
callbacks[5]();
callbacks[0]();

