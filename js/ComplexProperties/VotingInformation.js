"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComplexProperty_1 = require("./ComplexProperty");
var VotingInformation = /** @class */ (function (_super) {
    __extends(VotingInformation, _super);
    function VotingInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VotingInformation.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("VotingInformation.ts - LoadFromJson : Not implemented."); };
    /**@internal */
    VotingInformation.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("VotingInformation.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    return VotingInformation;
}(ComplexProperty_1.ComplexProperty));
exports.VotingInformation = VotingInformation;
//}