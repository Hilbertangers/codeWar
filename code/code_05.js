// 原理C(m, n) = C(m - 1, n - 1) + C(m - 1, n);
// 当 m = n || m = 0 || n = 0 返回 1;
function pascalsTriangle(n) {
    if (n < 1) return;
    let arr = [];
    let getPoint = (m, n) => {
        if (m === n || m === 0 || n === 0) {
            return 1;
        } else {
            return getPoint(m - 1, n - 1) + getPoint(m - 1, n);
        }
    }
    // error
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            console.log(i, j);
            arr.push(getPoint(j, i));
        }
    }
    console.log(arr);
    return arr;
}
pascalsTriangle(4);