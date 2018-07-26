// 未完成 1、没有去重 2、没有处理除法 3、没有去除重复括号
function equalTo24(a, b, c, d) {
	let nums = [{
		value: a,
		type: a
	},{
		value: b,
		type: b
	},{
		value: c,
		type: c
	},{
		value: d,
		type: d
	}];
	let steps = '';


	function kar98k(arr) {
		if (arr.length >= 2) {
			for (let i = 0; i < arr.length; i++) {
				for (let j = i + 1; j < arr.length; j++) {
					let results = [];
					// 加法
					results.push({
						value: arr[i]['value'] + arr[j]['value'],
						type: `(${arr[i]['type']}+${arr[j]['type']})`
					});
					// 减法
					results.push({
						value: arr[i]['value'] - arr[j]['value'],
						type: `(${arr[i]['type']}-${arr[j]['type']})`
					});
					// 乘法
					results.push({
						value: arr[i]['value'] * arr[j]['value'],
						type: `${arr[i]['type']}*${arr[j]['type']}`
					});
					// 除法
					results.push({
						value: eval(`${arr[i]['value']}/${arr[j]['value']}`),
						type: `(${arr[i]['type']}/${arr[j]['type']})`
					});
					// 反减
					results.push({
						value: arr[j]['value'] - arr[i]['value'],
						type: `(${arr[j]['type']}-${arr[i]['type']})`
					});
					// 反除
					results.push({
						value: eval(`${arr[j]['value']}/${arr[i]['value']}`),
						type: `(${arr[i]['type']}/${arr[j]['type']})`
					});
					if (arr.length > 2) {
						// delet i, j
						let params = [];
						arr.map((item,index) => {
							if (index !== i && index !== j) {
								params.push(item);
							}
						});
						results.forEach(item => {
							kar98k([item, ...params]);
						});
					} else {
						return results.some(item => {
							if (item.value === 24) {
								return true;
							}
						});
					}
				}
			}
		}
	}
	kar98k(nums);
}

equalTo24(5,5,10,1);