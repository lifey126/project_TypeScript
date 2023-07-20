(function(){
    class Person{
        /*
            * public 默认值 任意位置访问
            * private 私有属性 当前类内访问
            *   -添加方法使得私有属性可以被外部访问
            * protected 受保护的属性 只能在当前类和当前类的子类中访问
         */
        _name:string;
        _age:number;

        constructor(name:string, age:number) {
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

        get name(){
            return this._name;
        }
        set name(value:string){
            this._name = value;
        }
        get age(){
            return this._age;
        }
        set age(value:number){
            if(value >= 0){
                this._age = value;
            }else{
                alert("年龄输入错误！")
            }
        }
    }

    const per = new Person('John', 18);
    per.name = 'Tommy';
    per.age = 6;
    console.log(per);


})()