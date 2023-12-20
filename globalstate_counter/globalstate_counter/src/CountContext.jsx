import { createContext } from "react";
import React, {useState} from "react";
export const CountContext = createContext();

const CounterContextProvider = ({children}) => {
   const [counter, setCounter] = useState(0);

return(
    <CountContext.Provider value= {{counter, setCounter}} >
      {children}
   </CountContext.Provider>
)
};

export default CounterContextProvider;