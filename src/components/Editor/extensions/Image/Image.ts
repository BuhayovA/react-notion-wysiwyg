import { Image as BaseImage } from "@tiptap/extension-image";

export const Image = BaseImage.configure({ allowBase64: false }).extend({
  group: "block",
});

export default Image;
