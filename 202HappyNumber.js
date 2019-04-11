var isHappy = function(n) {
    // Using Floyd Cycle detection algorithm (two pointers)
    let slowPointer = n,
        fastPointer = n;
    
    do {
        slowPointer = squareSum(slowPointer);
        fastPointer = squareSum(squareSum(fastPointer));
    }
    while (slowPointer != fastPointer);
    
    if (slowPointer == 1) {return 1} else {return 0};
    
    
    function squareSum(num) {
        let result = 0;
        while (num != 0) {
            result += (num % 10) ** 2;
            num = ~~(num / 10);
        }
        return result;
    }
};

console.log(isHappy(19));