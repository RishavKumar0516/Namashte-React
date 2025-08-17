import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log("props",props);

        this.state = {
            count: 0, 
            count2: 0,
            userInfo: {
              name: "Dummy",
              location: "Default"
            }
        }
        console.log(`${props.name} child constructor is called`)
    }

    async componentDidMount() {
        console.log(`${this.props.name} child component did mount is called`);

        // API calls
        const data = await fetch('https://api.github.com/users/RishavKumar0516');
        const json = await data.json();
        this.setState({
          userInfo: json
        })

        
    }

    // componentDidUpdate will called after every re-render
    componentDidUpdate(prevProps, prevState){
      console.log("child component did update is called");
      if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
        
      }

      this.timer = setInterval(() => {
        console.log("Namaste React OP");
      }, 1000)
    }

      // if the count state is not equal to the previous count state or the count2 state is not equal to the previous count2 state, then perform the action.
    componentWillUnmount(){
      console.log("child component will unmount is called");

      // clear the timer
      clearInterval(this.timer)
    }
  render() {
    // const {name, location, contacts} = this.props

    // you can also destructure the count from the state.
    // const {count} = this.state
    // const {count2} = this.state;
    const {name, location, avatar_url} = this.state.userInfo
    console.log(` ${name} child render is called`);

    return (
      <div className="user-card">
        {/* <h1>Count: {this.state.count}</h1> */}
        <img src={avatar_url} />
        <h4 className="user-name">{name}</h4>
        <h5>Location: {location}</h5>
        {/* <button onClick={()=>{
            // this.state.count = this.state.count + 1;  // this is the wrong way to update the state
           // NEVER UPDATE THE STATE VARIABLE DIRECTLY
           this.setState({
            count: this.state.count + 1,
           })
        }}>Increase Count</button> */}
      </div>
    );
  }
}

export default UserClass;



/**
 * -------Mounting Lifecycle-------
 * 
 *     Constructor (dummy)
 *     Render (dummy)
 *    <HTML Dummy >
 *    ComponentDidMount
 *    <API Calls>
 *    <this.setState>  - > State variable is updated
 * 
 * -------Updating Lifecycle-------
 *      render(API data)
 *      <HTML (new API data)>
 *      componentDidUpdate
 * 
 * 
 * 
 * 
 * 
 * Mounting means showing to the UI
 * Un Mounting means removing from the UI
 * 
 * componentDidUpdate - called after every renderd
 * so if we want to do this in class based component
 * 
 * useEffect(() => {}, [count, count2])
 * then write the code inside the componentDidUpdate
    componentDidUpdate(prevProps, prevState){
      console.log("child component did update is called");
      if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2){

        //  perform some action

      }
    }

    earlier developers used to like write this in class based component to make changes when the value of the state is changed.

    do you know why we pass the multiple dependencies in the useEffect?
    -->  In this class based component, we have written the logic like
        if the count state is not equal to the previous count state or the count2 state is not equal to the previous count2 state, then perform the action.

        so same things can be done in the useEffect by passing the multiple dependencies. this is how it works internally in the useEffect when passing the multiple dependencies.


  // if you want to perform different action when the count1 change and different action when count2 changes,
  useEffect(() => {}, [count1])
  useEffect(() => {}, [count2])

  but how we do this in class based component?
  writing the seperate if statements
   
  componentDidUpdate(prevProps, prevState){
      console.log("child component did update is called");
      if(this.state.count !== prevState.count){
        //  perform some action
      }
      if(this.state.count2 !== prevState.count2){
        //  perform some action
      }
  }

  componentWillUnmount - will called when we are leaving the page.

  React is a single page application. It has only one page, so once user clicks on the home, about, cart, payment etc. we only change the component.
  So there are lots of things that we need to clear when we are leaving the page.

  so what we need to clear?
  1. timers
  2. intervals
  3. event listeners

  Ex - 

  // If we have the setInterval inside the componentDidMount, and this setInterval is not cleared when we are leaving the page. It will keep running in the background even if we change the page.
  componentDidMount(){
      this.timer = setInterval(() => {
        console.log("Namaste React OP");
      })
  }
  
  and If we have this logic written inside the about page, we go to home page and again get back to the about page then a new set interval will be created and old interval will still be there, and both will be called.
  this is because when you are changing the pages its not reloading your page. It is just changing/rendering the component.

    componentWillUnmount(){
      clearInterval(this.timer)
    }

  // so taking care of this things you can make the scalable application. 

  How we do same things in functional component?
 useEffect(() => {
 
     const intervalTimer = setInterval(() => {
         console.log("Namaste React OPD");
     }, 1000)
 
     return () => {
         clearInterval(intervalTimer)
     }
 }, [])





 */