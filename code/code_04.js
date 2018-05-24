function stripUrlParams(url, paramsToStrip) {
    let urlParamsStr = url.substring(url.indexOf('?') + 1);
    let paramsArr = urlParamsStr.split('&');
    let delet = function (arr, del=[]) {
        let keys = [];
        let keyMap = [];
        let keyDel = [];
        let result = [];
        arr.forEach((item, index) => {
            keys.push(item.substring(0, item.indexOf('=')));
        });
        keys.forEach((item, index) => {
            if (del.length > 0) {
                del.forEach(ele => {
                    if (item === ele) {
                        keyDel.push(index);
                    }
                })
            }
            if (keyMap.indexOf(item) === -1) {
                keyMap.push(item);
            } else {
                keyDel.push(index);
            }
        });
        arr.forEach((item, index) => {
            if (keyDel.indexOf(index) === -1) {
                result.push(item);
            }
        })
        return result;
    };
    let paramsStr = delet(paramsArr, paramsToStrip).join('&');
    return url.substring(0, url.indexOf('?') + 1) + paramsStr;
}

stripUrlParams('www.codewars.com?a=1&b=2&a=2');