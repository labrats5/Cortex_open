function perfectNumCounter(n) {
	var perfectArray = [];
	for (var i = 2; i <= n; i++) {
		var divisors = [1]
		for (var j = 2; j <= i/2; j++) {
			if (i % j === 0)
				divisors.push(j);
		}
		var divisorSum = 0;
		var length = divisors.length;
		for (var k = 0; k < length; k++)
			divisorSum += divisors[k];
		if (divisorSum === i)
			perfectArray.push(i);
	}
	return perfectArray;
}

console.log(perfectNumCounter(8128));