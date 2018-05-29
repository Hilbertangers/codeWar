// 原理C(m, n) = C(m - 1, n - 1) + C(m - 1, n);
// 当 m = n || m = 0 || n = 0 返回 1;
function pascalsTriangle(n) {
    if (n < 1) return;
    let arr = [];
    // 坐标值函数
    let getPoint = (m, n) => {
        if (m < n) { // 超出边界为0
            return 0
        } else if (m === n || m === 0 || n === 0) { // 边界为1
            return 1;
        } else { // 三角内部
            return getPoint(m - 1, n - 1) + getPoint(m - 1, n);
        }
    }
    let getRow = m => {
        let row = [];
        for(let i = 0; i<m;i++) {
            row.push(getPoint(m - 1, i));
        }
        return row;
    }
    for (let i = 1; i <= n; i++) {
        getRow(i).forEach(item => {
            arr.push(item);
        })
    }
    return arr;
}
pascalsTriangle(5);