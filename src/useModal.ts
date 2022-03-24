import React from 'react'
import ModalContext from './context'

export default function useModal() {
  return React.useContext(ModalContext) as {
    showModal: ({ id }: any) => void,
    closeModal: (id: number) => void,
    closeAllModal: () => void,
  }
}
