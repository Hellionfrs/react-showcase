import * as React from "react";
import clsx from "clsx";
import s from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import reactIconUrl from "../../assets/react-icon.svg";
import { AuthProvider } from "../../contexts/authContext";

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
  return (
    <AuthProvider>
      <div className={s.wrapper}>
        <header className={s.header}>
          <Link className={s.logo}>
            <img src={reactIconUrl} />ShowCase
          </Link>
          <nav className={s.nav}>
            {navigation.map((item) => (
              <NavLink
                to={item.to}
                key={item.to}
                className={clsx(s["nav-item"], ({ isActive, isPending }) =>
                  isPending ? s.pending : isActive ? s.current : ""
                )}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </header>
        <main className={s.main}>
          <Outlet />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
