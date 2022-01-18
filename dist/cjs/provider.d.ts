import React from 'react';
interface IProps {
    children: any;
}
interface IState {
    show: boolean;
    Modal: any;
}
export default class ModalProvider extends React.Component<IProps, IState> {
    constructor(props: IProps);
    handleClose: () => void;
    handleShow: (modal: any) => void;
    render(): JSX.Element;
}
export {};
