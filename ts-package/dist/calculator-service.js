"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorService = void 0;
var CalculatorService;
(function (CalculatorService) {
    function add() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        var sum = 0;
        numbers.forEach(function (number) { return (sum += number); });
        return sum;
    }
    CalculatorService.add = add;
})(CalculatorService = exports.CalculatorService || (exports.CalculatorService = {}));
