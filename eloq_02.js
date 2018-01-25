//show All the numbers in an array between 2 numbers;

function range(a, b) { //1,10
    var min = a; //1
    var max = b; //10
    var plusOne = 0; //1
    var newArray = [];

    for (var i = a; i <= b; i++) {  
        newArray.push(i);
    }
    return newArray;
}

console.log(range(1, 10));
