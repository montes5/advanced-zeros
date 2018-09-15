module.exports = function getZerosCount(number, base) {
	var solution = 0;
	var maxSM = searchMaxSimpleMultiplier(base);
	var degreeOfSM = searchDegreeOfSimpleMultiplier(base, maxSM);
	function searchMaxSimpleMultiplier(num) {
		var divider = 2;
		while(num % divider != 0) {
			divider++;
        }
		if(divider == num) return num;
		else return searchMaxSimpleMultiplier(num/divider);
    }
	function searchDegreeOfSimpleMultiplier(num, divider) {
		var answer = 0;
		while(num % divider == 0) {
			num /= divider;
			answer++;
        }
		return answer;
    }
	while(number > 0) {
        number = Math.floor(number/maxSM);
        solution += number;
    }
    return Math.floor(solution/degreeOfSM);
}
