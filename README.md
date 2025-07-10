> ##### 🚧 **This library is in active development again!**
> I'm back to working on this project, and you can expect regular updates, bug fixes, and new features.
>
> Your [feedback](https://github.com/BuhayovA/react-notion-wysiwyg/issues) is highly appreciated — it helps shape the roadmap and prioritize improvements.
>
> This is my first open-source library, and while it may not be perfect yet, I'm constantly learning and improving. Contributions, suggestions, and bug reports are more than welcome!

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
