import React from 'react'
import ModalContext from './context'

interface IProps {
  children: any;
}

interface IState {
  listArr: any[]
}

export default class ModalProvider extends React.Component<IProps, IState> {
  private modalId: number = 0
  private list: any = {}
  constructor (props: IProps) {
    super(props)
    this.state = {
      listArr: []
    }
  }

  handleClose = (id: number) => {
    this.list[id].show = false
    this.setState({
      listArr: Object.keys(this.list)
    })
  }

  handleCloseAll = () => {
    this.list = {}
    this.setState({
      listArr: []
    })
  }

  handleShow = (modal: any) => {
    if (modal) {
      this.modalId++
      this.list[this.modalId] = {
        id: this.modalId,
        show: true,
        Modal: modal
      }
      this.setState({
        listArr: Object.keys(this.list)
      })
    }
  }

  render () {
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
        {this.state.listArr.map((key) => {
          const item: any = this.list[key]
          return <item.Modal key={item.id} show={item.show} id={item.id} ></item.Modal>
        })}
      </Provider>
    )
  }
}
