function createClass(constructor,args){
    var o = {};
    o.__proto__ = constructor.prototype;
    constructor.call(o,...args);
    return o;
}
function Animal(type,cando){
    this.type = type;
    this.cando = cando;
}
Animal.prototype.showType = function () {
    console.log('I am a ' + this.type + ",and I can " + this.cando);
}
var cat = createClass(Animal,["cat","捉老鼠"]);
cat.showType();