function* odds() {
    for (var i = 0;;i++) { // 無窮迴圈
        if (i % 2 === 1) {
            yield i;
        }
    }
}

var value = odds();

for (var i = 0; i < 100; i++) {
    console.log(value.next().value);
}
