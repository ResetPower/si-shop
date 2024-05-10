import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import repo from "../inventory/repo";
import Button from "../components/Button";
import { MdClear } from "react-icons/md";

export default function HomePage() {
  const [query, setQuery] = useState(String());

  const onClear = () => {
    setQuery(String());
  };

  return (
    <div className="p-3">
      <div className="p-3">
        <div className="flex items-center space-x-2">
          <Input value={query} onChange={setQuery} placeholder="搜索" />
          <Button onClick={onClear}>
            <MdClear />
            清空
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {query
          ? repo.products
              .filter((prod) => prod.name.indexOf(query) !== -1)
              .map((prod, index) => (
                <Card prod={prod} key={index} keyword={query} />
              ))
          : repo.products.map((prod, index) => (
              <Card prod={prod} key={index} />
            ))}
      </div>
    </div>
  );
}
