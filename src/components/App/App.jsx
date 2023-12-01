import * as React from "react";
import clsx from "clsx";
import s from "./App.module.css";
import Home from "../Home";
import ColorGame from "../ColorGame";
import Doable from "../Doable";

import reactIconUrl from "../../assets/react-icon.svg";

const navigation = [
  {
    name: "Color Game",
    to: "/color-game",
  },
  {
    name: "Doable",
    to: "/doable",
  },
];

export const PageContext = React.createContext("/");
function App() {
  const [page, setPage] = React.useState("/");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <button
            className={s.logo}
            onClick={() => {
              /* completar */
              setPage("/");
            }}
          >
            <img src={reactIconUrl} /> React Evaluation
          </button>
          <nav className={s.nav}>
            {navigation.map((item) => (
              <button
                key={item.to}
                className={clsx(s["nav-item"], page === item.to && s.current)}
                onClick={() => {
                  /* completar */
                  setPage(item.to);
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </header>
        <main className={s.main}>
          {/* Utiliza la variable 'page' para renderizar solo uno de los siguientes */}
          {page === "/" && <Home />}
          {page === "/color-game" && <ColorGame />}
          {page === "/doable" && <Doable />}
        </main>
      </div>
    </PageContext.Provider>
  );
}

export default App;
