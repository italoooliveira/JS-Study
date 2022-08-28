"use strict";
exports.__esModule = true;
var ConcreteComponent_1 = require("./ConcreteComponent");
var ConcreteDecoratorA_1 = require("./ConcreteDecoratorA");
var ConcreteDecoratorB_1 = require("./ConcreteDecoratorB");
function clientCode(component) {
    console.log("RESULT: ".concat(component.operation()));
}
var simple = new ConcreteComponent_1.ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');
var decorator1 = new ConcreteDecoratorA_1.ConcreteDecoratorA(simple);
var decorator2 = new ConcreteDecoratorB_1.ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);
