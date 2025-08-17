import { useState , useEffect} from "react";

const User = (props) => {
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(0)

    // useEffect(() => {})   // this is called after each and every render.
// useEffect(() => {}, [])  // this is called only once at after the initial render. 
// useEffect(() => {}, [count]) // this is called only when count changes

// in functional component react removes the component life cycle methods.

useEffect(() => {

    const intervalTimer = setInterval(() => {
        console.log("Namaste React OPD");
    }, 1000)

    console.log("useEffect");

    // this callback will be called when you unmount this component
    return () => {
        clearInterval(intervalTimer)
        console.log("useEffect return");
    }
}, [])
console.log("render");

    return <div className="user-card">
        <h1>Count: {count}</h1>
        <h2 className="user-name">{props.name}</h2>
        <h3>Location: New York</h3>
        <h4>Contacts: (123) 456-7890</h4>
    </div>
}

export default User;