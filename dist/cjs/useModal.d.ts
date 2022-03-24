export default function useModal(): {
    showModal: ({ id }: any) => void;
    closeModal: (id: number) => void;
    closeAllModal: () => void;
};
