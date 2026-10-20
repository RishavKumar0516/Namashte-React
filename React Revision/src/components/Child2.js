import { memo } from "react";

const Child2 = memo(({ handleMessage }) => {

    console.log("I'm rendering -> child2");

    // you will see that when we click on the button in the about page, then also this component will get re-rendered, even we have used the memo.

    // to prevent this we can use the useCallback hook in the parent component.
    // useCallback hook will only prevent the re-rendering if the props are same.
    // so that's why we are calling the handleMessage function from the about page using the useCallback hook.

    return (
        <div>
            <p>I'm the child2</p>
        </div>
    )
})

export default Child2;