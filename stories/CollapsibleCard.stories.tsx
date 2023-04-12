import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { CollapsibleCard } from "../src/components/CollapsibleCard";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/CollapsibleCard",
  component: CollapsibleCard,
  tags: ["autodocs"],
} satisfies Meta<typeof CollapsibleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Collapsible Card",
    summary: "Summary",
    className: "mw-xs",
    children: (
      <>
        <p>Text paragraph</p>
        <p>Text</p>
        <p>Text</p>
      </>
    ),
  },
};

export const ExtraSections: Story = {
  args: {
    title: "Collapsible Card",
    summary: "Summary",
    className: "mw-xs",
    children: (
      <>
        <p>Text paragraph</p>
        <p>Text</p>
        <p>Text</p>
      </>
    ),
    extraSections: [() => <p>Second Section</p>, () => <p>Third section</p>],
  },
};
