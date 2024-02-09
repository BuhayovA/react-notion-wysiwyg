> ### This library is in active development!
> Updates are released almost every day, and I hope it will soon work relatively stable and have a convenient API.
> 
> _Your [feedbacks](https://github.com/BuhayovA/react-notion-wysiwyg/issues) is highly important to us, help make this product better._
> 
> _This is my first experience in library development, so some errors or improvements might take time, but ultimately they will be addressed, as we are constantly learning! I'll also be glad to welcome `contributors`!_

<p align="center">
  <img src="./assets/demo.gif" alt="Wysiwyg demo" />
</p>

[**DEMO**](https://buhayova.github.io/react-notion-wysiwyg/)

## Use and Setup

`yarn add react-notion-wysiwyg` or `npm install --save react-notion-wysiwyg`

Params:

| Prop                  | Type                                            | Description                                                                                                                                                                              | Default                                                                                                                |
|-----------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `editable`(optional)  | `boolean`                                       | This property is used to change the editor mode from "preview" to "edit" mode.                                                                                                                   | true                                                                                                                   |
| `mode`(optional)      | `light` or `dark`                               | This prop is used to change the editor theme palette.                                                                                                                                              | light                                                                                                                  |
| `defaultValue`(optional)        | `JSONContent` or `string`                       | The default value to use for the editor.                                                                                                                                                 | [`defaultEditorContent`](https://github.com/steven-tey/novel/blob/main/packages/core/src/ui/editor/default-content.tsx) |
| `onUpdate`            | `(editor: EditorType) => void or Promise<void>` | A callback function that is called whenever the editor is updated | `() => {}`                                                                                                                   |
| `onUploadImage`       | `(file: File) => string or Promise<string>`     | A callback function that is called whenever the image upload      | `() => {}`                                                                                                                    |

## Tech Stack

- [Tiptap](https://tiptap.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Cal Sans](https://github.com/calcom/font)

## License

Licensed under the [MIT license](https://github.com/BuhayovA/react-notion-wysiwyg/blob/main/LICENSE)
