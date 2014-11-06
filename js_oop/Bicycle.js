//Bicycle object constructor

function Bicycle() {
	var number_of_bearings = 64;	//private instance property
	var bearings_orientation = 0;	//private instance property		
	this.number_of_wheels = 2;		//public instance property
	
	function rotate_bearings(numDegrees){	//private instance method
											//no public member access here
		bearings_orientation = (bearings_orientation + numDegrees) % 360;
		return;
		
	}
	
	this.roll = function(degrees){			//public instance method
		if( isNaN(numDegrees) ){
			throw new TypeError("You must supply an integer!");
		}
		else{
			rotate_bearings(degrees);		//invocation of a private instance method
		}
		return;
	}

	
}



var green_fixie = new Bicycle();
green_fixie.roll(30);
green_fixie.roll("bananas!");	//throws exception
