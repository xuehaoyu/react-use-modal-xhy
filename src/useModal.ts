import React from 'react'
import ModalContext from './context'

interface useModalRes {
  showModal: ({ id, show }: {
    id: number,
    show: number
  }) => React.Component,
  closeModal: (id: number) => void,
  closeAllModal: () => void,
}

export default function useModal(): useModalRes {
  return React.useContext(ModalContext)
}
