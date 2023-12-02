import s from "./Home.module.css";
import { PageContext } from "../App/App";
import reactIconUrl from "../../assets/react-icon-lg.svg";
import { useContext } from "react";
import Button from "../Button/Button";

function Home() {
  const { setPage } = useContext(PageContext);
  return (
    <div className={s.wrapper}>
      <img src={reactIconUrl} />
      <h1 className={s.title}>React Evaluation</h1>
      <p className={s.name}>Fredy Rodriguez</p>
      <div className={s.buttons}>
        <Button
          variant="outline"
          onClick={() => {
            /* completar */
            setPage("/color-game");
          }}
        >
          Color Game
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            /* completar */
            setPage("/doable");
          }}
        >
          Doable
        </Button>
      </div>
    </div>
  );
}

export default Home;
