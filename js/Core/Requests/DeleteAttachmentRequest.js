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
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * ## @internal *Not Implemented*
 */
var DeleteAttachmentRequest = /** @class */ (function (_super) {
    __extends(DeleteAttachmentRequest, _super);
    function DeleteAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeleteAttachmentRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("DeleteAttachmentRequest.ts - CreateServiceResponse : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("DeleteAttachmentRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("DeleteAttachmentRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("DeleteAttachmentRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetResponseXmlElementName = function () { throw new Error("DeleteAttachmentRequest.ts - GetResponseXmlElementName : Not implemented."); };
    DeleteAttachmentRequest.prototype.GetXmlElementName = function () { throw new Error("DeleteAttachmentRequest.ts - GetXmlElementName : Not implemented."); };
    DeleteAttachmentRequest.prototype.Validate = function () { throw new Error("DeleteAttachmentRequest.ts - Validate : Not implemented."); };
    /**@internal */
    DeleteAttachmentRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("DeleteAttachmentRequest.ts - WriteElementsToXml : Not implemented."); };
    return DeleteAttachmentRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.DeleteAttachmentRequest = DeleteAttachmentRequest;