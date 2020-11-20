import React, {useState} from "react";

const Count = () => {
    const [c, setCount] = useState(0)

    const increaseCount = (e) => {
        e.preventDefault()
        setCount(c + 1)
    }

    const decreaseCount = (e) => {
        e.preventDefault()
        setCount(c - 1)
    }

    return (
        <div>
            <h2>Count Page</h2>
            <h3>{c}</h3>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    );
}

export default Count;
