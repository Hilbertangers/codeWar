# <a href="https://www.codewars.com/kata/51646de80fd67f442c000013/train/javascript">Q4(4kyu) 路由参数过滤</a>
Complete the method so that it does the following:
    Removes any duplicate query string parameters from the url
    Removes any query string parameters specified within the 2nd argument (optional array)
    
## Examples:
``` js
stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
```

## Code
<a href="https://github.com/Hilbertangers/codeWar/blob/master/code/code_04.js">`talk is cheap. show me the code`</a>