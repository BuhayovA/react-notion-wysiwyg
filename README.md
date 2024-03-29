> #####  **This library is in active development!**
> Updates are released almost every day, and I hope it will soon work relatively stable and have a convenient API.
>
> Your [feedbacks](https://github.com/BuhayovA/react-notion-wysiwyg/issues) is highly important to us, help make this product better.
>
> This is my first experience in library development, so some errors or improvements might take time, but ultimately they will be addressed, as we are constantly learning! I'll also be glad to welcome contributors!

<p align="center">
  <img src="./assets/demo.gif" alt="Wysiwyg demo" />
</p>

<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/react-notion-wysiwyg.svg?style=for-the-badge)](https://www.npmjs.com/package/react-notion-wysiwyg)
[![npm](https://img.shields.io/npm/dt/react-notion-wysiwyg.svg?style=for-the-badge)](https://www.npmjs.com/package/react-notion-wysiwyg)
[![npm](https://img.shields.io/npm/l/react-notion-wysiwyg?style=for-the-badge)](https://github.com/splitbee/react-notion/blob/main/LICENSE)

</div>

[**DEMO**](https://buhayova.github.io/react-notion-wysiwyg/)

### Install

    yarn add react-notion-wysiwyg
or

    npm install --save react-notion-wysiwyg


### Use and Setup

```jsx
import { Editor } from 'react-notion-wysiwyg';
```

#### Params:

| Prop                  | Type                                           | Description                                                                                                                                                                              | Default                                                                                                                |
|-----------------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `editable`(optional)  | `boolean`                                      | This property is used to change the editor mode from "preview" to "edit" mode.                                                                                                                   | true                                                                                                                   |
| `mode`(optional)      | `light` or `dark`                              | This prop is used to change the editor theme palette.                                                                                                                                              | light                                                                                                                  |
| `defaultValue`(optional)        | `JSONContent` or `string`                      | The default value to use for the editor.                                                                                                                                                 | [`defaultEditorContent`](https://github.com/steven-tey/novel/blob/main/packages/core/src/ui/editor/default-content.tsx) |
| `onUpdate`            | `(editor: EditorType) => void` | A callback function that is called whenever the editor is updated | `() => {}`                                                                                                                   |
| `onUploadImage`       | `(file: File) => string or Promise<string>`    | A callback function that is called whenever the image upload      | `() => {}`                                                                                                                    |

## Tech Stack

- [Tiptap](https://tiptap.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Cal Sans](https://github.com/calcom/font)

## License

Licensed under the [MIT license](https://github.com/BuhayovA/react-notion-wysiwyg/blob/main/LICENSE)
