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
var GroupMember = /** @class */ (function (_super) {
    __extends(GroupMember, _super);
    function GroupMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupMember.prototype.AddressInformationChanged = function (complexProperty) { throw new Error("GroupMember.ts - AddressInformationChanged : Not implemented."); };
    GroupMember.prototype.InternalToJson = function (service) { throw new Error("GroupMember.ts - InternalToJson : Not implemented."); };
    GroupMember.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("GroupMember.ts - LoadFromJson : Not implemented."); };
    /**@internal */
    GroupMember.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("GroupMember.ts - ReadAttributesFromXml : Not implemented."); };
    /**@internal */
    GroupMember.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("GroupMember.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    /**@internal */
    GroupMember.prototype.WriteAttributesToXml = function (writer) { throw new Error("GroupMember.ts - WriteAttributesToXml : Not implemented."); };
    /**@internal */
    GroupMember.prototype.WriteElementsToXml = function (writer) { throw new Error("GroupMember.ts - WriteElementsToXml : Not implemented."); };
    return GroupMember;
}(ComplexProperty_1.ComplexProperty));
exports.GroupMember = GroupMember;
//}