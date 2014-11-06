var nums = [1, 2, 42];

Array.prototype.sum = function(){
    //(logic to calculate sum of array elements here)
};

var product = 1;
nums.each(function(num /*, optional_start_index */){
    console.log(num);
    product *= num;
    //optionally return false to stop iteration
});
console.log(product);

// Output:
// 1
// 2
// 42
// 84
