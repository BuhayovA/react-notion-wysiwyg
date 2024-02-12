import { Editor, NodeViewWrapper } from "@tiptap/react";
import React, { useCallback } from "react";

import { ImageUploader } from "./ImageUploader";

interface Props {
  getPos: () => number;
  editor: Editor;
  extension: {
    options: {
      onUpload: (file: File) => string | Promise<string>;
    };
  };
}

export const ImageUpload: React.FC<Props> = ({ getPos, editor, extension }) => {
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
