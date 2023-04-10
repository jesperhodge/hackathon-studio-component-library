import React, { FC } from 'react';
import PropTypes from 'prop-types';

import {
  ActionRow,
  ModalDialog,
} from '@edx/paragon';

interface Props {
  isOpen: boolean;
  close: () => {};
  title: string;
  children: string;
  confirmAction: () => {};
  footerAction: () => {};
  size: string;
}

export const Modal: FC<Props> = ({
  isOpen,
  close,
  title,
  children,
  confirmAction,
  footerAction,
  size,
}) => (
  <ModalDialog
    isOpen={isOpen}
    onClose={close}
    size={size}
    variant="default"
    hasCloseButton
    isFullscreenOnMobile
    isFullscreenScroll
  >
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
  </ModalDialog>
);

export default Modal;
