import React from "react";

const UncontrolledInput = () => {
    const inputRef = useRef(null);

    function handleSubmit() {
        alert(`Name: ${inputRef.current.value}`);
    }

    return (
        <div className="App">
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Invia</button>
        </div>
    );
}

export default UncontrolledInput;