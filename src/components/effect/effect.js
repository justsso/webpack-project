import React, {useState, useEffect} from 'react';

function MyEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'this is ' + count + '.'
    });


    return (
        <div>
            <p>
                The count is {count}
            </p>
            <button onClick={() => {
                setCount(count + 1)
            }}>点击+1
            </button>
        </div>
    )
}

export default MyEffect;
