var myObject = function(){

//public property:
    this.myProperty = 42;

//private instance property holds reference 
    //to all public instance members:
    var that = this;    //also dubbed 'self'
    
//private method. Does not have access to public members.
    function myPrivateMethod(){
        alert(that.myProperty);//alerts "42"
        alert(this.myProperty);//alerts "undefined"
    }

    //public method. Has access to public and private members
    this.myPublicMethod=function(){
        alert(that.myProperty);//alerts "42"
        alert(this.myProperty);//alerts "42"
        myPrivateMethod();
    }
}
var myObj = new myObject(); //create it
myObj.myPublicMethod();     //drive it
