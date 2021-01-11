import {createContext} from "react";

export type Display = 'both' | 'editor' | 'previewer';

type DisplayContextType = {
  display: Display,
  toggleDisplay: (currentDisplay: Display) => void,
}

const DisplayContext = createContext<DisplayContextType>({
  display: 'both',
  toggleDisplay: (currentDisplay: Display) => {},
});

export default  DisplayContext;
