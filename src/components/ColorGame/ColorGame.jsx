import * as React from "react";
import s from "./ColorGame.module.css";
import { getRandomColors, getStatus, rgbString, statusMessage } from "./utils";

function ColorGame() {
  const [numOfColors, setNumOfColors] = React.useState(6); //variable de estado onChange
  const [colors, setColors] = React.useState(getRandomColors(numOfColors));
  const [attempts, setAttempts] = React.useState([]);

  const target = Math.floor(Math.random() * colors.length); //random num del 0 al numero de colores
  console.log("num of color", numOfColors)
  console.log("colors", colors)
  console.log("attemps", attempts)
  function handleReset() {
    setAttempts([]);
    setColors(getRandomColors(numOfColors)); // [ [num, num, num], ....[],[] ]
  }

  function handleChangeNumber(event) {
    let nextNumOfColors = Number(event.target.value);
    console.log("handle number change to:",nextNumOfColors)
    setNumOfColors(nextNumOfColors)
    setAttempts([]);
    console.log(getRandomColors(nextNumOfColors))
    setColors(getRandomColors(nextNumOfColors));
  }

  const status = getStatus(attempts, target, numOfColors);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Color Game</h1>
      <p className={s.description}>
        Guess which color correspond to the following RGB code
      </p>

      <div className={s["rgb-wrapper"]}>
        <div className={s.rgb} style={{borderColor: `rgb(${colors[target][0]},0,0)`}}>{colors[target][0]}</div>
        <div className={s.rgb} style={{borderColor: `rgb(0,${colors[target][1]},0)`}}>{colors[target][1]}</div>
        <div className={s.rgb} style={{borderColor: `rgb(0,0,${colors[target][2]})`}}>{colors[target][2]}</div>
      </div>
      <div className={s.dashboard}>
        <div className={s["number-input"]}>
          <label htmlFor="colors"># Colors</label>
          <input
            id="colors"
            type="number"
            value={numOfColors}
            onChange={handleChangeNumber}
            step={3}
            min={3}
            max={9}
          />
        </div>
        <p className={s["game-status"]}>{statusMessage[status]}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={s.squares}>
        {colors.map((color, index) => {
          const backgroundColor = rgbString(color);
          const opacity = attempts.includes(index) ? "0" : "100";

          return (
            <button
              key={index}
              style={{ backgroundColor, opacity }}
              onClick={() => {
                /* completar */
              }}
              className={s.square}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ColorGame;
