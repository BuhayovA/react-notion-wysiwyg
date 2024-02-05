import type { Meta, StoryObj } from "@storybook/react";

import Editor, { EditorProps } from "./components/BlockEditor";

const meta: Meta<EditorProps> = {
  title: "WYSIWYG/Editor",
  component: Editor,
  tags: ["autodocs"],
} satisfies Meta<EditorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    mode: "light",
  },
};

export const Dark: Story = {
  args: {
    mode: "dark",
  },
};
