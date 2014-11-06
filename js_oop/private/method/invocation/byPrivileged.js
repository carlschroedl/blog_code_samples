//Bicycle Object constructor
function Bicycle() {
	//private method declaration:
    function rotate_wheel_bearings(degrees){/*...*/}
	//privileged method declaration:
	this.zoom = function(){
		//private method invocation
		rotate_wheel_bearings(42000000);
	};
}