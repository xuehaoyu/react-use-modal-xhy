"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const context_1 = __importDefault(require("./context"));
class ModalProvider extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.modalId = 0;
        this.list = {};
        this.handleClose = (id) => {
            this.list[id].show = false;
        };
        this.handleCloseAll = () => {
            this.list = {};
        };
        this.handleShow = (modal) => {
            if (modal) {
                this.modalId++;
                this.list[this.modalId] = {
                    id: this.modalId,
                    show: true,
                    Modal: modal
                };
            }
        };
        this.state = {
            list: [],
        };
    }
    render() {
        const { list } = this.state;
        const { children } = this.props;
        const { Provider } = context_1.default;
        return (react_1.default.createElement(Provider, { value: {
                showModal: this.handleShow,
                closeModal: this.handleClose,
                closeAllModal: this.handleCloseAll
            } },
            children,
            Object.keys(this.list).forEach((key) => {
                const item = this.list[key];
                return react_1.default.createElement(item.Modal, { show: item.show, id: item.id });
            })));
    }
}
exports.default = ModalProvider;
//# sourceMappingURL=provider.js.map