(function(){
    type myType = {
        name:string
        age:number
    }

    //接口 定义一个类结构
    interface myInterface{
        name:string;
        age:number;
    }
    interface myInterface{
        gender:string;
    }

    const obj :myInterface = {
        name: 'sss',
        age: 12,
        gender:'male'
    }

    //只定义结构 不考虑实际值 抽象方法
    interface myInter{
        name:string;
        sayHi():void;
    }

    //实现接口
    class MyClass implements myInter{
        name: string;

        constructor(name:string){
            this.name = name;
        }

        sayHi(){
            console.log("打招呼");
        }
        
    }
})()