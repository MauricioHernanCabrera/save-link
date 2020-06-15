import React, { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [title, setTitle] = useState("default-title");
  const [tags, setTags] = useState([]);
  const [links, setLinks] = useState([
    {
      key: "1",
      name: "Mike",
      url: "https://mauriciohernancabrera.github.io",
      tags: [],
      // tags: ["Hola", "Mundo"],
    },
    // {
    //   key: "2",
    //   name: "John",
    //   url: "https://mauriciohernancabrera.github.io",
    //   tags: [],
    //   // tags: ["Hola", "Mundo222"],
    // },
  ]);

  const value = {
    title,
    setTitle,
    tags,
    setTags,
    links,
    setLinks,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
