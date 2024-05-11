import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

export default function InvoicePage() {
  return (
    <div>
      <div className="rounded p-3 m-3 space-y-3 bg-sky-300 text-white">
        <div className="text-lg font-semibold">订单信息</div>
        <div className="flex space-x-3">
          <Select>
            <option selected>未选择</option>
            <option value="1">高一</option>
            <option value="2">高二</option>
            <option value="3">高三</option>
          </Select>
          <Select>
            <option selected>NaN</option>
            {new Array(30).fill(0).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Select>
          <Input placeholder="姓名" />
        </div>
        <div className="flex justify-end">
          <Button>更改</Button>
        </div>
      </div>
    </div>
  );
}
