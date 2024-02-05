import { useEditor } from '@tiptap/react'
import { ExtensionKit } from '@/extensions/extension-kit'

// types
import { Editor } from '@tiptap/core'

interface IParams {
  handleUpdate: (editor: Editor) => void
}

export const useBlockEditor = ({ handleUpdate }: IParams) => {
  const editor = useEditor(
    {
      autofocus: true,

      onUpdate({ editor }) {
        handleUpdate(editor)
      },
      extensions: [...ExtensionKit()],
      editorProps: {
        attributes: {
          autocomplete: 'off',
          autocorrect: 'off',
          autocapitalize: 'off',
          class: 'min-h-full',
        },
      },
    },
    []
  )

  return { editor }
}
