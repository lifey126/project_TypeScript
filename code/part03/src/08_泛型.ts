function fn1<T>(a:T):T{
    return a;
}
let res1 = fn1(10); //不指定泛型
let res2 = fn1<string>('hello'); //指定泛型

function fn2<T, K>(a:T, b:K):T{
    console.log(b);
    return a;
}
let res3 = fn2('sss', 18);

interface Inter{
    length:number;
}
function fn3<T extends Inter>(a:T):number{
    return a.length;
}
fn3({length: 15});

class MyClass<T>{
    constructor(public name:T){
        this.name = name;
    }
}
const mc = new MyClass<string>('John');
