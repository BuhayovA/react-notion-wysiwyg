import type { Meta, StoryObj } from "@storybook/react";

import Editor, { EditorProps } from "./components/BlockEditor";

const meta: Meta<EditorProps> = {
  title: "WYSIWYG/Editor",
  component: Editor,
  tags: ["autodocs"],
  argTypes: {
    onUploadImage: () => "https://pixy.org/src/477/4774988.jpg",
  },
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

export const ReadOnly: Story = {
  args: {
    mode: "light",
    editable: false,
    defaultValue:
      '<div data-type="horizontalRule"><hr></div><table style="minWidth: 75px"><colgroup><col><col><col></colgroup><tbody><tr><td colspan="1" rowspan="1"><p>Preview</p></td><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p>Preview</p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p></p></td><td colspan="1" rowspan="1"><p>Preview</p></td></tr></tbody></table><div data-type="columns" class="layout-two-column"><div data-position="left" data-type="column"><p><span style="color: #000000"><mark data-color="#fdba74" style="background-color: #fdba74; color: inherit">LPreview</mark></span></p></div><div data-position="right" data-type="column"><p><mark data-color="#a5b4fc" style="background-color: #a5b4fc; color: inherit">RPreview</mark></p></div></div><figure data-type="blockquoteFigure"><div><blockquote><p>Preview</p></blockquote><figcaption>A. Preview</figcaption></div></figure><p></p>',
  },
};
