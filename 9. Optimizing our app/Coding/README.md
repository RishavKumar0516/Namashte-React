# Single Responsiblity Principal

if you have a function, class or any single identity of code, that should have a single responsiblity.

Each of this component has single responsiblity.
EX - Header component has single responsiblity of showing header only
ResturantCard component has only single responsiblity to show the resturant card.

-> You should not do multiple things in the same component, else break the functionality in the multiple components

-> This is a way to maintain your code in the modular faishon.

-> Modular means breaking the code in small module(utility function), so your code become more maintainable, more testable and reusable.

-> Keep your component more lightable.

# Custom Hooks
Hooks are normal javascript function which are given by react.
We can also create our own custom hooks.
Hooks are like utility function.

EX - In ResturantCardMenu we are fetching the data first and then displaying it. But it should only worried about how the data is how to show the card Menu not about fetching about data.

For Example -
useParams is a hook from react router dom, which gives you the parameter from the url, but we don't know its inner implementation that is abstracted from us. It is just a utility function.


try to create custom hook and export it as npm package just like react router dom

useLocalStorage, useSessionStorage


# lets try to develop a feature using the custom hooks to know user is online or ofline based on the based on their internet connectivity.
<!--  -->


the word use in custom hooks are not mandotary as it is recomended by react, just like we use the first letter of component name as uppercase.

lot of time some projects uses linters and that linter will start throwing errors.

Always use what library recommended.

read about linters

Bundlers bundle your all file and just generate one js file, you can see it inside the dist folder. It will make it very small.

so everything that you see on web page was happening due to only one js file.

if you are working on small app then everyting in one single file is fine.

If you have a very large app like make my trip
which has 200-500 of components, so everything here in the single file can increase the size of the file.

so size of js file increses by how much the component it holds.

so you cannot build a large scale application if you would not take care of it.
your js file will become a lot big and your app will become very slow, it will take a lot of time to load your home page when size of js file.

so one of the solution is you can break your app in smaller pieces.
we need to do something so our app, is not just a single javascript file but smaller javascript file.

so their are 2 things 
Either we can bundle or should we not bundle.

we should obivously bundle, suppose we have 1000 of component then we don't need to load 1000 of file on our web page. It is useless.

we also do not want to put 1000 of files in single file, the size will increase too lot.

so what we can do is make smaller bundles of this files And this process is knows as 
chunking
code splitting
Dynamic bundling
lazy loading
on demand load
Prefetching
 Suspense
 dynamic import

so when to make smaller bundle
what will go inside the smaller bundle.


suppose I am doing a system design of make my trip and I want to do a logical seperation of bundle. which means bundle should have enough code for a major feature in a web site. and you can split this bundle in the small logical chunks.

In make my trip I can make one bundle for just my flights,

I can make a bundle of the components of the home stage

I can make a bundle of the components of trains etc

so flight has 100 components so they can form 1 bundle
hotels has 100 component so they can form 1 bundle.


Lets try to perform this in our app

suppose their is a grocery component, which is made with 100 of sub components

so we will make the seperate bundle for the grocery and the one main bundle for other things.


Initially it will not load the grocery page it, will load only when we go on to the grocery page.- on demand loading



lazy is the function given by react comes as named export. Lazy takes a callback function as an argument. inside the callback function we have a import function which is not similar to the above import. This import is a function that takes the path of this grocery component.
