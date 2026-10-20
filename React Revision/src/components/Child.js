import { memo } from "react";

const Child = memo(() => {

    // if you don't use memo, then everytime the parent component is rendered the child conponent also get re-rendered, use memo to prevent this.

    // if you want to see the effects remove the memo from the Child and then see the console in the browser.


    console.log("I'm rendering");
    return (
        <div>
            <p>I'm the child</p>
        </div>
    )
})

export default Child;