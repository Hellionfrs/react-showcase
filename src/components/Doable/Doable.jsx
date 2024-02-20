import s from "./Doable.module.css";
import Authenticated from "../Authenticated";
import Unauthenticated from "../Unauthenticated";
import { useAuth } from "../../contexts/authContext";
import Button from "../Button/Button";

function Doable() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Doable</h1>
      <p className={s.description}>Add and filter your most important tasks</p>
      {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
      {isAuthenticated && (
        <Button
          className={s.logout}
          size="sm"
          variant="secondary"
          onClick={() => {
            logout();
          }}
        >
          Log Out
        </Button>
      )}
    </div>
  );
}

export default Doable;
