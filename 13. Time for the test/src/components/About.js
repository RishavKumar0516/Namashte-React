import React from 'react'
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props) {
       super(props);

       console.log("parent constructor called")
    }

    componentDidMount() {
        console.log("parent component did mount is called");
    }
    render() {
        console.log("parent render")
        return (
            <div className="card-container">
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserContext.Consumer>
                  {({loggedInUser})=> (
                    <h3 className="font-bold">{loggedInUser}</h3>
                  )}
                </UserContext.Consumer>
                {/* <User name="First" /> */}
                {/* <UserClass name="Second" location="US" contacts="(123) 456-7890" /> */}
            </div>
        )
    }
}

export default About;