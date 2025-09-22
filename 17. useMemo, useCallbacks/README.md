The component gets rendered
 - initial render or first render
 - when any state of component changes
 - when any parent state changes 

 so if you are doing some heavy operation and you don't want that things to perform again and again as component gets re-rendered so we use useMemo to memoize or catch the result between renders.

 As you can see that in the body component I want to find the nth prime number based on the input that we add in the search box.

 but it also gets call even if other states (theme, etc) are getting updated and it re-render the component. 

 - react is very fast it will handle it if the operation is very small. but if the operation is heavy.
 so if you do some heavy operation then in that case either your applicaton gets stuck or freeze or respond very slow to the interaction.

 This type of issues can be handle using useMemo
 it catches the result. It is used to memoize the result of the function
usseMemo takes first argument as function 

it catches the result between rerenders until the dependency changes.
in useMemo we are catching the value that is returned by the function



# useref
if you want the value of some variable to be retained between renders and on updating that variable, it should not trigger react to re-render the component.

it means it is not possible with state variable as state variable gets updated, it trigger react to re render the component.
even its not possible with the normal variable as value of normal variable doesn't persist between renders. It gets initialize with the initial value as every time the component gets rendered.

that's why useRef comes in the picture.

