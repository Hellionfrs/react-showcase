import s from "./Home.module.css";
import { PageContext } from "../App/App";
import reactIconUrl from "../../assets/react-icon-lg.svg";
import { useContext } from "react";

function Home() {
  const { setPage } = useContext(PageContext);
  return (
    <div className={s.wrapper}>
      <img src={reactIconUrl} />
      <h1 className={s.title}>React Evaluation</h1>
      <p className={s.name}>Nombre Apellido</p>
      <div className={s.buttons}>
        <button
          onClick={() => {
            /* completar */
            setPage("/color-game")
          }}
        >
          Color Game
        </button>
        <button
          onClick={() => {
            /* completar */
            setPage("/doable")
          }}
        >
          Doable
        </button>
      </div>
    </div>
  );
}

export default Home;
