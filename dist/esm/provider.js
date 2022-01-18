import React from 'react';
import ModalContext from './context';
export default class ModalProvider extends React.Component {
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
        const { Provider } = ModalContext;
        return (React.createElement(Provider, { value: {
                show,
                showModal: this.handleShow,
                closeModal: this.handleClose
            } },
            children,
            Modal && React.createElement(Modal, { show: show })));
    }
}
//# sourceMappingURL=provider.js.map