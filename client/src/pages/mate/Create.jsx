import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import React from 'react';

const MateCreate = () => {
  const editorRef = React.createRef();

  const handleClick = () => {
    editorRef.current.getInstance().exec('bold');
  };

  return (
    <>
      <Editor
        initialValue='hello react editor world!'
        previewStyle='vertical'
        height='600px'
        initialEditType='wysiwyg'
        useCommandShortcut={true}
        ref={editorRef}
      />
      <button onClick={handleClick}>make bold</button>
    </>
  );
};

export default MateCreate;
