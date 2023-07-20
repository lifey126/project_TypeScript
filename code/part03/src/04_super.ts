(function(){
    class Animal{
        name: string;
        constructor(name:string){
            this.name = name;
        }
        sayHi(){
            console.log('动物在sayhi');
        }
    }
    class Dog extends Animal{
        age:number;
        constructor(name:string, age:number){
            //调用父类的构造函数
            super(name);
            this.age = age;
        }
        sayHello(){
            console.log('汪');
        }
    }
    const dog = new Dog('baby', 3);
    dog.sayHello();
})()