import React from 'react';
import ModalContext from './context';
export default class ModalProvider extends React.Component {
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
        const { Provider } = ModalContext;
        return (React.createElement(Provider, { value: {
                showModal: this.handleShow,
                closeModal: this.handleClose,
                closeAllModal: this.handleCloseAll
            } },
            children,
            list.map((item) => (React.createElement(item.Modal, { show: item.show, id: item.id })))));
    }
}
//# sourceMappingURL=provider.js.map