// My
function pathFinder(maze) {
    let mazeSplit = maze.split('\n');
    let n = mazeSplit[0].length;
    let nextStep = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let mazeMap = [];
    let canReach = false;
    // 赋值迷宫数组
    // 起点：[0, 0, false, false],第三位标记是否是墙,第四位标记是否走过
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            mazeMap.push([i, j, false, false]);
        }
    }
    // 找出墙坐标
    for (let i = 0; i < mazeSplit.length; i++) {
        for (let j = 0; j < n; j++) {
            if (mazeSplit[i][j] === 'W') {
                mazeMap[i * n + j][2] = true;
            }
        }
    }
    // 寻路函数，递归
    function search(start) {
        for (let i = 0; i < nextStep.length; i++) {
            let next = [start[0] + nextStep[i][0], start[1] + nextStep[i][1]];
            let nextX = next[0];
            let nextY = next[1];
            if (nextX < 0 || nextY < 0 || nextX > n - 1 || nextY > n - 1) { // 遇边缘墙壁
                continue;
            } else if (mazeMap[nextX * n + nextY][3] === true) { // 重复走过的路
                continue;
            } else if (mazeMap[nextX * n + nextY][2] === true) { // 遇障碍墙
                continue;
            } else if (nextX === n - 1 && nextY === n - 1) { // 到达终点
                canReach = true;
            } else {
                // 该步走完进行下一步递归，并标记当前坐标为走过的路
                mazeMap[nextX * n + nextY][3] = true;
                search(next);
            }
        }
    }
    search([0, 0]);
    return canReach;
}
pathFinder(`.W...W
...WW.
W...WW
..W...`)


// which solution i like best from netfriends
// no time to choose,next week
