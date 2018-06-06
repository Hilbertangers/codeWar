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
encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3);

function decodeRailFenceCipher(string, n) {
    let encodeArr = [];
    // 确定每行数量，分割encode
    for (let i = n; i > 0; i--) {
        
    }
}