import React from 'react';
import { ActionRow, ModalDialog, } from '@edx/paragon';
export const Modal = ({ isOpen, close, title, children, confirmAction, footerAction, size, }) => (<ModalDialog isOpen={isOpen} onClose={close} size={size} variant="default" hasCloseButton isFullscreenOnMobile isFullscreenScroll>
    <ModalDialog.Header>
      <ModalDialog.Title>
        {title}
      </ModalDialog.Title>
    </ModalDialog.Header>
    <ModalDialog.Body>
      {children}
    </ModalDialog.Body>
    <ModalDialog.Footer>
      <ActionRow>
        {footerAction}
        <ActionRow.Spacer />
        <ModalDialog.CloseButton variant="tertiary" onClick={close}>
          SomeMessage
        </ModalDialog.CloseButton>
        {confirmAction}
      </ActionRow>
    </ModalDialog.Footer>
  </ModalDialog>);
export default Modal;
