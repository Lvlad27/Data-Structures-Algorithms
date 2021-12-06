let arr = [
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

let sum = arr.reduce((sum, current) => sum + current[1], 0);
sum = Math.round((sum + Number.EPSILON) * 100) / 100;

const change = 96.74;

function flatten(arr) {
	let flatArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flatArr = flatArr.concat(flatten(arr[i]));
		} else {
			flatArr.push(arr[i]);
		}
	}
	return flatArr;
}

console.log(flatten(arr));
arr = flatten;
const newObject = Object.assign({}, arr);

console.log(sum);
console.log(change % 10);

/*
function open()
checkCashRegister
(3.26, 100, 
    [
        ["PENNY", 1.01], 
        ["NICKEL", 2.05], 
        ["DIME", 3.1], 
        ["QUARTER", 4.25], 
        ["ONE", 90], 
        ["FIVE", 55], 
        ["TEN", 20], 
        ["TWENTY", 60], 
        ["ONE HUNDRED", 100]]) 
        should return 
        {
        status: "OPEN", 
        change: 
        [
            ["TWENTY", 60], 
            ["TEN", 20], 
            ["FIVE", 15], 
            ["ONE", 1], 
            ["QUARTER", 0.5], 
            ["DIME", 0.2], 
            ["PENNY", 0.04]
        ]
        }
*/
