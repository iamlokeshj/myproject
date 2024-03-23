import { createContext } from "react";

const initialState = {
    loggedin: false,
    setLoggedin: () => {}
  };

const SessionContext = createContext(initialState);

export default SessionContext;
