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
var VotingOptionData = /** @class */ (function (_super) {
    __extends(VotingOptionData, _super);
    function VotingOptionData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VotingOptionData.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("VotingOptionData.ts - LoadFromJson : Not implemented."); };
    /**@internal */
    VotingOptionData.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("VotingOptionData.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    return VotingOptionData;
}(ComplexProperty_1.ComplexProperty));
exports.VotingOptionData = VotingOptionData;
//}