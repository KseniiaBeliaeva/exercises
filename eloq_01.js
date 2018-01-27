 //SUM All the numbers in an array;

    function range (a, b) { //1,10
        var min = a; //1
        var max = b; //10
        var plusOne = 0; //1
        for (var i = a; i <= b; i ++ ) {
            plusOne = plusOne + i; 
        }
        return plusOne;
}

console.log("Sum all the numbers between 2 numbers --> " + range(1, 10)); 
       