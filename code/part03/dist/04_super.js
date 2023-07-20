"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log('动物在sayhi');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            //调用父类的构造函数
            super(name);
            this.age = age;
        }
        sayHello() {
            console.log('汪');
        }
    }
    const dog = new Dog('baby', 3);
    dog.sayHello();
})();
