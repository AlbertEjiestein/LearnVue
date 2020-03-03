// 使用commonjs的模块化规范
const {add, mul} = require("./mathUtils");

console.log(add(3,4));
console.log(mul(3,4));

// 使用ES6的模块化规范
import {name, age, height} from './info';
console.log(name);
console.log(age);
console.log(height);
