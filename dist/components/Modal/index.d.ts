import { FC } from 'react';
interface Props {
    isOpen: boolean;
    close: () => {};
    title: string;
    children: string;
    confirmAction: () => {};
    footerAction: () => {};
    size: string;
}
export declare const Modal: FC<Props>;
export default Modal;
