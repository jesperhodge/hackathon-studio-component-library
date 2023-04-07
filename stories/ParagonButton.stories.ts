import type { Meta, StoryObj } from '@storybook/react';

import { ParagonButton } from './ParagonButton';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Paragon/Button',
  component: ParagonButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ParagonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    className: 'mb-2 mb-sm-0',
    children: 'Button'
  },
};
