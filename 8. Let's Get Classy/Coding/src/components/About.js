import React from 'react'
import User from './User'
import UserClass from './UserClass'

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
                {/* <User name="First" /> */}
                <UserClass name="First" location="Bihar, India" contacts="(123) 456-7890" />
                {/* <UserClass name="Second" location="US" contacts="(123) 456-7890" /> */}
            </div>
        )
    }
}

// This is how the lifecycle gets called when there is multiple components inside the parent.
// 1. Parent constructor
// 2. Parent render
// 3. First Child constructor
// 4. First Child render
// 5. Second Child constructor
// 6. Second Child render

// react does the render things for both the component, first( finding all the diffs between the virtual doms)

// <DOM UPDATED - IN SINGLE BATCH>
// 7. First componentDidMount
// 8. Second componentDidMount
// 9. Parent componentDidMount

// const About = () => {
//   return (
//     <div className='user-card'>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/* <User name="First" /> */}
//       <UserClass name="First" location="Bihar, India" contacts="(123) 456-7890" />
//     </div>
//   )
// }

export default About