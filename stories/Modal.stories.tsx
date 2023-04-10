import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../src/index';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Test/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    isOpen: false,
    close: () => {},
    title: 'Modal',
    children: "Content",
    confirmAction: () => {}
  },
};
