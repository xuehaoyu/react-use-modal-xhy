import React from 'react';
interface IProps {
    children: any;
}
interface IState {
    listArr: any[];
}
export default class ModalProvider extends React.Component<IProps, IState> {
    private modalId;
    private list;
    constructor(props: IProps);
    handleClose: (id: number) => void;
    handleCloseAll: () => void;
    handleShow: (modal: any) => void;
    render(): JSX.Element;
}
export {};
