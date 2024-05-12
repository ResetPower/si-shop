import { useParams } from "react-router-dom";
import { invoices } from "../inventory/invoice";
import { calculateContent } from "../inventory";
import Input from "../components/Input";
import paymentJpg from "../assets/payment.jpg";
import Button from "../components/Button";
import { useState } from "react";

export default function PurchasePage() {
  const params = useParams();
  const inv = invoices.find(params.id ?? String());
  const [payment, setPayment] = useState(String());
  const [loading, setLoading] = useState(-1);

  const onComplete = () => {
    if (inv) {
      inv.payment = payment;
      fetch("https://server.si-hzyz.club:2954/invoice", {
        method: "POST",
        body: JSON.stringify(inv),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          setLoading(1);
          invoices.saveChanges();
        })
        .catch(() => setLoading(-2));
      setLoading(0);
    }
  };

  return inv ? (
    <div className="p-3">
      <div>订单号：{inv.id}</div>
      <div>交易金额：&yen;{inv.total}</div>
      <div>转账单号：{inv.payment ?? "null"}</div>
      <div>
        下单信息：{inv.userInfo.grade} {inv.userInfo.clazz} {inv.userInfo.name}
      </div>
      <div>订单内容：{calculateContent(inv.items)}</div>
      <Input
        value={payment}
        onChange={setPayment}
        placeholder="转账单号"
      ></Input>
      <div>
        扫描下方二维码付款后将转账单号准确无误地填写在上方文本框中并点击完成。
      </div>
      <div className="flex flex-wrap">
        <Button onClick={onComplete}>完成</Button>
        {loading === -2 && (
          <div>❌订单上传失败，可能是网络问题或服务器宕机。</div>
        )}
        {loading === 0 && <div>上传订单中，请勿关闭此页面。</div>}
        {loading === 1 && <div>✅订单上传成功，可以关闭此页面。</div>}
      </div>
      <img width={256} src={paymentJpg} />
    </div>
  ) : (
    <div>这个订单似乎不存在，请联系人工解决。</div>
  );
}
