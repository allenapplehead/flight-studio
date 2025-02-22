import React, { useState, createContext } from "react";
export const Context = createContext("light");
export const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
export default function Home() {
  return (<div></div>);
}