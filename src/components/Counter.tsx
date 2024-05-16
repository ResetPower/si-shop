import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { cart } from "../inventory/cart";

function CounterButton(props: {
  onClick: MouseEventHandler;
  children: ReactNode;
}) {
  return (
    <button
      className="hover:bg-gray-200 h-full transition-colors"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default function Counter(props: { id: number; variant: string }) {
  const item = cart.find(props.id, props.variant);
  const [value, setValue] = useState(item?.amount ?? 1);
  const updateValue = (newValue: number) => {
    cart.updateAmount(props.id, newValue, props.variant);
    setValue(newValue);
  };
  const onIncrease = () => value < 100 && updateValue(value + 1);
  const onDecrease = () => value > 1 && updateValue(value - 1);

  useEffect(() => setValue(item?.amount ?? 1), [props.variant]);

  return (
    <div className="border flex items-center w-16">
      <CounterButton onClick={onDecrease}>
        <MdRemove />
      </CounterButton>
      <div className="flex-grow text-center">{value}</div>
      <CounterButton onClick={onIncrease}>
        <MdAdd />
      </CounterButton>
    </div>
  );
}
