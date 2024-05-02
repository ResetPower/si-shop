import { NavLink } from "react-router-dom";

export default function AppBarItem(props: { children: string; to: string }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive && "text-sky-600"} hover:text-sky-700 transition colors`
      }
      to={props.to}
    >
      {props.children}
    </NavLink>
  );
}
