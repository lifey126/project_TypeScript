"use strict";
//立即执行函数
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHi() {
            console.log('动物！');
        }
    }
    class Dog extends Animal {
        run() {
            console.log(`${this.name}跑了过来！`);
        }
        //方法重写
        sayHi() {
            console.log('汪！');
        }
    }
    class Cat extends Animal {
        sayHi() {
            console.log('喵！');
        }
    }
    const dog = new Dog('baby', 3);
    const cat = new Cat('bread', 2);
    cat.sayHi();
    dog.sayHi();
    dog.run();
})();
