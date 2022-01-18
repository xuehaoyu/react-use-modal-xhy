import React from 'react'
import ModalContext from './context'

interface IProps {
  children: any;
}

interface IState {
  show: boolean;
  Modal: any;
}

export default class ModalProvider extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props)
    this.state = {
      show: true,
      Modal: null
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  handleShow = (modal: any) => {
    console.log('modal____', modal)
    this.setState({
      show: true
    })
    if (modal) {
      this.setState({
        Modal: modal
      })
    }
  }

  render () {
    const { show, Modal } = this.state
    const { children } = this.props
    const { Provider } = ModalContext
    return (
      <Provider
        value={{
          show,
          showModal: this.handleShow,
          closeModal: this.handleClose
        }}
      >
        {children}
        {Modal && <Modal show={show} />}
      </Provider>
    )
  }
}
