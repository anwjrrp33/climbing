import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

const MateCreate = () => {
  const [content, setContent] = useState();
  const editorRef = React.createRef();

  const handleSubmit = () => {
    // '에디터에서 블록 지정한 텍스트를 bold 지정하라'
    // editorRef.current.getInstance().exec('bold');

    console.log(content); // 서버에 넘길 작성 내용
  };

  const handleChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    setContent(data);
  };

  return (
    <>
      <Editor
        placeholder='등록할 내용을 적어주세요..'
        height='400px'
        initialEditType='wysiwyg'
        hideModeSwitch={true}
        useCommandShortcut={true}
        autofocus={true}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['ul', 'ol'],
          ['hr', 'quote'],
          ['table', 'image', 'link'],
        ]}
        plugins={[colorSyntax]}
        language='ko-KR'
        ref={editorRef}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>등록</button>
    </>
  );
};

export default MateCreate;
