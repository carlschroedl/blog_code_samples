var obj = {a:1, b:2, c:3};

var product = 1;
var prop, value;
for (prop in obj) {
    num = obj[prop];
    console.log(prop + ":" + num);
    product *= num;
}
console.log(product)

// Output:
// a:1 
// b:2 
// c:3 
// 6
