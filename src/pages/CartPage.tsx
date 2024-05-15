import { useEffect, useState } from "react";
import Tile from "../components/Tile";
import { cart } from "../inventory/cart";
import repo from "../inventory/repo";
import { useForceUpdate } from "../utils";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { invoices } from "../inventory/invoice";
import Select from "../components/Select";
import Input from "../components/Input";
import { applyChanges, isUserInfoComplete, userInfo } from "../inventory/user";

export default function CartPage() {
  const [total, setTotal] = useState(cart.calculateTotal());
  const navigate = useNavigate();
  const forceUpdate = useForceUpdate();
  const ap = cart.availableProducts;
  const [saved, setSaved] = useState(false);
  const [warned, setWarned] = useState(false);
  const [grade, setGrade] = useState(userInfo.grade);
  const [clazz, setClazz] = useState(userInfo.clazz);
  const [name, setName] = useState(userInfo.name);

  const onApply = () => {
    userInfo.grade = grade;
    userInfo.clazz = clazz;
    userInfo.name = name;
    applyChanges();
    setSaved(true);
  };

  useEffect(() => cart.listen(() => setTotal(cart.calculateTotal())), []);

  const onPurchase = () => {
    if (isUserInfoComplete()) {
      const id = invoices.add(null, ap, total);
      navigate(`/purchase/${id}`);
    } else setWarned(true);
  };

  return (
    <div>
      {ap.map((item, index) => (
        <Tile
          onUpdate={forceUpdate}
          amount={item.amount}
          key={index}
          prod={repo.find(item.id)!}
        />
      ))}
      {ap.length === 0 && (
        <div className="text-center p-3">购物车中还没有商品呢🤔。</div>
      )}
      <div className="rounded p-3 m-3 space-y-3 bg-sky-400 text-white">
        <div className="text-lg font-semibold">下单信息</div>
        <div className="text-sm p-3">
          <div>点击「下单」前请阁下在此处填写好下单信息。</div>
          <div>
            此行为会下单购物车内的全部商品，且下单完成后购物车不会自动清空。
          </div>
        </div>
        <div className="flex space-x-3">
          <Select value={grade} onChange={setGrade} label="年级">
            <option value="">未选择</option>
            <option value="1">高一</option>
            <option value="2">高二</option>
            <option value="3">高三</option>
          </Select>
          <Select value={clazz} onChange={setClazz} label="班级">
            <option value="">未选择</option>
            {new Array(30).fill(0).map((_, index) => (
              <option key={index + 1} value={String(index + 1)}>
                {index + 1}
              </option>
            ))}
          </Select>
          <Input value={name} onChange={setName} placeholder="姓名" />
        </div>
        <div className="text-sm">点击「更改」后阁下的下单信息才会被保存。</div>
        {saved && <div>✅好样的👍阁下的工作已被保存。</div>}
        <div onClick={onApply} className="flex justify-end">
          <Button>更改</Button>
        </div>
      </div>
      {warned && <div className="p-3">阁下必须在上方填写完毕下单信息😡</div>}
      <div className="rounded p-3 m-3 space-x-3 text-lg border flex flex-wrap">
        <div>总价</div>
        <div>{total}</div>
        <div>&yen;</div>
        <div className="flex-grow"></div>
        <Button onClick={onPurchase}>下单</Button>
      </div>
    </div>
  );
}
