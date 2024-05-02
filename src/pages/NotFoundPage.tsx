import NotFoundPng from "../assets/NotFound.png";

export default function NotFoundPage() {
  return (
    <div className="p-3">
      <div className="font-medium text-lg text-center">
        404 Not Found! <br /> 你正在寻找的页面或许不存在🤔。
      </div>
      <img src={NotFoundPng} />
    </div>
  );
}
