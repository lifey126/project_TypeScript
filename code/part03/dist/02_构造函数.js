"use strict";
class Dog {
    // name = 'baby';
    // age = 3;
    //构造函数
    //在对象创建时调用
    constructor(name, age) {
        //在实例方法中，this就表示当前的实例
        //在构造函数中，当前对象就是当前新建的对象
        //可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this);
    }
}
const dog = new Dog('baby', 3);
dog.bark();
