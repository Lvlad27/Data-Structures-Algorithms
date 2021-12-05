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
	console.log(`Change owed is equal to ${change}`);

	let answer = {};

	// Step 1. Find out the total change owed.
	let change = cash - price;

	// Step 2. Find out the total amount of cash dollars in the register drawer.
	const cidTotal = function () {
		let sum = cid.reduce((sum, current) => sum + current[1], 0);
		return Math.round(sum * 100) / 100;
	};

	// Define a function that decomposes the change according to available cash-in-drawer (cid) currency.

	const decomp = function () {};

	// Step 3. Define functions for every case.
	// Define function 'insufficientFunds()' if cash-in-drawer is less than the change due, or if the exact change cannot be returned.
	const insufficientFunds = function () {
		answer['status'] = 'INSUFFICIENT_FUNDS';

		//statusObject[change] =

		return answer;
	};

	// Define function 'closed()' if cash-in-drawer is equal to change owed

	// Define function 'open()' if cash-in-drawer is more than the change owed and the exact change can be returned.
	// Decompose value of change based on the cid and sort from highest to lowest value

	return change;
}

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
]);

/*
Currency Unit	Amount

Penny				$0.01 (PENNY)
Nickel				$0.05 (NICKEL)
Dime				$0.1 (DIME)
Quarter				$0.25 (QUARTER)
Dollar				$1 (ONE)
Five Dollars		$5 (FIVE)
Ten Dollars			$10 (TEN)
Twenty Dollars		$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)



 Define the currency object. Each currency is based on the initial value of the 'dollar' variable.
 const currency = {
 	PENNY: 0.01 * dollar,
 	NICKEL: 0.05 * dollar,
 	DIME: 0.1 * dollar,
 	QUARTER: 0.25 * dollar,
 	DOLLAR: dollar,
 	'FIVE DOLLARS': 5 * dollar,
 	'TEN DOLLARS': 10 * dollar,
 	'TWENTY DOLLARS': 20 * dollar,
 	'ONE-HUNDRED DOLLARS': 100 * dollar,
 };

 */
