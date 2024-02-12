import { JSONContent, useEditor } from "@tiptap/react";
import { ExtensionKit } from "@/extensions/extension-kit";

// types
import { Editor } from "@tiptap/core";

interface IParams {
  editable?: boolean;
  defaultValue?: JSONContent | string;
  handleUpdate: (editor: Editor) => void;
  onUploadImage: (file: File) => string | Promise<string>;
}

export const useBlockEditor = ({
  handleUpdate,
  defaultValue,
  editable,
  onUploadImage,
}: IParams) => {
  const editor = useEditor(
    {
      editable,
      content: defaultValue,
      autofocus: true,
      onUpdate({ editor }) {
        handleUpdate(editor);
      },
      extensions: [...ExtensionKit({ onUpload: onUploadImage })],
      editorProps: {
        attributes: {
          autocomplete: "off",
          autocorrect: "off",
          autocapitalize: "off",
          class: "min-h-full",
        },
      },
    },
    []
  );

  return { editor };
};
