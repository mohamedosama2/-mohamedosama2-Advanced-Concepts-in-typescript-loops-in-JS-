var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//////////////////1
var gen1 = function (obgj) {
    console.log(obgj.value);
};
gen1({ value: 2 });
//////////////////2
var gen2 = function (obgj) {
    console.log(obgj.value);
};
gen2({ value: null });
gen2({ value: "Hello" });
var objAllNumbers = {
    name: [1],
    data: 2,
    omar: 8
};
var objAllStrings = {
    name: ["as"],
    data: "12",
    omar: "vvv"
};
///////////////////////////////////4 Abstract With Genrics
var BaseAbstractGen = /** @class */ (function () {
    function BaseAbstractGen(ourName) {
        this.name = ourName;
    }
    BaseAbstractGen.prototype.print = function () {
        console.log(this.name);
    };
    return BaseAbstractGen;
}());
var Louta = /** @class */ (function (_super) {
    __extends(Louta, _super);
    function Louta(param) {
        return _super.call(this, param) || this;
    }
    Louta.prototype.fun1 = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log(params);
        return params;
    };
    return Louta;
}(BaseAbstractGen));
var l = new Louta("2222222222222222");
l.print();
l.fun1("aa", "fff");
/* class DeriveInterface extends implementable{/////////EROOR
    
} */
var DeriveInterface = /** @class */ (function () {
    function DeriveInterface() {
    }
    DeriveInterface.prototype.getFullname = function () {
        return "";
    };
    return DeriveInterface;
}());
//////////////////STATICS
var Statically = /** @class */ (function () {
    function Statically() {
    }
    Statically.prototype.fun3 = function () {
        /*  console.log(nameF); */
        ///////////error
    };
    Statically.nameF = 20;
    return Statically;
}());
var user = new Statically();
/* user.nameF//////////////////////ERROR */
var nameing = Statically.nameF; /////////////////ONLY WAY TO ACCESS STATIC
console.log(nameing);
//////////////////PROTECTED
var Protection = /** @class */ (function () {
    function Protection() {
        this.naming = "sgsg";
        this.namning2 = "333";
    }
    Protection.prototype.func5 = function () {
        console.log(this.naming);
    };
    return Protection;
}());
var ExteProtection = /** @class */ (function (_super) {
    __extends(ExteProtection, _super);
    function ExteProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExteProtection.prototype.func6 = function () {
        console.log(this.naming);
    };
    return ExteProtection;
}(Protection));
var prot = new ExteProtection();
console.log(prot.func6);
console.log(prot.namning2);
