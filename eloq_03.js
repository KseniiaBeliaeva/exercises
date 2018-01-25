/*
modify your range function to take an optional third argument that indicates the “step” value 

used to build up the array. If no step is given, the array elements go up by increments of one,

 corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 

Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/


function range(a, b, step) { //1,10
  
    var newArray = [];
    if (step > 0) {
        for (var i = a; i <= b; i += step) {  //i = 2; i <=5; 
            newArray.push(i); // 1 
        }
        return newArray;
    }
else { 
    for (var i = a; i >= b; i += step) {  //i = 2; i <=5; 
        newArray.push(i); // 1 
    }
    return newArray;
}
}    

console.log(range(5,2,-1));
//
