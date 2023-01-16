import { useState } from "react"


//실습
const StateComponentQ = () => {

    /* 
    let [count, setCount] = useState(0);

    let plus = () => setCount(count + 1);
    let minu = () => setCount(count - 1);
    let reset = () => setCount(0);

    return (
        <>
        <h3>카운트: {count}</h3>

        <button onClick={count}>증가</button>
        <button onClick={count}>감소</button>
        <button onClick={count}>초기화</button>

        </>
    )
    */

    const [count, setCount] = useState(0);

    return (
        <div>
        <h3>실습</h3>
        <div>카운트: {count}</div>

        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
        <button onClick={() => setCount(0)}>초기화</button>
        </div>
    )

}

export default StateComponentQ;