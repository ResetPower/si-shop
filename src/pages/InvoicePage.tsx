import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { applyChanges, userInfo } from "../inventory/user";
import { invoices } from "../inventory/invoice";
import { useNavigate } from "react-router-dom";
import { calculateContent } from "../inventory";

export default function InvoicePage() {
  const [grade, setGrade] = useState(userInfo.grade);
  const [clazz, setClazz] = useState(userInfo.clazz);
  const [name, setName] = useState(userInfo.name);
  const [saved, setSaved] = useState(false);
  const iv = invoices.invoices;
  const navigate = useNavigate();

  const onApply = () => {
    userInfo.grade = grade;
    userInfo.clazz = clazz;
    userInfo.name = name;
    applyChanges();
    setSaved(true);
  };

  return (
    <div>
      <div className="rounded p-3 m-3 space-y-3 bg-sky-400 text-white">
        <div className="text-lg font-semibold">下单信息</div>
        <div className="flex space-x-3">
          <Select value={grade} onChange={setGrade} label="年级">
            <option value="0">未选择</option>
            <option value="1">高一</option>
            <option value="2">高二</option>
            <option value="3">高三</option>
          </Select>
          <Select value={clazz} onChange={setClazz} label="班级">
            <option value="0">未选择</option>
            {new Array(30).fill(0).map((_, index) => (
              <option key={index + 1} value={String(index + 1)}>
                {index + 1}
              </option>
            ))}
          </Select>
          <Input value={name} onChange={setName} placeholder="姓名" />
        </div>
        <div className="text-sm">点击「更改」后你的下单信息才会被保存。</div>
        {saved && <div>✅好样的👍你的工作已被保存。</div>}
        <div onClick={onApply} className="flex justify-end">
          <Button>更改</Button>
        </div>
      </div>
      {iv.length === 0 && (
        <div className="text-center p-3">还没有订单呢🤔。</div>
      )}
      {iv.map((inv, ind) => (
        <div className="p-3 m-3 border shadow rounded" key={ind}>
          <div>订单号：{inv.id}</div>
          <div>交易金额：&yen;{inv.total}</div>
          <div>转账单号：{inv.payment ?? "null"}</div>
          <div>
            下单信息：{inv.userInfo.grade} {inv.userInfo.clazz}{" "}
            {inv.userInfo.name}
          </div>
          <div>订单内容：{calculateContent(inv.items)}</div>
          {!inv.payment && (
            <div>
              此订单未完成，阁下可经由
              <button
                className="mx-1 text-blue-500 hover:underline"
                onClick={() => navigate(`/purchase/${inv.id}`)}
              >
                https://si-hzyz.club/purchase/{inv.id}
              </button>{" "}
              继续完成。
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
