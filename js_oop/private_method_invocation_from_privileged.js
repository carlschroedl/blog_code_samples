function myObject(){
    this.myProtectedMethod=function(){
        myPrivateMeth();
    };

    function myPrivateMeth(){
        //method body
    }
}
