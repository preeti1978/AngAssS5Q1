//Create Shape module which should have Triangle and Square methods.  
//Import shape and use these methods in separate fi le. 
module shape{
//name of module is shape
//defining method called traingle()
    export function triangle() {
    //Using export keyword so that function can be exported to outside the module
        console.log("No of sides is 3");
    }

//defining method called square()
    export function square() {
        //Using export keyword so that function can be exported to outside the module
        console.log("No of sides is 4 and equal length");
    }
}