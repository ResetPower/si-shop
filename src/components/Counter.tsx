import { MouseEventHandler, ReactNode, useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { cart } from "../inventory/cart";

function CounterButton(props: {onClick:MouseEventHandler;children:ReactNode}) {
    return <button className="hover:bg-gray-200 h-full transition-colors" onClick={props.onClick}>{props.children}</button>
}

export default function Counter(props: {id: number}) {
    const item = cart.find(props.id);
    const [value, setValue] = useState(item?.amount ?? 1);
    const updateValue = (newValue: number) => {
        cart.updateAmount(props.id, newValue);
        setValue(newValue);
    }
    const onIncrease = () => value < 100 && updateValue(value + 1);
    const onDecrease = () => value > 1 && updateValue(value - 1);

    return <div className="border flex items-center w-16">
        <CounterButton onClick={onDecrease}><MdRemove/></CounterButton>
        <div className="flex-grow text-center">{value}</div>
        <CounterButton onClick={onIncrease}><MdAdd/></CounterButton>
    </div>
}
