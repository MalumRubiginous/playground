function normalize (input) {
    return parseInt(input, 10);
};

function isValidation (input) {
    const num = normalize(input);
    return num && num > 1;
};

// 用 100000 筆的話時間大概要 245ms 上下
function getPrimeNumbers (input) {
    const num = normalize(input);
    if (!isValidation(num)) {
        return false;
    }

    let primeNums = [];
    for (let i = 2; i <= num; i ++) {
        if (primeNums.every(pNum => i % pNum !== 0)) {
            primeNums.push(i);
        }
    }
    return primeNums;
};

// 用 100000 筆的話時間大概要 210ms 上下
function getPrimeNumbers1 (input) {
    const num = normalize(input);
    if (!isValidation(num)) {
        return false;
    }

    let primeNums = [];
    for (let i = 2; i <= num; i ++) {
        let flag = true;
        for (let j = 0, numLen = primeNums.length; j < numLen; j++) {
            if (i % primeNums[j] === 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            primeNums.push(i);
        }
    }
    return primeNums;
};

function isPrimeNumber (input) {
    const num = normalize(input);
    if (!isValidation(num)) {
        return false;
    }

    const primeNums = getPrimeNumbers(num - 1);
    return primeNums.every(pNum => num % pNum !== 0);
};



