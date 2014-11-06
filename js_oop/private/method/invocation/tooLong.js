//Bicycle Object constructor
function Bicycle() {

//declare private instance methods
function wheel_bearings_greased(){/*...*/}

//declare private instance method that calls
//another private instance method
var rotate_wheel_bearings = function(degrees){
if( wheel_bearings_greased() ){/*...*/}
};

//call private instance method from constructor:
rotate_wheel_bearings(90);

//call from privileged method
this.roll = function(degrees){
//some parameter validation
if(NaN(degrees)){
throw new TypeError();
}
else{
//call private instance method
rotate_wheel_bearings(degrees);
}
}
}

var green_fixie = new Bicycle();
green_fixie.roll(30);
green_fixie.roll("bananas!");	//throws exception// JavaScript Document