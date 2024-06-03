import { useNavigate, useParams } from "react-router-dom";
import { invoices } from "../inventory/invoice";
import Input from "../components/Input";
import paymentJpg from "../assets/payment.jpg";
import Button from "../components/Button";
import { useState } from "react";
import InvoiceInfo from "../components/InvoiceInfo";

export default function PurchasePage() {
  const params = useParams();
  const inv = invoices.find(params.id ?? String());
  const [identifier, setIdentifier] = useState(String());
  const [loading, setLoading] = useState(-1);
  const navigate = useNavigate();

  const onRemove = () => {
    inv && invoices.remove(inv);
    navigate(-1);
  };
  const onBack = () => navigate(-1);

  const onComplete = () => {
    if (inv) {
      inv.identifier = identifier;
      fetch("https://server.si-hzyz.club/invoice", {
        method: "POST",
        body: JSON.stringify({ ...inv, time: new Date().toLocaleString("zh") }),
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
      <InvoiceInfo invoice={inv} expand />
      <Input
        value={identifier}
        onChange={setIdentifier}
        placeholder="特异性标识符"
      ></Input>
      <div className="text-red-500">
        扫描下方二维码后可点击赞赏金额下方的「其他金额」输入金额，请勾选「向对方展示我的名字」。
      </div>
      <div className="text-sm">
        <div>研究表明，赞赏码的转账单号对付款方和收款方并不统一。</div>
        <div>
          为帮助我们更好地确认订单支付情况，你可以选择在备注中留下有特殊意义的字符串并将其填入「特异性标识符」中，也可以在其中填入你的微信名，也可以在备注中留下自己的姓名班级。
        </div>
      </div>
      <div className="flex flex-wrap mb-3 space-x-3">
        <Button shallow onClick={onBack}>
          返回
        </Button>
        <Button dangerous onClick={onRemove}>
          删除订单
        </Button>
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
