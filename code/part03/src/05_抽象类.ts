(function(){
    //抽象类 不能用来创建对象 专门用来被继承的类
    abstract class Animal{
        name: string;
        constructor(name:string){
            this.name = name;
        }
        //没有方法体 必须被子类重写
        abstract sayHi():void;
    }
    class Dog extends Animal{
        sayHi(){
            console.log('汪');
        }
    }
    const dog = new Dog('baby');
    dog.sayHi();
})()