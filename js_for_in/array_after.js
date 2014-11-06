//in some other file...

Array.prototype.sum = function(){
    //(logic to calculate sum of array elements here)
};

//in original file...
var nums = [1, 2, 42];

var product = 1;
var i, num;
for (i in nums) {
    num = nums[i];
    console.log(num);
    product *= num;
}
console.log(product);

// Output:
// 1 
// 2 
// 42 
// function (){
//     //(logic to calculate sum of array elements here)
//     }
// NaN 
