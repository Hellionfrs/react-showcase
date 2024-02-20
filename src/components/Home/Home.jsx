import s from "./Home.module.css";
import reactIconUrl from "../../assets/react-icon-lg.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={s.wrapper}>
      <img src={reactIconUrl} />
      <h1 className={s.title}>React Show Case</h1>
      <p className={s.name}>Fredy Rodriguez</p>
      <div className={s.buttons}>
        <Link to="/color-game" style={{ textDecorationLine: "none" }}>
          <Button variant="outline">Color Game</Button>
        </Link>
        <Link to="/doable" style={{ textDecorationLine: "none" }}>
          <Button variant="outline">Doable</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
