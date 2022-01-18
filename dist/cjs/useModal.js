"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const context_1 = __importDefault(require("./context"));
function useModal() {
    return react_1.default.useContext(context_1.default);
}
exports.default = useModal;
//# sourceMappingURL=useModal.js.map