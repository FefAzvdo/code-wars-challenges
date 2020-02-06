function solution(str) {
	const resultArr = [];
	const splitedStr = str.split("");

	do {
		if (splitedStr.length === 1) {
			splitedStr.push("_");
		}
		resultArr.push(splitedStr.splice(0, 2).join(""));
	} while (splitedStr.length >= 1);

	return resultArr;
}
