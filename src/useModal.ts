import React from 'react'
import ModalContext from './context'

interface useModalRes {
  showModal: any,
  closeModal: any,
  closeAllModal: any,
}

export default function useModal(): useModalRes {
  return React.useContext(ModalContext)
}
