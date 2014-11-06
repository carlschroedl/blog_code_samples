//in some other file..

Object.prototype.isEmpty = function(){
  //(logic to determine if an object has any properties)  
};

//in original file..

var obj = {a:1, b:2, c:3};

var product = 1;

var printAndMultiply = function(key, num){
    console.log(key + ":" + num);
    product *= num;
};

Object.keys(obj,printAndMultiply);
console.log(product)

// Output:
// a:1 
// b:2 
// c:3 
// 6

//in some jasmine test file..
describe('printAndMultiply', function(){
    beforeEach(function(){
        product = 1;    
    });
    it('should multiply by two correctly', function(){
        printAndMultiply('some_key', 2);
        expect(product).toBe(2);
    });
    it('should multiply by three correctly', function(){
        printAndMultiply('some_key', 3);
        expect(product).toBe(3);
        printAndMultiply('some_key', 3);
        expect(product).toBe(9);
    });
});
