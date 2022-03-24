/// <reference types="react" />
interface useModalRes {
    showModal: ({ id, show }: any) => JSX.Element;
    closeModal: (id: number) => void;
    closeAllModal: () => void;
}
export default function useModal(): useModalRes;
export {};
