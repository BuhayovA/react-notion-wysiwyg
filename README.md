<p align="center">
  <img src="./assets/demo.gif" alt="Wysiwyg demo" />
</p>

[**DEMO**](https://buhayova.github.io/react-notion-wysiwyg/)

## Use and Setup

`yarn add react-notion-wysiwyg` or `npm install --save react-notion-wysiwyg`

Params:

| Prop                  | Type                                            | Description                                                                                                                                                                              | Default                                                                                                                |
|-----------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `editable`(optional)  | `boolean`                             | This prop use to change the editor mode from "preview" to "edit" mode.                                                                                                                   | true                                                                                                                   |
| `mode`(optional)      | `light` or `dark`                               | This prop use for the editor theme palette.                                                                                                                                              | light                                                                                                                  |
| `defaultValue`(optional)        | `JSONContent` or `string`                       | The default value to use for the editor.                                                                                                                                                 | [`defaultEditorContent`](https://github.com/steven-tey/novel/blob/main/packages/core/src/ui/editor/default-content.tsx) |
| `onUpdate`            | `(editor: EditorType) => void or Promise<void>` | A callback function that is called whenever the editor is updated | `() => {}`                                                                                                                   |
| `onUploadImage`       | `(file: File) => string or Promise<string>`     | A callback function that is called whenever the image upload      | `() => {}`                                                                                                                    |

## Tech Stack

- [Tiptap](https://tiptap.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Cal Sans](https://github.com/calcom/font)

## License

Licensed under the [MIT license](https://github.com/BuhayovA/react-notion-wysiwyg/blob/main/LICENSE)
