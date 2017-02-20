/**Typescript code
function test1() {
    console.log("test1(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("test1(): called");
    }
}

function test2() {
    console.log("test2(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("test2(): called");
    }
}

class Test {
    @test1()//implemented as asked in question
    @test2()//as sasked in question
    method() {} //experimental decorators option to be set to true
}
//As such, the following steps are performed when evaluating multiple decorators on a single declaration in TypeScript:

//    The expressions for each decorator are evaluated top-to-bottom.
//    The results are then called as functions from bottom-to-top.

//output will be : 
//test1 evaluated
//test2 evaluated
//test2 called
//test1 calledd
****/

/**transpiled javascript of typescript code above**/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function test1() {
    console.log("test1(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("test1(): called");
    };
}
function test2() {
    console.log("test2(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("test2(): called");
    };
}
var Test = (function () {
    function Test() {
    }
    Test.prototype.method = function () { };
    return Test;
}());
__decorate([
    test1(),
    test2()
], Test.prototype, "method", null);
