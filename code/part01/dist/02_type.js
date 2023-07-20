//指定声明变量a的类型为number
let a;
//声明变量时直接赋值
//自动类型检测
let b = true;
function sum(a, b) {
    return a + b;
}
let result = sum(123, 456);
//字面量 | 连接多个类型（联合类型）
let c;
let d;
//any 任意类型 无TS的类型检测
let e;
//隐式any
let f;
//unknown 未知类型 不能直接赋值给其他变量
let g;
g = 'hello';
let s;
if (typeof g === "string") {
    s = g;
}
//类型断言 告诉解析器变量的实际类型
s = g;
s = g;
//void 空
function fn() {
    //return undefined;
}
//never 永远不会返回结果
function fn2() {
    throw new Error('报错！');
}
//object js对象
let z1;
//{} 指定对象中包含的属性  ?:可选属性
let z2;
z2 = { name: '孙悟空' };
//对象结构
//[prpoName:string]：any
let z3;
z3 = { name: '猪八戒', address: '高老庄' };
//函数结构
let z4;
z4 = (a, b) => { return a + b; };
//数组
let y1;
let y2;
//元组
let x;
x = ['123', 123];
//enum 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let i;
i = {
    name: '沙僧',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
//& 同时
let j;
j = { name: "John", age: 25 };
let k;
k = 3;
