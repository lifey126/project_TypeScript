class Person{
    //属性
    //实例属性
    //readonly 只读属性
    readonly name:string = '孙悟空';
    //静态属性 类属性
    static age:number = 18;

    //方法
    //实例方法 静态方法（类方法）
    static sayHello(){
        console.log('Hello 大家好')
    }
}

const per = new Person();

console.log(per);
console.log(Person.age);
Person.sayHello();