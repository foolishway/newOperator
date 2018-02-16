# javascript 中 调用new操作符时候发生了什么？
* 第一步，创建一个空对象
* 第二步，空对象的__proto__指向constractor的prototype
* 第三步，用该空对象为this调用constractor
ES6中Reflect.constructor函数和test.js中createClass实现同样功能
