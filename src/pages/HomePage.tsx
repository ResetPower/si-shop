import { useRef } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import repo from "../inventory/repo";
import Button from "../components/Button";
import { MdSearch } from "react-icons/md";
import { useForceUpdate } from "../utils";

export default function HomePage() {
  const ref = useRef<HTMLInputElement>(null);
  const forceUpdate = useForceUpdate();

  return (
    <div className="p-3">
      <div className="p-3">
        <div className="flex items-center space-x-2">
          <Input ref={ref} placeholder="搜索" />
          <Button onClick={forceUpdate}>
            <MdSearch />
            搜索
          </Button>
        </div>
        <div className="text-xs">
          清空搜索框内容以显示全部产品，按搜索键以更新搜索关键词。
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {ref.current?.value
          ? repo.products
              .filter(
                (prod) =>
                  prod.name.indexOf(ref.current?.value ?? String()) !== -1
              )
              .map((prod, index) => (
                <Card prod={prod} key={index} keyword={ref.current?.value} />
              ))
          : repo.products.map((prod, index) => (
              <Card prod={prod} key={index} />
            ))}
      </div>
    </div>
  );
}
