/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

TESTS:
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/

function checkCashRegister(price, cash, cid) {
	let answer = {};

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

	// Step 1. Find out the total change owed.
	let changeTotal = cash - price;

	// Step 2. Find out the total amount of cash dollars in the register drawer.
	const totalCash = function (arr) {
		let sum = arr.reduce((sum, current) => sum + current[1], 0);
		return Math.round((sum + Number.EPSILON) * 100) / 100;
	};

	let totalAvailableCash = totalCash(cid);
	console.log(`Total cid = ${totalCash(cid)}`);
	console.log(`Total change = ${changeTotal}`);

	// Step 3. Define function 'insufficientFunds()' if cash-in-drawer is less than the change due. (, or if the exact change cannot be returned)
	const insufficientFunds = function () {
		answer['status'] = 'INSUFFICIENT_FUNDS';
		answer['change'] = [];
		return answer;
	};

	// Step 4. Define function 'closed()' if cash-in-drawer is equal to change owed
	const closed = function () {
		answer['status'] = 'CLOSED';
		answer['change'] = cid;
		return answer;
	};

	// Define function to remove currency entries that are equal to 0.
	const removeEntries = function (arr) {
		let index = arr.indexOf(0);
		if (index > -1) {
			arr.splice(index, 1);
		}
	};

	// Step 5. Define function 'open()' if cash-in-drawer is more than the change owed and the exact change can be returned.

	const open = function () {
		// Reverse cid array so that it will log the required order.
		cid.reverse();
		currency.reverse();
		change.reverse();
		for (let i in currency) {
			while (currency[i][1] <= changeTotal.toFixed(2) && cid[i][1] > 0) {
				changeTotal -= currency[i][1];
				cid[i][1] -= currency[i][1];
				change[i][1] += currency[i][1];
			}
		}
		change = change.filter(function (item) {
			return item[1];
		});
		answer['status'] = 'OPEN';
		answer['change'] = change;
		return answer;
	};

	if (totalAvailableCash < changeTotal) {
		return insufficientFunds();
	} else if (totalAvailableCash === changeTotal) {
		return closed();
	} else if (totalAvailableCash > changeTotal) {
		return open();
	} else {
		answer['status'] = 'INSUFFICIENT_FUNDS';
		answer['change'] = [];
		return answer;
	}
}

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
);

console.log(
	checkCashRegister(3.26, 100, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
);

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.01],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 0],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0],
	])
);

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.01],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 1],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0],
	])
);

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.5],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 0],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0],
	])
);
