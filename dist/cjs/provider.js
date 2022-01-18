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
        this.handleClose = () => {
            this.setState({
                show: false
            });
        };
        this.handleShow = (modal) => {
            console.log('modal____', modal);
            this.setState({
                show: true
            });
            if (modal) {
                this.setState({
                    Modal: modal
                });
            }
        };
        this.state = {
            show: true,
            Modal: null
        };
    }
    render() {
        const { show, Modal } = this.state;
        const { children } = this.props;
        const { Provider } = context_1.default;
        return (react_1.default.createElement(Provider, { value: {
                show,
                showModal: this.handleShow,
                closeModal: this.handleClose
            } },
            children,
            Modal && react_1.default.createElement(Modal, { show: show })));
    }
}
exports.default = ModalProvider;
//# sourceMappingURL=provider.js.map