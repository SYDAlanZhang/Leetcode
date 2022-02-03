/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {

	//1. Linear Method 
    // for (let i = 0; i < A.length; i ++) {
    //     if (A[i] > A[i+1]) {
    //         return i;
    //     }
    // }

    //2. Binary Search
    let left = 0,
        right = A.length - 1;
    while (left < right) {
        let mid = Math.floor((left+right)/2);
        if (A[mid] < A[mid+1]) {
            left = mid;
        } else if (A[mid] < A[mid-1]) {
            right = mid;
        } else {
            return mid;
        }
    }
};