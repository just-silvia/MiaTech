import { useState, useEffect } from "react";

const EffectCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    useEffect(() => {
        document.title = `Contatore: ${count}`;
    }, [count]);

    return (
        <>
            <div>Count: {count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default EffectCounter;