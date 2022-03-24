import React from 'react';
import ModalContext from './context';
export default class ModalProvider extends React.Component {
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
        const { Provider } = ModalContext;
        return (React.createElement(Provider, { value: {
                showModal: this.handleShow,
                closeModal: this.handleClose,
                closeAllModal: this.handleCloseAll
            } },
            children,
            this.state.listArr.map((key) => {
                const item = this.list[key];
                console.log('item.Modal____', item.Modal);
                return React.createElement(item.Modal, { key: item.id, show: item.show, id: item.id });
            })));
    }
}
//# sourceMappingURL=provider.js.map