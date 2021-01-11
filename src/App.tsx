import './App.scss';
import Editor from "./Editor";
import Previewer from "./Previewer";
import {useEffect, useState} from "react";
import DisplayContext, {Display} from "./display-context";
import InputContext from "./input-context";


function App() {
  const [display, setDisplay] = useState<Display>('both');
  const [input, setInput] = useState('');

  const toggleDisplay = (d: Display) => {
    if (display === d) setDisplay('both');
    else setDisplay(d);
  };

  useEffect(() => {
    fetch('default.md')
      .then(res => res.text())
      .then(text => setInput(text));
    stuff();
  }, []);

  const stuff = () => {
    const appHeight = () => {
      const doc = document.documentElement;
      const height = window.innerHeight;
      console.log(`height is ${height}`);
      doc.style.setProperty('--app-height', `${height}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  };

  return (
    <DisplayContext.Provider value={{display, toggleDisplay}}>
      <InputContext.Provider value={{input, setInput}}>
        <div className="App">
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          <Editor/>
          <Previewer/>
        </div>
      </InputContext.Provider>
    </DisplayContext.Provider>
  );
}

export default App;
