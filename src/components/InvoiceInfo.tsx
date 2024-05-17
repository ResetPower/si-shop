import { Invoice } from "../inventory/invoice";
import { Fragment } from "react/jsx-runtime";
import { calculateContent } from "../inventory";

export default function InvoiceInfo(props: {
  invoice: Invoice;
  expand?: boolean;
}) {
  const inv = props.invoice;
  const grd = inv.userInfo.grade;
  const cc = calculateContent(inv.items);

  return (
    <Fragment>
      <div>订单号：{inv.id}</div>
      <div>交易金额：&yen;{inv.total}</div>
      <div>转账单号：{inv.payment ?? "未填写"}</div>
      <div>
        下单信息：
        {grd === "1"
          ? "高一"
          : grd === "2"
            ? "高二"
            : grd === "3"
              ? "高三"
              : "未填写"}{" "}
        {inv.userInfo.clazz} {inv.userInfo.name}
      </div>
      <div>
        订单内容：
        {props.expand
          ? cc.map((value, index) => <div key={index}>{value}</div>)
          : cc.join("，")}
      </div>
    </Fragment>
  );
}
