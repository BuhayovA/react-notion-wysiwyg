import { BubbleMenu as BaseBubbleMenu } from "@tiptap/react";
import React, { useCallback, useRef } from "react";
import { Instance, sticky } from "tippy.js";
import { v4 as uuid } from "uuid";

import { Toolbar } from "@/components/ui/Toolbar";
import { Icon } from "@/components/ui/Icon";
import { ImageBlockWidth } from "./ImageBlockWidth";
import { MenuProps } from "@/components/menus/types";
import { getRenderContainer } from "@/lib/utils";

export const ImageBlockMenu = ({
  editor,
  appendTo,
}: MenuProps): JSX.Element => {
  const menuRef = useRef<HTMLDivElement>(null);
  const tippyInstance = useRef<Instance | null>(null);

  const getReferenceClientRect = useCallback(() => {
    const renderContainer = getRenderContainer(editor, "node-imageBlock");

    return (
      renderContainer?.getBoundingClientRect() ||
      new DOMRect(-1000, -1000, 0, 0)
    );
  }, [editor]);

  const shouldShow = useCallback(() => editor.isActive("imageBlock"), [editor]);

  const onAlignImageLeft = useCallback(() => {
    editor
      .chain()
      .focus(undefined, { scrollIntoView: false })
      .setImageBlockAlign("left")
      .run();
  }, [editor]);

  const onAlignImageCenter = useCallback(() => {
    editor
      .chain()
      .focus(undefined, { scrollIntoView: false })
      .setImageBlockAlign("center")
      .run();
  }, [editor]);

  const onAlignImageRight = useCallback(() => {
    editor
      .chain()
      .focus(undefined, { scrollIntoView: false })
      .setImageBlockAlign("right")
      .run();
  }, [editor]);

  const onWidthChange = useCallback(
    (value: number) => {
      editor
        .chain()
        .focus(undefined, { scrollIntoView: false })
        .setImageBlockWidth(value)
        .run();
    },
    [editor]
  );

  return (
    <BaseBubbleMenu
      editor={editor}
      pluginKey={`imageBlockMenu-${uuid()}`}
      shouldShow={shouldShow}
      updateDelay={0}
      tippyOptions={{
        offset: [0, 8],
        popperOptions: {
          placement: "auto",
          modifiers: [{ name: "flip", enabled: true }],
        },
        getReferenceClientRect,
        onCreate: (instance: Instance) => (tippyInstance.current = instance),
        appendTo: () => appendTo?.current,
        plugins: [sticky],
        sticky: "popper",
      }}
    >
      <Toolbar.Wrapper shouldShowContent={shouldShow()} ref={menuRef}>
        <Toolbar.Button
          tooltip="Align image left"
          active={editor.isActive("imageBlock", { align: "left" })}
          onClick={onAlignImageLeft}
        >
          <Icon name="AlignHorizontalDistributeStart" />
        </Toolbar.Button>
        <Toolbar.Button
          tooltip="Align image center"
          active={editor.isActive("imageBlock", { align: "center" })}
          onClick={onAlignImageCenter}
        >
          <Icon name="AlignHorizontalDistributeCenter" />
        </Toolbar.Button>
        <Toolbar.Button
          tooltip="Align image right"
          active={editor.isActive("imageBlock", { align: "right" })}
          onClick={onAlignImageRight}
        >
          <Icon name="AlignHorizontalDistributeEnd" />
        </Toolbar.Button>
        <Toolbar.Divider />
        <ImageBlockWidth
          onChange={onWidthChange}
          value={parseInt(editor.getAttributes("imageBlock").width)}
        />
      </Toolbar.Wrapper>
    </BaseBubbleMenu>
  );
};

export default ImageBlockMenu;
