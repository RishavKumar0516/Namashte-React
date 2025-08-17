SCSS and SASS


SASS adds some super power in writing css and it simplier.

This is used to add the css to the app but it is not the recommanded way. In industry they don't use scss or sass.


What developer use to write css in big tech company?

--> The most common ways are
1. styled component
2. Material UI
2. Bootstrap 
3. Ant design
4. Chakra UI
5. Tailwind UI

They export the component which are already beautiful, you don't have to worry about writting css as they are already styled.

You get prebuilt component just import and use it.
Material is a react librabry which is mostly used.

Ant Design is the second most popular CSS librabry for react.

Tailwind CSS
-> It works with every library or html
-> tailwind css behind the scene uses postcss.
post css is a tool for transforming css along with javascript.

postcss.rc is a way to understand what is written in the tailwind.

Tailwind css gives you the class names for every css you want to write.

install tailwind css intellience in vs code editor extension.


disadvantages of tailwind
we have to write lots of class and its makes your code ugly

while bundling, the parcel only bundle the css that we have used in our code, not the all that the tailwind offers to us.
EX - if you have used m-4 class at multiple places but while bundling it will be imported only once

and if you haven't used the class like m-5, shadow
then this class will not get imported while bundling.

the class you add only that going to add in your css file.

so it keeps the bundle size very small and light weight. so you don't need to think of your css bundle.

when multiple developers working on same project and if using the external css then different user may create the same class multiple time and that creates redundancy in the production, that's why we should use tailwind css.

In todays time every website should has dark mode.
