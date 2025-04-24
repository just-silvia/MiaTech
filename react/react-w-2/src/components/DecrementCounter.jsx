import { useState } from "react";

const DecrementCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };


    return (
        <>
            <div>Count: {count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default DecrementCounter;