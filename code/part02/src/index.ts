import {hello} from './m1';

function sum(a:number, b:number):number{
    return a + b;
}

const obj = {name:"孙悟空", age: 15};

console.log(obj);

obj.age = 18;
console.log(obj);

console.log(sum(123, 345));
console.log('hi');
console.log(hello);