"use strict";
(function () {
    //抽象类 不能用来创建对象 专门用来被继承的类
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHi() {
            console.log('汪');
        }
    }
    const dog = new Dog('baby');
    dog.sayHi();
})();
