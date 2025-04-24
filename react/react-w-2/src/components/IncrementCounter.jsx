import { useState } from "react";

const IncrementCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Count: {count}</div>
        </>
    );
}

export default IncrementCounter;