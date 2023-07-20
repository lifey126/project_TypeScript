"use strict";
(function () {
    const obj = {
        name: 'sss',
        age: 12,
        gender: 'male'
    };
    //实现接口
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log("打招呼");
        }
    }
})();
