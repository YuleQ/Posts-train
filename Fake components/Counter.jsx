import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(12)

    function descrement(){
        setCount(count - 1)
        if(count === 0){
            return alert('fake')
        }
        
    }

    function increment(){
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={(increment)}>Increment</button>
            <button onClick={(descrement)}>Descrement</button>
        </div>
    );
}
 
export default Counter;