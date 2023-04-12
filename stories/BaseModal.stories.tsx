import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { BaseModal, Props } from "../src/components/BaseModal";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/BaseModal",
  component: BaseModal,
  tags: ["autodocs"],
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          Toggle Modal
        </button>
        <BaseModal
          {...args}
          isOpen={open}
          close={() => {
            setOpen(false);
          }}
        />
      </>
    );
  },
  args: {
    isOpen: false,
    close: () => {},
    title: "Modal",
    children: "Content",
    confirmAction: "Confirm",
  },
};
