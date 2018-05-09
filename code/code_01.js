// My
function solution(roman) {
    let a = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let b = [1, 5, 10, 50, 100, 500, 1000];
    let add = [0, 0, 0, 0, 0, 0, 0];
    let minus = [0, 0, 0, 0, 0, 0, 0];
    roman.split('').forEach((item, index) => {
        let postion = a.indexOf(item);
        if (index === roman.length - 1) {
            add[postion]++;
        } else if (postion >= a.indexOf(roman[index + 1])) {
            add[postion]++;
        } else {
            minus[postion]++;
        }
    });
    let addReduce = add.reduce((result, item, index) => {
        return result + b[index] * item;
    });
    return minus.reduce((result, item, index) => {
        return result - b[index] * item;
    }, addReduce)
}

// which solution i like best from netfriends
function solution(roman){
    var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
 }