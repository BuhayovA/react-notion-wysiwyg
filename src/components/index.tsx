"use client";

import React, { useRef } from "react";

// libs
import { EditorContent, JSONContent } from "@tiptap/react";

// hooks
import { useDarkmode } from "@/hooks/useDarkmode";
import { useBlockEditor } from "@/hooks/useBlockEditor";

// types
import { Editor as EditorType } from "@tiptap/core";

// components
import { LinkMenu, TextMenu } from "@/components/menus";
import { ColumnsMenu } from "@/extensions/MultiColumn/menus";
import { TableColumnMenu, TableRowMenu } from "@/extensions/Table/menus";
import ImageBlockMenu from "@/extensions/ImageBlock/components/ImageBlockMenu";

// views
import "./editor.css";
import "./globals.css";
import "./styles/index.css";
import "./styles/partials/code.css";
import "./styles/partials/lists.css";
import "./styles/partials/table.css";
import "./styles/partials/collab.css";
import "./styles/partials/blocks.css";
import "./styles/partials/animations.css";
import "./styles/partials/typography.css";
import "./styles/partials/placeholder.css";
import { Toaster } from "react-hot-toast";

interface EditorProps {
  /**
   * This prop use to change the editor mode from "preview" to "edit" mode.
   * Defaults to 'light'.
   */
  editable?: boolean;
  /**
   * This prop use for the editor theme palette.
   * Defaults to 'light'.
   */
  mode?: "dark" | "light";
  /**
   * The default value to use for the editor.
   * Defaults to defaultEditorContent.
   */
  defaultValue?: JSONContent | string;
  /**
   * A callback function that is called whenever the editor is updated
   */
  onUpdate?: (editor: EditorType) => void;
  /**
   * A callback function that is called whenever the image upload
   */
  onUploadImage?: (file: File) => string | Promise<string>;
}

const Editor: React.FC<EditorProps> = ({
  onUpdate = () => {},
  editable = true,
  mode = "light",
  defaultValue,
  onUploadImage,
}) => {
  const { darkMode, lightMode } = useDarkmode();
  const menuContainerRef = useRef(null);
  const editorRef = useRef<HTMLDivElement | null>(null);

  const { editor } = useBlockEditor({
    handleUpdate: onUpdate,
    onUploadImage,
    defaultValue,
  });

  React.useEffect(() => {
    if (!editor) {
      return undefined;
    }

    editor.setEditable(editable);
  }, [editor, editable]);
  React.useEffect(() => (mode === "light" ? lightMode() : darkMode()), [mode]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex h-full" ref={menuContainerRef}>
      <div className="relative flex flex-col flex-1 h-full">
        <EditorContent
          editor={editor}
          ref={editorRef}
          className="flex-1 overflow-y-auto"
        />
        <LinkMenu editor={editor} appendTo={menuContainerRef} />
        <TextMenu editor={editor} />
        <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
        <TableRowMenu editor={editor} appendTo={menuContainerRef} />
        <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
        <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
      </div>

      <Toaster />
    </div>
  );
};

export { Editor, EditorProps };
