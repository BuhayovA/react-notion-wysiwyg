import { Editor, NodeViewWrapper } from "@tiptap/react";
import React, { useCallback } from "react";

import { ImageUploader } from "./ImageUploader";

export const ImageUpload = ({
  getPos,
  editor,
  extension,
}: {
  getPos: () => number;
  editor: Editor;
  extension: {
    options: {
      onUpload: (file: File) => string | Promise<string>;
    };
  };
}) => {
  const onUploaded = useCallback(
    (url: string) => {
      if (url) {
        editor
          .chain()
          .setImageBlock({ src: url })
          .deleteRange({ from: getPos(), to: getPos() })
          .focus()
          .run();
      }
    },
    [getPos, editor]
  );

  return (
    <NodeViewWrapper>
      <div className="p-0 m-0" data-drag-handle>
        <ImageUploader
          onUploaded={onUploaded}
          onUpload={extension.options.onUpload}
        />
      </div>
    </NodeViewWrapper>
  );
};

export default ImageUpload;
