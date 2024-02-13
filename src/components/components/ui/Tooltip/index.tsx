"use client";

import Tippy, { useSingleton } from "@tippyjs/react";
import React from "react";

import { TippyProps, TooltipProps } from "./types";
import { Content } from "tippy.js";

const isMac =
  typeof window !== "undefined"
    ? navigator.platform.toUpperCase().indexOf("MAC") >= 0
    : false;

const ShortcutKey = ({ children }: { children: string }): JSX.Element => {
  const className =
    "inline-flex items-center justify-center w-5 h-5 p-1 text-[0.625rem] rounded font-semibold leading-none border border-neutral-200 text-neutral-500 border-b-2";

  if (children === "Mod") {
    return <kbd className={className}>{isMac ? "⌘" : "Ctrl"}</kbd>; // ⌃
  }

  if (children === "Shift") {
    return <kbd className={className}>⇧</kbd>;
  }

  if (children === "Alt") {
    return <kbd className={className}>{isMac ? "⌥" : "Alt"}</kbd>;
  }

  return <kbd className={className}>{children}</kbd>;
};

export const Tooltip = ({
  children,
  enabled = true,
  title,
  shortcut,
  tippyOptions = {},
}: TooltipProps): React.JSX.Element => {
  const [source, target] = useSingleton({
    disabled: !enabled,
  });

  const content = (
    <span className="flex items-center gap-2 px-2.5 py-1 bg-white border border-neutral-100 rounded-lg shadow-sm z-[999]">
      {title && (
        <span className="text-xs font-medium text-neutral-500">{title}</span>
      )}

      {shortcut && (
        <span className="flex items-center gap-0.5">
          {shortcut.map((shortcutKey) => (
            <ShortcutKey key={shortcutKey}>{shortcutKey}</ShortcutKey>
          ))}
        </span>
      )}
    </span>
  );

  return (
    <>
      <Tippy singleton={source} delay={500} />

      <Tippy
        singleton={target}
        offset={[0, 8]}
        touch={false}
        zIndex={99999}
        appendTo={document.body}
        content={content}
        {...tippyOptions}
      >
        <span>{children}</span>
      </Tippy>
    </>
  );
};

export default Tooltip;
