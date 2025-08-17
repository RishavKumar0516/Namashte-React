# _Episode 05 - Let's Get Hooked_


## Namaste Food

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";

- if we want to use react only in the footer then we can use it in the footer by using the id of the footer and your code 

add the id of footer here in place of root in the index.html file
works only for the footer element
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

update your App.js 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);





# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()