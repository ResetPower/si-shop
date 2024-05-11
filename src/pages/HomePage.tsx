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
          <div>
            每周日下午一点截止当周订单 并统计 后两周排单生产 再往后一周配送
          </div>
          <div>
            例：5 月 12 日下午一点前下的订单最迟 6 月 1 日前送至购买者手中
            如遇节假日 配送可能稍有延后
          </div>
          <div>需要邮寄服务请联系：MELLO-VOURRY</div>
        </div>
        <div className="font-semibold">关于商品实物</div>
        <div className="text-sm">
          可参考 4 月 15 日智能信息社编程大冲刺奖品实物 商品图不全后续会增加
        </div>
        <div className="font-semibold">关于售后</div>
        <div className="text-sm">
          售后期为收到商品后两周 超出售后期一概不负责
        </div>
        <div className="font-semibold">关于 3D 代打服务</div>
        <div className="text-sm">需要 3D 代打服务联系：MELLO-VOURRY</div>
        <div className="font-semibold">关于下单</div>
        <div className="text-sm">
          <div>请在下单前确认下单信息已正确填写并保存</div>
          <div>
            若网页刷新后再打开下单页面后下单页面上仍显示正确的下单信息则说明下单信息已正确保存
          </div>
          <div>
            点击下单按钮后请仔细核对订单内容，确认全部
            <span className="font-semibold">准确无误</span>后再扫描二维码付款
          </div>
          <div>
            付款后将转账单号<span className="font-semibold">准确无误</span>
            地填写在指定文本框中并点击「上传」
          </div>
          <div>
            未完成支付时请勿关闭订单待支付页面
            已完成支付的情况下请勿点击取消支付
          </div>
          <div>
            如果网站刷新后在「订单」页能看到订单已支付，则说明订单上传成功
          </div>
        </div>
        <div className="text-sm">
          包括但不限于网站出现异常现象、网站行为与描述和（或）预期不符、误操作、订单系统出现需要人工解决的问题、有关于网站和下单系统的疑问等情况请联系：resetpower
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
