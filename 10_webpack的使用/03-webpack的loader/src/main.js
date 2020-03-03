// 使用commonjs的模块化规范
const {add, mul} = require("./js/mathUtils");

console.log(add(3,4));
console.log(mul(3,4));

// 使用ES6的模块化规范
import {name, age, height} from './js/info';
console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require('./css/normal.css');

// 依赖less文件
require('./css/special.less');
document.writeln('<h2>你好啊，小黄！</h2>')