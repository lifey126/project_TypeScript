"use strict";
function fn1(a) {
    return a;
}
let res1 = fn1(10); //不指定泛型
let res2 = fn1('hello'); //指定泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
let res3 = fn2('sss', 18);
function fn3(a) {
    return a.length;
}
fn3({ length: 15 });
class MyClass {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
const mc = new MyClass('John');
