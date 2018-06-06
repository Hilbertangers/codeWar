function encodeRailFenceCipher(string, n) {
    let encode = '';
    let encodeArr = [];
    // 字符串分为多个loop
    let loopLength = 2 * n - 2;// loop长度
    let loopNum = Math.floor(string.length / loopLength);// loop数量
    let loopSurplus = string.length % loopLength;// 整除余数
    for (let i = 0; i < n; i++) {
        encodeArr.push([]);
    }
    // 将loop插入数组
    for (let m = 0; m < loopNum; m++) {
        for (let j = 1; j <= loopLength; j++) {
            if (j <= n) {
                // 顺序插入
                encodeArr[j - 1].push(string.slice(m * loopLength + j - 1, m * loopLength + j));
            } else {
                // 倒序插入
                encodeArr[encodeArr.length - 1 - j + n].push(string.slice(m * loopLength + j - 1, m * loopLength + j));
            }
        }
    }
    // 将余数插入数组
    for (let k = 1; k <= loopSurplus; k++) {
        if (k <= n) {
            encodeArr[k - 1].push(string.slice(loopNum * loopLength + k - 1, loopNum * loopLength + k));
        } else {
            encodeArr[encodeArr.length - 1 - k + n].push(string.slice(loopNum * loopLength + k - 1, loopNum * loopLength + k));
        }
    }
    encode = encodeArr.map(item => {
        return item.join('');
    }).join('');
    return encode;
}
// encodeRailFenceCipher('123456789', 6);

function decodeRailFenceCipher(string, n) {
    let str = string;
    let encodeArr = [];
    let decodeArr = [];
    let loopLength = 2 * n - 2;// loop长度
    let loopNum = Math.floor(str.length / loopLength);// loop数量
    let loopSurplus = str.length % loopLength;// 整除余数
    // 确定每行数量，分割encode
    for (let i = 1; i <= n; i++) {
        encodeArr.push(0);
        for (let j = 0; j < loopNum; j++) {
            if (i === 1 || i === n) {
                encodeArr[i - 1] += 1;
            } else {
                encodeArr[i - 1] += 2;
            }
        }
    }
    for (let m = 0; m < loopSurplus; m++) {
        if (m < n) {
            encodeArr[m] += 1;
        } else {
            encodeArr[encodeArr.length - 2 - m + n] += 1;
        }
    }
    encodeArr = encodeArr.map(item => {
        t = str.slice(0, item);
        str = str.slice(item);
        return t;
    });

    // 向解码数组添加数据
    for (let k = 0;k < loopNum;k++) {
        for (let l = 0;l < loopLength;l++) {
            if (l < n) {
                if (l === 0 || l === n-1) {
                    decodeArr.push(encodeArr[l][k]);
                } else {
                    decodeArr.push(encodeArr[l][2 * k]);
                }
            } else {
                decodeArr.push(encodeArr[encodeArr.length - 2 - l + n][2 * k + 1]);
            }
        }
    }
    for (let p = 0;p < loopSurplus;p++) {
        if (p < n) {
            if (p === 0 || p === n-1) {
                decodeArr.push(encodeArr[p][loopNum]);
            } else {
                decodeArr.push(encodeArr[p][2 * loopNum]);
            }
        } else {
            decodeArr.push(encodeArr[encodeArr.length - 2 - p + n][2 * loopNum + 1]);
        }
    }
    return decodeArr.join('');
}
decodeRailFenceCipher(encodeRailFenceCipher('123456789123456789123456789', 8), 8);

// 编码解码函数都写的很丑陋，基本是靠for循环暴力破解