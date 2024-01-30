import React, { useState, useEffect } from "react";

const intro = [
    "Some days I feel I'd make a good sunset",
    "Some days I just don't wanna give up yet",
    "Some days it's hard to breathe",
    "Some days I'm over being me",
    "Some days I try my best to seem happy",
    "Some days this place seems better off without me",
    "Some days I'm overwhelmed",
    "Some days I'm lost inside this hell"
];

const lastSentence = "in any condition i am here to listen you";

const introduction =
    [
        "Sometimes we want to speak with someone but we don't want to bother them at the same time.",
        "We don't want to repeat things, over and over again.",
        "But I am here for you, neighbour!",
        "Don't afraid, I have a fish memory.",
        "I just remember things for 15 seconds",
        "All I want you to do is writing me anything for 5 minutes.",
        "Now, tell me what is bothering you?"
    ];

export function Introduction() {
    const [visibleItems, setVisibleItems] = useState([]);
    const [displayButton, setDisplayButton] = useState(false);

    useEffect(() => {
        const delay = 1000;
        let timeoutId;

        introduction.forEach((item, index) => {
            timeoutId = setTimeout(() => {
                setVisibleItems((prevVisibleItems) => [...prevVisibleItems, item]);
            }, index * delay);
            ;
        });

        setTimeout(() => {
            clearTimeout(timeoutId);
            setDisplayButton(true);
          }, introduction.length * delay);
        
          return () => {
            clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
          };
        }, []);

    return (
        <div className="Introduction">
            <h1>Hello Neighbour!</h1>
            {visibleItems.map((intro, index) => (
                <p key={index} className="Intro">
                    {intro}
                </p>
            ))
            }
            {displayButton && <button> Ready!</button>
            }
        </div >
    )


}