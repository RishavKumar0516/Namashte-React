# _Episode 06 - Exploring the world_

## useEffect hook

- It is a special type of hook which takes 2 argument
1. callback function
2. dependency array

The useEffect gets called when the component(Body) is rendered completely.

If you have to do some thing after rendering the component then write this things in to the useEffect.

whenever the state variable changes react re-reder that component 

use usually create a state like
const [search, setSearch] = useState("pizza");
as state is a const varable and when we are updating it, why its not giving error as javascript does?

--> As soon as the state gets updated, it will trigger the component to re-render and a new instance of this state variable gets created (so this time the search is a new variable) and gets initialized with the updated value like soup.

as soon as component gets re-rendered it calls the whole component and find the difference between the two virtual dom and update only that portion in the dom which gets changed

in the component the react will compare this jsx code and find the difference between the 2 dom tree and update that in the dom which is changed

As soon as we type the text in the input box the whole body compoent gets re-rendered and update the input element value in the dom, as react know only the input button is changed as comparing between the old and new dom.


react fibure (the new reconciliation algorithm ) which finds out the difference between the the old and new vitrual dom, and update only that portion this is updated that's why react is fast.

code slow, the pepole who code faster will take lot of time to debug
While coding ask your self, Why I am doing this?