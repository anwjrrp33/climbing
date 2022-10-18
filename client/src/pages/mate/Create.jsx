import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MateCreate = () => {
  const editorRef = React.createRef();

  const handleClick = () => {
    editorRef.current.getInstance().exec('bold');
  };

  return (
    <>
      <Editor
        placeholder='등록할 내용을 적어주세요..'
        height='600px'
        initialEditType='wysiwyg'
        useCommandShortcut={true}
        hideModeSwitch={true}
        autofocus={true}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['ul', 'ol'],
          ['hr', 'quote'],
          ['table', 'image', 'link'],
        ]}
        ref={editorRef}
      />
      <button onClick={handleClick}>make bold</button>
    </>
  );
};

export default MateCreate;
