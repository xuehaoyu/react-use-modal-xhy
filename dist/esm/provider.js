import React from 'react';
import ModalContext from './context';
export default class ModalProvider extends React.Component {
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
        const { Provider } = ModalContext;
        return (React.createElement(Provider, { value: {
                showModal: this.handleShow,
                closeModal: this.handleClose,
                closeAllModal: this.handleCloseAll
            } },
            children,
            Object.keys(this.list).forEach((key) => {
                const item = this.list[key];
                return React.createElement(item.Modal, { show: item.show, id: item.id });
            })));
    }
}
//# sourceMappingURL=provider.js.map