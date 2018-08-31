/**
 * 
 * @param {number[][]} recs
 * @returns {number}
 * algorithm 通过x=a线段将组合后的图形分割成多个矩形相加
 */
// just god know
function calculate (recs) {
    let rectGroup = []
    let xGroup = []
    let xCalculateGroup = []
    let result = 0
    recs.forEach(item => {
        rectGroup.push([[item[0], item[2]], [item[1], item[3]]])
        xGroup.push(item[1], item[3])
    })
    xGroup = [...new Set(xGroup)].sort((a, b) => a - b)
    xGroup.forEach((item, index) => {
        if (index !== (xGroup.length - 1)) {
            xCalculateGroup.push([item, xGroup[index + 1]])
        }
    })
    xCalculateGroup.forEach(item => {
        let needCount
        let height = item[1] - item[0]
        let width = 0
        needCount = rectGroup.filter(t => intervalInclude(item, t[1]) ? true : false)
        if (needCount.length === 0) {
            width = 0;
        } else if (needCount.length === 1) {
            width = needCount[0][0][1] - needCount[0][0][0]
        } else {
            let xInterval
            let middle = []
            needCount.forEach((t, index) => {
                middle.push(t[0])
            })
            xInterval = mergeIntervals(middle)
            xInterval.forEach(w => {
                width += (w[1] - w[0])
            })
        }
        result += height * width
    })
    return result
}

function intervalInclude (interval, include) {
    if (interval[1] <= include[0] || interval[0] >= include[1]) {
        return false
    } else {
        let sortArr = [...interval, ...include].sort((a, b) => a - b)
        return [sortArr[0], sortArr[sortArr.length - 1]]
    }
}
/**
 * 
 * @param {所有区间的集合} arr 
 */
function mergeIntervals (arr) {
    let sortArr = arr.sort((a, b) => a[0] - b[0])
    let result = [], middle = sortArr[0]
    sortArr.forEach((item, index) => {
        if (index === sortArr.length - 1) {
            return;
        }
        if (intervalInclude(middle, sortArr[index + 1])) {
            middle = intervalInclude(middle, sortArr[index + 1])
        } else {
            result.push(middle)
            middle = sortArr[index + 1]
        }
    })
    result.push(middle)
    return result
}
// mergeIntervals([[15,18],[1,3],[8,10],[2,6]])

calculate([[ 1, 1, 2, 2 ],
    [ 1, 4, 2, 7 ],
    [ 1, 4, 2, 6 ],
    [ 1, 4, 4, 5 ],
    [ 2, 5, 6, 7 ],
    [ 4, 3, 7, 6 ] ])