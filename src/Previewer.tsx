import Header from "./Header";
import './Previewer.scss';
import {useContext} from "react";
import DisplayContext from "./display-context";
import InputContext from "./input-context";
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

function Previewer() {
  const displayContextValue = useContext(DisplayContext);
  const inputContextValue = useContext(InputContext);

  const onClick = () => {
    displayContextValue.toggleDisplay('previewer');
  };

  const display = displayContextValue.display;
  let className = '';
  if (display === 'previewer') {
    className = 'full-screen';
  } else if (display === 'editor') {
    className = 'hidden';
  }

  const rawMarkup = marked(inputContextValue.input);
  const markup = {__html: rawMarkup};

  return (
    <div id="Previewer" className={className}>
      <Header title='Previewer' onClick={onClick}/>
      <div id="preview" dangerouslySetInnerHTML={markup}/>
    </div>
  );
}

export default Previewer;