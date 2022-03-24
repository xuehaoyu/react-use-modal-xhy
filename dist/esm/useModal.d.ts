import React from 'react';
interface useModalRes {
    showModal: ({ id, show }: {
        id: number;
        show: number;
    }) => React.Component;
    closeModal: (id: number) => void;
    closeAllModal: () => void;
}
export default function useModal(): useModalRes;
export {};
