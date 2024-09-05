"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [rolled, setRolled] = useState(false);

  // Function to simulate dice roll
  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNum);
    setRolled(true); // Mark as rolled
  };

  // Function to reset to dice state after the transition to a circle
  const resetDice = () => {
    setRolled(false);
  };

  return (
    <div className={styles.container}>
      <h1>Roll the Dice</h1>
      <div
        className={`${styles.dice} ${rolled ? styles.circle : ""}`}
        onClick={rolled ? resetDice : rollDice}
      >
        {!rolled && <span>{diceNumber}</span>}
      </div>
      <p>{rolled ? "Click to reset" : "Click the dice to roll"}</p>
    </div>
  );
}
