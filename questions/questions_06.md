# <a href="http://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript">Q6(3kyu) 简单栅栏密码的编码和解码</a>
Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string. You can optionally include or dis-include punctuation.

##  For example, this string: "WE ARE DISCOVERED. FLEE AT ONCE" would be mapped to a three rail system as follows (omitting punctuation and spaces):
``` js
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
```
The encoded string would be:
``` js
WECRLTEERDSOEEFEAOCAIVDEN
```

Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out the punctuation as they are a part of the string.

## Code
<a href="https://github.com/Hilbertangers/codeWar/blob/master/code/code_06.js">`talk is cheap. show me the code`</a>