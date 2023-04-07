import React from 'react';
import { Button } from '@edx/paragon';

import { IntlProvider } from 'react-intl';
import { messages as paragonMessages } from '@edx/paragon';


export const ParagonButton = ({
  ...props
}) => {
  return (
    <IntlProvider locale={'en-us'} messages={paragonMessages['en-us']}>
      <Button {...props} />
    </IntlProvider>
  );
};
