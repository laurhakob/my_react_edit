import React, { useContext } from "react"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai"
import "ace-builds/src-noconflict/snippets/html"
import "ace-builds/src-min-noconflict/ext-language_tools"
import { EditorContext } from "../../context/context"
// import "ace-builds/src-noconflict/ext-language_tools"


const Htmleditor = () => {

const { html, setHtml } = useContext(EditorContext)

  return (
      <AceEditor
        placeholder="Write your HTML codes here!"
        mode="html"
        theme="monokai"
        name="editor_html"
        value={html}
        onChange={value => setHtml(value)}
        fontSize={16}
        height={'100%'}
        width={'100%'}
        showPrintMargin={false}
        showGutter={false}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          tabSize: 2,
          useWorker: false
        }}
      />
   
  );
};

export default Htmleditor
