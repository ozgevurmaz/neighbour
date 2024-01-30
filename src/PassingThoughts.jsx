import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { AddThoughtForm } from "./assets/AddThoughtForm";
import { Thought } from "./assets/Thought";
import { generateId, getNewExpirationTime } from "./assets/utilities";

import { FaArrowAltCircleDown } from "react-icons/fa";

import "./App.css";

export default function PassingThoughts() {

  const [remainingTime, setRemainingTime] = useState(2 * 60);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 10 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
      } else {
        setMinutes(Math.floor(remainingTime / 60));
        setSeconds(remainingTime % 60);
      }

      setRemainingTime(remainingTime - 1)
    }, 1000)
    return (() => clearInterval(timer))
  })

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) => thoughts.filter(thought => thought.id !== thoughtIdToRemove));
  };

  const handleClick = () =>{
    setRemainingTime(2*60)
  }


  return (<div className="PassingThoughts">
    {remainingTime > 0 ?
      (
        <div>
          <header>
            <h1>Passing Thoughts</h1>
            <h1>{minutes}:{seconds < 10 ? `0${seconds}` : `${seconds}`}</h1>
          </header>
          <main>
            <AddThoughtForm addThought={addThought} />
            <ul className="thoughts">
              {thoughts.map((thought) => (
                <Thought
                  key={thought.id}
                  thought={thought}
                  removeThought={removeThought}
                />
              ))}
            </ul>
          </main>
        </div>
      ) : (
        <div className="CenterFlex">
          <h1>Time is Up</h1>
          <h2>Start Again</h2>
          <button className="StartButton" onClick={handleClick}> 
          <FaArrowAltCircleDown />
          </button>
        </div>
      )
    } </div>
  );
}

