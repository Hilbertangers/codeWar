function equalTo24(a, b, c, d) {
	let nums = [a, b, c, d];
	function kar98k(arr) {
		if (arr.length >= 2) {
			for (let i = 0; i < arr.length; i++) {
				for (let j = i + 1; j < arr.length; j++) {
					let results = [];
					// 加法
					results.push(arr[i] + arr[j]);
					// 减法
					results.push(arr[i] - arr[j]);
					// 乘法
					results.push(arr[i] * arr[j]);
					// 除法
					// results.push(arr[i] + '/' + arr[j]);
					// 反减
					results.push(arr[j] - arr[i]);
					// 反除
					// results.push(arr[j] + '/' + arr[i]);
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
						console.log('comp', results);
						return results.some(item => {
							if (item === 24) {
								return true;
							}
						}) && 'ok';
					}
				}
			}
		}
	}
	console.log(kar98k(nums));
}

equalTo24(6,6,6,6);