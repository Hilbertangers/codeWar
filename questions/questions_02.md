# <a href="http://www.codewars.com/kata/5765870e190b1472ec0022a2/train/javascript">Q2(4kyu) js迷宫设障问题</a>

## Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked `..` Walls are marked `W.` Start and exit positions are empty in all test cases.

## Sample Tests:
``` js
function testMaze(expected, maze){
  let actual = pathFinder(maze);
  Test.assertEquals(actual, expected, maze);
}

describe("Basic tests", function(){

testMaze(true,
`.W.
.W.
...`);

testMaze(false,
`.W.
.W.
W..`);

testMaze(true,
`......
......
......
......
......
......`);

testMaze(false,
`......
......
......
......
.....W
....W.`);

});
```

## Code
<a href="https://github.com/Hilbertangers/codeWar/blob/master/code/code_02.js">`talk is cheap. show me the code`</a>