import AppBarItem from "./AppBarItem";
import { FaGithub } from "react-icons/fa";

export default function AppBar() {
  return (
    <div className="p-3 flex items-center border-b space-x-3">
      <div className="font-medium">智信小店</div>
      <AppBarItem to="/">首页</AppBarItem>
      <div className="flex-grow" />
      <AppBarItem to="/cart">购物车</AppBarItem>
      <AppBarItem to="/404">404</AppBarItem>
      <AppBarItem to="/about">关于</AppBarItem>
      <a
        className="hover:text-sky-700 transition colors"
        href="https://github.com/ResetPower/si-shop"
        target="_blank"
      >
        <FaGithub size="1.2em" />
      </a>
    </div>
  );
}
