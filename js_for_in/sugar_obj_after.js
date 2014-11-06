//in some other file..

Object.prototype.isEmpty = function(){
  //(logic to determine if an object has any properties)  
};

//in original file..

var obj = {a:1, b:2, c:3};

var product = 1;
Object.keys(obj, function(key, num){
    console.log(key + ":" + num);
    product *= num;
});
console.log(product)

// Output:
// a:1 
// b:2 
// c:3 
// 6
