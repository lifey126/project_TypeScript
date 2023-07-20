//指定声明变量a的类型为number
let a: number;

//声明变量时直接赋值
//自动类型检测
let b = true;

function sum(a:number, b:number):number{
    return a + b;
}
let result = sum(123, 456);

//字面量 | 连接多个类型（联合类型）
let c: "male" | "female";
let d: string | number;

//any 任意类型 无TS的类型检测
let e: any
//隐式any
let f;

//unknown 未知类型 不能直接赋值给其他变量
let g: unknown;
g = 'hello';
let s:string;
if(typeof g === "string"){
    s = g;
}

//类型断言 告诉解析器变量的实际类型
s = g as string
s = <string>g

//void 空
function fn():void{
    //return undefined;
}
//never 永远不会返回结果
function fn2():never{
    throw new Error('报错！');
}

//object js对象
let z1:object;
//{} 指定对象中包含的属性  ?:可选属性
let z2:{name:string, age?:number};
z2 = {name:'孙悟空'};
//对象结构
//[prpoName:string]：any
let z3:{name:string, [prpoName:string]:any};
z3 = {name:'猪八戒', address:'高老庄'}
//函数结构
let z4:(a:number, b:number)=>number;
z4 = (a, b)=>{ return a + b };

//数组
let y1: number[];
let y2: Array<number>;

//元组
let x:[string, number];
x = ['123', 123];

//enum 枚举
enum Gender{
    Male = 0,
    Female = 1
}
let i:{name:string, gender:Gender}
i = {
    name:'沙僧',
    gender:Gender.Male
}
console.log(i.gender === Gender.Male)

//& 同时
let j:{name: string} & {age: number};
j = { name: "John", age: 25 };

//类型别名
type myType = 1 | 2 | 3 | 4 | 5;
let k:myType;
k = 3;