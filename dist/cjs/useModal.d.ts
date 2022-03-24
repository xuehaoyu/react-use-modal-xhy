interface useModalRes {
    showModal: any;
    closeModal: (id: number) => void;
    closeAllModal: () => void;
}
export default function useModal(): useModalRes;
export {};
