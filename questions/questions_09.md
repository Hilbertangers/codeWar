# <a href="https://www.codewars.com/kata/55dcdd2c5a73bdddcb000044/train/javascript">Q9(3kyu) 若干可覆盖矩形总面积计算</a>
##  Task
Your task in order to complete this Kata is to write a function which calculates the area covered by a union of rectangles.
Rectangles can have non-empty intersection, in this way simple solution: Sall = S1 + S2 + ... + Sn-1 + Sn (where n - the quantity of rectangles) will not work.

## Preconditions
- each rectangle is represented as: [x0, y0, x1, y1]
- (x0, y0) - coordinates of the bottom left corner
- (x1, y1) - coordinates of the top right corner
- xi, yi - `positive integers or zeroes` (0, 1, 2, 3, 4..)
- sides of rectangles are `parallel to coordinate axes`
- your input data is array of rectangles

## Memory requirements
- Number of rectangles in one test (not including simple tests) range from `3000` to `15000`. There are 10 tests with such range. So, your algorithm should be `optimal`.

## Examples:
<img src="https://s33.postimg.cc/nf3brdckv/111.png">
```js
// There are three rectangles: R1 = [3,3,8,5], R2 = [6,3,8,9], R3 = [11,6,14,12]
// S(R1) = 10, S(R2)= 12, S(R3) =  18
// S(R1 ∩ R2) = 4, S(R1 ∩ R3) = 0,  S(R2 ∩ R3) = 0
// S = S(R1) + S(R2) + S(R3) - S(R1 ∩ R2) - S(R1 ∩ R3) - S(R2 ∩ R3) = 36

javascript: calculate([[3,3,8,5], [6,3,8,9], [11,6,14,12]]) // returns 36
java: RectanglesUnion.calculateSpace(new int[][]{{3,3,8,5}, {6,3,8,9}, {11,6,14,12}}) // returns 36
```

## Code
<a href="https://github.com/Hilbertangers/codeWar/blob/master/code/code_09.js">`talk is cheap. show me the code`</a>