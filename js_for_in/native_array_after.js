var nums = [1, 2, 42];

Array.prototype.sum = function(){
    //(logic to calculate sum of array elements here)
};

var product = 1;
nums.forEach(function(num){
    console.log(num);
    product *= num;
});
console.log(product);

// Output:
// 1
// 2
// 42
// 84
