"use strict";
exports.__esModule = true;
exports.Decorator = void 0;
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
exports.Decorator = Decorator;
