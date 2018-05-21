// 实际为编辑距离的算法问题，没能做出来，参考了网上大牛的动态规划方案（https://www.dreamxu.com/books/dsa/dp/edit-distance.html）
function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
    let steps = [];
    // 计算从a => b的最少操作数
    let leastStep = function (a, b) {
        let aLength = a.length;
        let bLength = b.length;
        let distance = [];
        distance[0] = [];
        // 构造从0开始的二维数组
        for (let i = 0; i <= bLength; i++) {
            distance[0].push(i);
        }
        for (let j = 0; j <= aLength; j++) {
            if (distance[j]) {
                distance[j][0] = j;
            } else {
                distance[j] = [];
                distance[j][0] = j;
            }
        }
        for (let i = 1; i <= aLength; i++) {
            for (let j = 1; j <= bLength; j++) {
                if (a[i - 1] === b[j - 1]) {
                    distance[i][j] = distance[i - 1][j - 1];
                } else {
                    let add = distance[i - 1][j] + 1;
                    let del = distance[i][j - 1] + 1;
                    let replace = distance[i - 1][j - 1] + 1;
                    distance[i][j] = Math.min(add, del, replace);
                }
            }
        }
        return distance[aLength][bLength];
    }
    for (let i = 0; i < this.words.length; i++) {
        steps.push(leastStep(this.words[i], term));
    }
    return this.words[steps.indexOf(Math.min(...steps))];
}

const test = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
test.findMostSimilar('mel');