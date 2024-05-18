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
      <div className="rounded p-3 m-3 bg-sky-400 text-white">
        <div className="text-lg font-semibold">公告</div>
        <div className="font-semibold">关于配送</div>
        <div className="text-sm">
          <div>订单统一考试周后送 即高考假前 感谢各位理解</div>
          <div>需要邮寄服务请联系：MELLO-VOURRY</div>
        </div>
        <div className="font-semibold">关于商品实物</div>
        <div className="text-sm">
          3D 打印品会有层纹瑕疵 可参考智能信息社 4 月 15 日编程大冲刺活动奖品
          实物商品图不全后续会增加
        </div>
        <div className="font-semibold">关于售后</div>
        <div className="text-sm">
          售后期为收到商品后两周 超出售后期一概不负责
        </div>
        <div className="font-semibold">关于 3D 代打服务</div>
        <div className="text-sm">需要 3D 代打服务联系：MELLO-VOURRY</div>
        <div className="font-semibold">关于下单</div>
        <div className="text-sm">(｡ì _ í｡) (@^^)/~~~ (≧∇≦)</div>
        <div className="text-sm">
          网站异常、误操作、误支付等任何问题有关网站和下单的疑问请联系：resetpower
        </div>
        <div className="text-sm">* 本公告中给出的联系方式均为微信号</div>
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
