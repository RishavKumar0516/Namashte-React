// now as we are not using CDN we need to import the react library
/**
 * as soon as we save the file, it changes automatically. The changes get automatically rerendered,this
 * is happening because of parcel.
 * 
 * Hot Module Replacement (HMR): - It is a feature in parcel that allows you to update the page, as soon as you save changes.
 * Hot Module Replacement (HMR) is a feature in Parcel (and other modern bundlers like Webpack) that allows for real-time updates to your application without requiring a full page reload. When you save changes to your code, HMR only updates the modules that have changed, preserving the application state and improving the development experience.
 * File Watcher algorithm - It is a feature in parcel that allows you to update the page, as soon as you save changes. It keeps track of all the file that change in the real time. 

For example, if you're working on a React component and make changes to its code, HMR can automatically refresh that component in the browser without refreshing the entire page, meaning you don't lose any data or state that was present before the change. This can significantly speed up development by allowing you to see the impact of changes immediately.
It uses file watcher algorithm to detect changes this file watcher algorithm written in c++.

Dist - dist folder keeps the file minified for us. 
whenever we run the npx parcel index.html, parcel create a developqment build, and host on the server
To tell the parser for production build we use the command
 */
import React from 'react';
import ReactDOM from 'react-dom/client';  
// in the recent version of react we need to import the react-dom  from react-dom/client.

const heading = React.createElement('h1', {
    id: 'heading',
    className: 'heading',
    style: {
        color: 'red',
        background: 'blue'
    }

}, 'Heading from parcel'); //create react element 

ReactDOM.createRoot(document.getElementById('root')).render(heading);

// In create react app the builndlers that they use is web pack
// we need bundlers for
// chunking
// bundling
// minification
// tree-shaking
// Super fast build algorithm.
// image compression or minification or optimization - parcel will only know things that are in your local, if images comes from server, then it does not.
// caching while development
// compression
// compatiable with the older verion on browsers
// https on develoment - parcel will give you the ability to use https while development
// Ex - box paracel indexhtml --https
// parcel manages the port number - if you run the two applications on the same port number, then it will automatically switch to the next port number, because it catch the port number also in the parcel-cache.
// parcel uses consistent hashing algorithm
// parcel has 0 configuration
// Tree shaking - it will remove the unused/un-wanted code from the bundle, as we install the package in the package.json file, it will give you all the helpers function, but if we are using only 2 of them, then it will ignore the other one, as it is not needed.





// parcel is a package managed by npm
// packages:- package is a collection of related modules, and a package manager is a tool that helps you manage your packages and their dependencies.
// we can use both the npm and yarn package manager

// npm init is used to create a package.json file
// npm init -y is used to create a package.json file with the default values
// you can either use --save-dev or -D for dev-dependency

// dependency - all the package that our project needs are called dependency
// dev-cependency - all the package that our project needs for development are called dev-dependency

// package-lock.json - this file will clearly tells you what exactly version of package you are using.

// dist - dist folder keeps the file minified for us. 
// whenever we run the npx parcel index.html, parcel create a developqment build, dist folder and host on the server
// To tell the parser for production build we use the command
// npx parcel build index.html

// node_modules never added to the website directly, they are minified and stored in the dist folder, our production or dev build is responsible for showing the website 
// Percel minified the dev and production BiquadFilterNode, and it does super fast

// we should never add parcel.cache in the gitignore.
// Anything which we can generate on server or autimatic generated, we can put that thing in the gitignore

// parcel doesnot do every things with him self, it depeds on lot of node_module packages.

// transetive dependency - dependency of the dependency