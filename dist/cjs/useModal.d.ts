interface useModalRes {
    showModal: ({ id, show }: any) => void;
    closeModal: (id: number) => void;
    closeAllModal: () => void;
}
export default function useModal(): useModalRes;
export {};
