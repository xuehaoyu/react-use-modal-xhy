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
        this.handleClose = (id) => {
            const resultArr = [];
            this.state.list.forEach((item) => {
                if (id !== item.id) {
                    resultArr.push(item);
                }
            });
            this.setState({
                list: resultArr
            });
        };
        this.handleCloseAll = () => {
            this.setState({
                list: []
            });
        };
        this.handleShow = (modal) => {
            if (modal) {
                this.modalId++;
                const resultArr = [...this.state.list];
                resultArr.push({
                    id: this.modalId,
                    show: true,
                    Modal: modal
                });
                this.setState({
                    list: resultArr
                });
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
            list.map((item) => (react_1.default.createElement(item.Modal, { show: item.show, id: item.id })))));
    }
}
exports.default = ModalProvider;
//# sourceMappingURL=provider.js.map