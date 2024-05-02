import Card from "../components/Card";
import Input from "../components/Input";
import repo from "../inventory/repo";

export default function HomePage() {
  return (
    <div className="p-3">
      <div className="p-3">
        <Input placeholder="搜索功能暂时不可用😮‍💨。" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Card prod={repo.find(0)!} />
      </div>
    </div>
  );
}
