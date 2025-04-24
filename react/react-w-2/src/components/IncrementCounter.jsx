/*import { useState } from "react";

const IncrementCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Count: {count}</div>
        </>
    );
}

export default IncrementCounter;*/

// aggiungo funzione e bottone che incrementa di 1 il counter

import { useState } from "react";

const IncrementCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };


    return (
        <>
            <div>Count: {count}</div>
            <button onClick={increment}>+</button>
        </>
    );
}

export default IncrementCounter;