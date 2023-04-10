import React from 'react';
import { ActionRow, ModalDialog, } from '@edx/paragon';
export var Modal = function (_a) {
    var isOpen = _a.isOpen, close = _a.close, title = _a.title, children = _a.children, confirmAction = _a.confirmAction, footerAction = _a.footerAction, size = _a.size;
    return (React.createElement(ModalDialog, { isOpen: isOpen, onClose: close, size: size, variant: "default", hasCloseButton: true, isFullscreenOnMobile: true, isFullscreenScroll: true },
        React.createElement(ModalDialog.Header, null,
            React.createElement(ModalDialog.Title, null, title)),
        React.createElement(ModalDialog.Body, null, children),
        React.createElement(ModalDialog.Footer, null,
            React.createElement(ActionRow, null,
                footerAction,
                React.createElement(ActionRow.Spacer, null),
                React.createElement(ModalDialog.CloseButton, { variant: "tertiary", onClick: close }, "SomeMessage"),
                confirmAction))));
};
export default Modal;
