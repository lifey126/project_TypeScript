"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName(){
        //     return this._name;
        // }
        // setName(value:string){
        //     this._name = value;
        // }
        // getAge(){
        //     return this._age;
        // }
        // serAge(value:number){
        //     if(value < 0){
        //         console.log("年龄不允许是负值！") 
        //     }else{
        //         this._age = value;
        //     }
        // }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
            else {
                alert("年龄输入错误！");
            }
        }
    }
    const per = new Person('John', 18);
    per.name = 'Tommy';
    per.age = 6;
    console.log(per);
})();
