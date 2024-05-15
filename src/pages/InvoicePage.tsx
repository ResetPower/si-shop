import { invoices } from "../inventory/invoice";
import { useNavigate } from "react-router-dom";
import { calculateContent } from "../inventory";

export default function InvoicePage() {
  const iv = invoices.invoices;
  const navigate = useNavigate();

  return (
    <div>
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
