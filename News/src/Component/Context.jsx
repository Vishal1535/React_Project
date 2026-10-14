import { createContext, useContext, useState } from "react";
import axios from 'axios'

const newsContext = createContext();

let Fetch = async (url = "india") => {
  let data = await axios(
   `https://newsapi.org/v2//everything?q=${url}&apiKey=84ecc4b29cce4ac781dcd97a964e70c8`,{
    timeout:5000
   }
  );
  return data;
};

let Provide = ({ children }) => {
    let [News,SetNews]=useState([]);
     const [Loader,SetLoader]=useState(true)
    let obj={
        News,
        SetNews,
        Fetch,
        Loader,
        SetLoader
    }
  return (
    <newsContext.Provider value={obj}>
      {children}
    </newsContext.Provider>
  );
};

let UseContext = () => {
  return useContext(newsContext);
};

export {
  Provide,
  UseContext
};