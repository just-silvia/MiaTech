const Counter = () => {
    const [count] = useState(0);

    return (
        <>
            <p>Count: {count}</p>
        </>
    );
}

export default Counter;