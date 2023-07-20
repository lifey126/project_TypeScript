"use strict";
class Person {
    constructor() {
        //属性
        //实例属性
        //readonly 只读属性
        this.name = '孙悟空';
    }
    //方法
    //实例方法 静态方法（类方法）
    static sayHello() {
        console.log('Hello 大家好');
    }
}
//静态属性 类属性
Person.age = 18;
const per = new Person();
console.log(per);
console.log(Person.age);
Person.sayHello();
