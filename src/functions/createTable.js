
const randomBlank = () => {
	let num1 = Math.floor(Math.random() * 9);
	let num2 = Math.floor(Math.random() * 9);
	let num3 = Math.floor(Math.random() * 9);
	let num4 = Math.floor(Math.random() * 9);
	let result = [num1, num2, num3, num4];

	while(checkOverlappedArr(result)){
		num1 = Math.floor(Math.random() * 9);
		num2 = Math.floor(Math.random() * 9);
		num3 = Math.floor(Math.random() * 9);
		num4 = Math.floor(Math.random() * 9);
		result = [num1, num2, num3, num4];
	}

	result = result.sort();

	const distanceBlank = ((result[1] > (result[0] + 4)) || (result[2] > (result[1] + 4)) || (result[3] > (result[2] + 4)));
	const consBlank = (((result[0] + 1) === result[1]) && ((result[1] + 1) === result[2]) && ((result[2] + 1) === result[3]));
	const firstBlankPostion = (result[0] > 2);

		if((consBlank) || (firstBlankPostion) ||(distanceBlank)){
			result = randomBlank();
		}

	return result;
}

const createRandomNum = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomArr = () => {
	let result = [];
	for(let i = 1; i < 10; i++){
        let max = 0;
        let min = 0;

		if(i === 9){
			max = i*10;
		} else {
			max = i*10 - 1;
		}

		switch(i){
			case 1:
				min = 1; break;
			case 9:
				min = 80; break;
			default:
				min = max - 9;
		}

		result.push(createRandomNum(min, max));
	};

	const blank = randomBlank();
	for(let i of blank){
		result.splice(i, 1, ' ');
	}

	return result;
}


const checkOverlappedArr = arr => {
	let result = false;
	for( let i = 0; i < arr.length; i++){
		for( let j = i + 1; j < arr.length; j++){
			if(arr[i] === arr[j]){
				result = true;
				return result;
			}
		}
	}
	return result;
}

const checkOverlappedRow = (arr1, arr2) => {
	let result = false;
	for(let i = 0; i < 9; i++){
		if(typeof(arr1[i] === 'number') && (typeof(arr2[i]) === 'number')){
			if(arr1[i] === arr2[i]){
				result = true;
				return result;
			}
		}
	}
	return result;
}

// function changeOverlappedRow(arr1, arr2){
// 	while(checkOverlappedRow(arr1, arr2)){
// 		arr2 = randomArr();
// 	}
// }


function checkOverlappedTable(table){
	for(let i = 0; i < table.length; i++){

		for(let j = i + 1; j < table.length; j++){
			while(checkOverlappedRow(table[i], table[j])){
				table[j] = randomArr();
				// dùng đệ quy
				checkOverlappedTable(table);
			}

		}
	}
}

const count = (element, arr) => {
	let result = 0;
	for (let ele of arr){
		if(ele === element){
			result += 1;
		}
	}
	return result;
}




function checkConsecutiveBlanks(arr){
	let blankArr = [];
	let result = false;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === " "){
			blankArr.push(i);
		}
	}

	for(let j = 1; j < blankArr.length; j++){
		let overlapPrevious = (blankArr[j] === (blankArr[j-1] + 1));
		let overlapAfter = (blankArr[j] === (blankArr[j+1] - 1));
		if((overlapPrevious) && (overlapAfter)){
			result = true;
			break;
		}
	}
	return result;
}


const makeTable = () => {
	let result = [];
	for(let row = 1; row < 10; row++){
		result.push(randomArr());
	};
	checkOverlappedTable(result);

	// check Blank in table
	for (let i = 0; i < result.length; i++){

		let col = [];
		for(let row of result){
			col.push(row[i]);
		}
		let consBlank = checkConsecutiveBlanks(col);
		loop+= 1;
		let blankNum = count(' ', col);

		if((blankNum > 5) || (blankNum < 3) || (consBlank)){
			result = makeTable();
		}
	}

	return result;
}

var loop = 0; // global variable

 const createTable = () => {
	loop = 0;
 	let data = makeTable();
	console.log(loop);
	const result = data.map(row => {
		return row.map(number => ({
				number: number,
				active: false
		}))
	})
	return result;
 };

export default createTable;



