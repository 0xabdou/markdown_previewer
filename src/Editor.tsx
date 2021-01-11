import './Editor.scss';
import Header from "./Header";
import {ChangeEvent, useContext} from "react";
import DisplayContext from "./display-context";
import InputContext from "./input-context";


function Editor() {
  const displayContextValue = useContext(DisplayContext);
  const inputContextValue = useContext(InputContext);

  const onClick = () => {
    displayContextValue.toggleDisplay('editor');
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    inputContextValue.setInput(e.target.value);
  };

  const display = displayContextValue.display;
  let editorClassName = '';
  let outputClassName = '';
  if (display === 'editor') {
    editorClassName = 'full-screen';
    outputClassName = 'no-resize';
  } else if (display === 'previewer') {
    editorClassName = 'hidden';
  }

  const input = inputContextValue.input;
  return (
    <div id='Editor' className={editorClassName}>
      <Header title='Editor' onClick={onClick}/>
      <textarea id='editor' onChange={onChange} value={input} className={outputClassName}/>
    </div>
  );
}

export default Editor;