import { Link, NavLink, Outlet } from "react-router";

export default function Default() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isActive ? "isActive" : "",
                  isPending ? "isPending" : "",
                  isTransitioning ? "isTransition" : "",
                ].join(" ")
              }
              viewTransition
            >
              {({ isActive, isPending, isTransitioning }) =>
                [
                  isActive ? "isActive" : "none",
                  isPending ? "isPending" : "",
                  isTransitioning ? "isTransition" : "",
                ].join(" ")
              }
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
