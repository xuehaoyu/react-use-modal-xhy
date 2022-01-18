import React from 'react'
import ModalContext from './context'

interface IProps {
  children: any;
}

interface IState {
  list: any[];
}

export default class ModalProvider extends React.Component<IProps, IState> {
  private modalId: number = 0
  private list: any = {}
  constructor(props: IProps) {
    super(props)
    this.state = {
      list: [],
    }
  }

  handleClose = (id: number) => {
    this.list[id].show = false
  }

  handleCloseAll = () => {
    this.list = {}
  }

  handleShow = (modal: any) => {
    if (modal) {
      this.modalId++
      this.list[this.modalId] = {
        id: this.modalId,
        show: true,
        Modal: modal
      }
    }
  }

  render() {
    const { list } = this.state
    const { children } = this.props
    const { Provider } = ModalContext
    return (
      <Provider
        value={{
          showModal: this.handleShow,
          closeModal: this.handleClose,
          closeAllModal: this.handleCloseAll
        }}
      >
        {children}
        {Object.keys(this.list).forEach((key) => {
          const item: any = this.list[key]
          return <item.Modal show={item.show} id={item.id} ></item.Modal>
        })}
      </Provider>
    )
  }
}
