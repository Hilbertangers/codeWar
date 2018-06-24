function multiply(m, n) {
    const paramsFilter = num => num.match(/^(-?\d+)(\.\d+)?$/g);
    const removeZero = num => num.replace(/(^0*)|(0*$)/g, '');// 不完善
    const findDotAfter = num => {
        const index = num.indexOf('.');
        if (index === -1) return 0;
        else return num.length - index - 1;
    }
    if (!paramsFilter(m) || !paramsFilter(n)) {
        console.log('参数格式错误');
        return;
    }

    // 去除首尾的0
    let lucy = m;
    let peter = n;
    let lucyDotAfter = findDotAfter(lucy);
    let forgetNameArr = [];

    for (let i = 0; i < lucy.length; i++) {
        if (lucy[i] === '-' || lucy[i] === '.') return;
        // lucy[lucy.length-1-i]
        let forgetName = '';
        
        for (let j = 0; j < peter.length; j++) {
            if (peter[j] === '-' || peter[j] === '.') return;
            let m4a1 = peter[j] * lucy[lucy.length-1-i];
            if (m4a1 < 10 || !forgetName) {
                forgetName = forgetName + String(m4a1);
            } else if (forgetName) {
                forgetName = String(Number(forgetName) + Number(String(m4a1).slice(-2, -1))) + String(m4a1).slice(-1);
            }
        }
        forgetNameArr.push(forgetName);
    }
   
    // 有问题
    forgetNameArr = forgetNameArr.map((item,index) => {
        let result = item;
        for (let i = 0;i<index;i++) {
            result + '0';
        }
        return result;
    });
    let wyl = forgetNameArr.reduce((t,n) => t+n);
    console.log(wyl);
    // 小数点和负数和0过滤没处理
}
multiply('00100.002', '-1');