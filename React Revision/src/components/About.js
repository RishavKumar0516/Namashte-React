import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child.js"
import Child2 from "./Child2.js"
import resList from "../mockData.js"
const About = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleMessage = useCallback(function () {
        console.log("handleMessage called");
    }, []);

    // whenever you will click on the button, this will get re-calculated even clicking on the button is not dependent on this.
    // const filteredProduct = resList.filter((list) => {
    //     console.log("filtering");
    //     return list.info.avgRating > 4;
    // })

    // lets fix this using useMemo
    const filteredProduct2 = useMemo(() => {
        console.log("filtering");
        return resList.filter((list) => {
            return list.info.avgRating > 4;
        })
    }, []);

    return (
        <div>
            <h1>About</h1>
            <p>I'm the parent component</p>
            <button onClick={() => { setCount(count + 1) }}>
                +1 in About
            </button>
            <p>count: {count}</p>
            <p>count2: {count2}</p>
            <Child />
            <Child2 handleMessage={handleMessage} />
        </div>
    )
}

export default About;