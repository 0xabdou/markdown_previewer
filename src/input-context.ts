import {createContext} from "react";

type InputContextType = {
  input: string,
  setInput: (newInput: string) => void,
}

const InputContext = createContext<InputContextType>({
  input:'',
  setInput: newInput => null,
});

export default InputContext;