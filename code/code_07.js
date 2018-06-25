function multiply(m, n) {
    const paramsFilter = num => num.match(/^(-?\d+)(\.\d+)?$/g);
    const removeZeroBehind = num => num.replace(/0*$|\.0*$/g, '');
    const removeDotNegative = num => num.replace(/^-?|\.?/g, '');
    // 尾数相增
    const tailAdd = (a, b) => {
        let res = a.split('');
        function akm (n, i) {
            if (res.length - 1 >= i) {
                let lastAdd = Number(res[res.length - 1 - i]) + Number(n);
                res[res.length - 1 - i] = String(lastAdd).slice(-1);
                if (lastAdd >= 10) {
                    akm(String(lastAdd).slice(-2, -1), ++i);
                } else {
                    return;
                }
            } else {
                return res.unshift('1');
            }
        }
        akm(b, 0);
        return res.join('');
    }
    const negative = (a, b) => {
        let flag = 0;
        if (a.indexOf('-') !== -1) flag++;
        if (b.indexOf('-') !== -1) flag++;
        if (Number(a) === 0 || Number(b) === 0) flag = 0;
        if (flag === 1) return true;
    };
    const findDotAfter = num => {
        const index = num.indexOf('.');
        if (index === -1) return 0;
        else {
            return num.length - index - 1;
        }
    };
    if (!paramsFilter(m) || !paramsFilter(n)) {
        console.log('参数格式错误');
        return;
    }
    if (Number(m) === 0 || Number(n) === 0) {
        return '0';
    }

    let lucy = removeDotNegative(m);
    let peter = removeDotNegative(n);
    let forgetNameArr = [];

    for (let i = 0; i < lucy.length; i++) {
        let forgetName = '';
        for (let j = 0; j < peter.length; j++) {
            let m4a1 = peter[j] * lucy[lucy.length - 1 - i];
            if (m4a1 < 10 || !forgetName) {
                forgetName = forgetName.concat(String(m4a1));
            } else if (forgetName) {
                forgetName = tailAdd(forgetName, String(m4a1).slice(-2, -1)) + String(m4a1).slice(-1);
            }
        }
        forgetNameArr.push(forgetName);
    }

    forgetNameArr = forgetNameArr.map((item, index) => {
        let result = item;
        for (let i = 0; i < index; i++) {
            result = result.concat('0');
        }
        return result;
    });
    // 大数相加还未处理
    let wyl = String(forgetNameArr.reduce((t, n) => Number(t) + Number(n)));
    const dotIndex = String(findDotAfter(m) + findDotAfter(n));
    if (Number(dotIndex) !== 0) {
        if (wyl.length <= Number(dotIndex)) {
            let time = Number(dotIndex) - wyl.length;
            for (let i = 0; i < time; i++) {
                wyl = '0' + wyl;
            }
            wyl = '0.' + wyl;
        } else {
            wyl = wyl.slice(0, Number('-' + dotIndex)) + '.' + wyl.slice(Number('-' + dotIndex));
        }
        wyl = removeZeroBehind(wyl);
    }
    if (negative(m, n)) {
        wyl = '-' + wyl;
    }
    return wyl;
}
function add (a, b) {
    let res = a.split('');
    let assist = [];
    function akm (n, i) {
        if (res.length - 1 >= i) {
            let lastAdd = Number(res[res.length - 1 - i]) + Number(n);
            res[res.length - 1 - i] = String(lastAdd).slice(-1);
            if (lastAdd >= 10) {
                akm(String(lastAdd).slice(-2, -1), ++i);
            } else {
                // jjjj
                assist.unshift(res);
                return;
            }
        } else {
            return res.unshift('1');
        }
    }
    akm(b, 0);
    return res.join('');
}
multiply('-5', '61');