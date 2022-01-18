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
  constructor(props: IProps) {
    super(props)
    this.state = {
      list: [],
    }
  }

  handleClose = (id: number) => {
    const resultArr: any = []
    this.state.list.forEach((item: any) => {
      if (id !== item.id) {
        resultArr.push(item)
      }
    })
    this.setState({
      list: resultArr
    })
  }

  handleCloseAll = () => {
    this.setState({
      list: []
    })
  }

  handleShow = (modal: any) => {
    if (modal) {
      this.modalId++
      const resultArr: any = [...this.state.list]
      resultArr.push({
        id: this.modalId,
        show: true,
        Modal: modal
      })
      this.setState({
        list: resultArr
      })
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
        {list.map((item: any) => (<item.Modal show={item.show} id={item.id} />))}
      </Provider>
    )
  }
}
