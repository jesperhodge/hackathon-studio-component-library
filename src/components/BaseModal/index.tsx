import React, { FC, ReactNode } from "react";
import { ActionRow, ModalDialog } from "@edx/paragon";
import { FormattedMessage } from "@edx/frontend-platform/i18n";
import { bool, func, node, string } from "prop-types";

import messages from "./messages";

export interface Props {
  isOpen: boolean;
  close: () => any;
  title: ReactNode;
  children: ReactNode;
  confirmAction: ReactNode;
  footerAction?: ReactNode;
  size?: string;
}

export const BaseModal: FC<Props> = ({
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
      <ModalDialog.Title>{title}</ModalDialog.Title>
    </ModalDialog.Header>
    <ModalDialog.Body>{children}</ModalDialog.Body>
    <ModalDialog.Footer>
      <ActionRow>
        {footerAction}
        <ActionRow.Spacer />
        <ModalDialog.CloseButton variant="tertiary" onClick={close}>
          <FormattedMessage {...messages.cancelButtonLabel} />
        </ModalDialog.CloseButton>
        {confirmAction}
      </ActionRow>
    </ModalDialog.Footer>
  </ModalDialog>
);
BaseModal.defaultProps = {
  footerAction: null,
  size: "lg",
};

BaseModal.propTypes = {
  isOpen: bool.isRequired,
  close: func.isRequired,
  title: node.isRequired,
  children: node.isRequired,
  confirmAction: node.isRequired,
  footerAction: node,
  size: string,
};
