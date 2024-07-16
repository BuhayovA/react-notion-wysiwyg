import { useMemo } from "react";
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React from "react";
import { Icon } from "@/components/ui/Icon";
import { Toolbar } from "@/components/ui/Toolbar";
import { Button } from "@/components/ui/Button";

export const DBlockNodeView: React.FC<NodeViewProps> = ({
  node,
  getPos,
  editor,
}) => {
  const isTable = useMemo(() => {
    const { content } = node.content as any;

    return content[0].type.name === "table";
  }, [node.content]);

  const createNodeAfter = () => {
    const pos = getPos() + node.nodeSize;

    editor.commands.insertContentAt(pos, {
      type: "dBlock",
      content: [
        {
          type: "paragraph",
        },
      ],
    });
  };

  return (
    <NodeViewWrapper as="div">
      <section className="wrapper-section" aria-label="left-menu">
        <Button
          type="button"
          variant="secondary"
          className="gap-1 px-1 w-auto"
          onClick={createNodeAfter}
        >
          <Icon name="Plus" />
        </Button>
        <Button
          draggable
          type="button"
          data-drag-handle
          variant="secondary"
          className="gap-1 px-1 w-auto"
        >
          <Icon name="GripVertical" />
        </Button>
      </section>

      <NodeViewContent />
    </NodeViewWrapper>
  );
};
