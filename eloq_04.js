var arrays = [[1, 2, 3], [4, 5], [6]];
var sum = 0;
//разделить один большой аррей на несколько сабарреев
for (var i = 0; i < arrays.length; i++) {   //1,2,3

    for (var subarray = 0; subarray < arrays[i].length; subarray++) {  //1 - 2- 3
        sum += arrays[i][subarray];
        
    }
}
console.log(sum);
//сложить в каждом саббарее числа
//сложить все саббареи

// Your code here.
// → [1, 2, 3, 4, 5, 6]