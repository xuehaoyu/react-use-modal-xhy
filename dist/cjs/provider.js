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
            delete this.list[id];
            this.setState({
                listArr: Object.keys(this.list)
            });
        };
        this.handleCloseAll = () => {
            this.list = {};
            this.setState({
                listArr: []
            });
        };
        this.handleShow = (modal) => {
            if (modal) {
                this.modalId++;
                this.list[this.modalId] = {
                    id: this.modalId,
                    show: true,
                    Modal: modal
                };
                this.setState({
                    listArr: Object.keys(this.list)
                });
            }
        };
        this.state = {
            listArr: []
        };
    }
    render() {
        const { children } = this.props;
        const { Provider } = context_1.default;
        return (react_1.default.createElement(Provider, { value: {
                showModal: this.handleShow,
                closeModal: this.handleClose,
                closeAllModal: this.handleCloseAll
            } },
            children,
            this.state.listArr.map((key) => {
                const item = this.list[key];
                return react_1.default.createElement(item.Modal, { key: item.id, show: item.show, id: item.id });
            })));
    }
}
exports.default = ModalProvider;
//# sourceMappingURL=provider.js.map