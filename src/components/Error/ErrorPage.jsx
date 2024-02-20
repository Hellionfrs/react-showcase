import { Link, useRouteError } from "react-router-dom";
import s from "./ErrorPage.module.css";
import Button from "../Button/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={s["error-page"]}>
      <h1> Oops! 🤯</h1>
      <p>Sorry, an expected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </div>
  );
}
