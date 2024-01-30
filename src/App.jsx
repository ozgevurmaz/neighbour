import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

import PassingThoughts from "./PassingThoughts";
import { Introduction } from "./Introduction";

export default function App() {
  const [togglePage, setTogglePage] = useState(false)

  const changePage = () => {
    console.log("click")
    setTogglePage(false);
  }

  return (
    <>
      {
        togglePage ? (
          <Introduction changePage={changePage} />
        ) : (
          <PassingThoughts />
        )
      }

    </>
  );
}
