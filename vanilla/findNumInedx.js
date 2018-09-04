function findNumInedx (target, numbers) {
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            result.push(i);
        }
    }

    return result;
}

function* findNumIndexByGenerator (target, numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            yield i
        }
    }
}

var numbers = [1, 2, 4, 5, 2, 3, 12, 3, 5, 7, 1],
    target = 3;

// print
var result1 = findNumInedx(target, numbers);
result1.forEach((n) => {
    console.log(n);
})

var result2 = findNumIndexByGenerator(target, numbers);
do {
    var obj = result2.next();
    console.log(obj.value);
} while (!obj.done) {}

// 當資料很大時 result1 會需要存一大包資料，
// 但 result2 只需要存 i 和他目前的狀態
