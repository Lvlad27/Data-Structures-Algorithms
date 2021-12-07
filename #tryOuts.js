let answer = {};
let cash = 100;
let price = 3.26;
let changeTotal = cash - price;
changeTotal = Math.round((changeTotal + Number.EPSILON) * 100) / 100;
console.log(changeTotal);
let cid = [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90],
	['FIVE', 55],
	['TEN', 20],
	['TWENTY', 60],
	['ONE HUNDRED', 100],
];
let currency = [
	['PENNY', 0.01],
	['NICKEL', 0.05],
	['DIME', 0.1],
	['QUARTER', 0.25],
	['ONE', 1],
	['FIVE', 5],
	['TEN', 10],
	['TWENTY', 20],
	['ONE HUNDRED', 100],
];
let change = [
	['PENNY', 0],
	['NICKEL', 0],
	['DIME', 0],
	['QUARTER', 0],
	['ONE', 0],
	['FIVE', 0],
	['TEN', 0],
	['TWENTY', 0],
	['ONE HUNDRED', 0],
];

const open = function () {
	// Reverse cid array so that it will log the required order.
	cid.reverse();
	while (changeTotal > 0) {
		for (i = 0; i < currency.length; i++) {
			while (currency[i][1] <= changeTotal && cid[i][1] > 0) {
				changeTotal -= currency[i][1];
				console.log(changeTotal);
				cid[i][1] -= currency[i][1];
				console.log(cid[i][1]);
				change[i][1] += currency[i][1];
				console.log(change[i][1]);
			}
		}
		return change;
	}
};

console.log(open());

/*
cid.reverse();
	for (let i in currency) {
		while (change >= currency[i][1] && cid[i][1] > 0) {
			changeArr.push(currency[i]);
			cid[i][1] -= currency[i][1];
			change -= currency[i][1];
		}
		if (change > currency[8][1]) {
			answer['status'] = 'INSUFFICIENT_FUNDS';
			answer['change'] = [];
		} else {
			answer['status'] = 'OPEN';
			answer['change'] = changeArr;
		}
	}
	return answer;
    */
