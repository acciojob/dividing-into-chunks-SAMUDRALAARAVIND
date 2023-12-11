const arr = [1, 2, 3, 4, 1, 0, 2, 2]; // n = 5
		//                           i

const divide = (arr, n) => {
	// corner case 
	if(arr.length === 0) return [] ;

	
	let trackingSum = 0 , ans = [] , subArr = [] ;
	// ans = [ [1, 2] , [ 3 ], [ 4, 1, 0 ], [ 2, 2 ] ] 
	// subArr = [ 2, 2 ], trackingSum = 4
	for(let i = 0 ; i < arr.length; i++) {
		if(trackingSum + arr[i] <= n) { //  2 + 2 <= 5
			// include the current element 
			subArr.push(arr[i]);
			trackingSum += arr[i];
		}
		else {
			ans.push(subArr);
			// start a new subarray freshly with the current element
			subArr = [ arr[i] ]
			trackingSum = arr[i] 
		}
	}

	ans.push(subArr); // [ [] ]

	return ans ; // [ [1, 2] , [ 3 ], [ 4, 1, 0 ], [ 2, 2 ] ] 
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
