# Netflix GPT

- Create React app - npx create-react-app netflix-gpt

- Configured Tailwind css
- Header
- Routing
- Login Form
- Sign up From
- Form validation
- useRef
- 


# Feature
- Login/SignUp
  - Sign in / Sign Up form
  - Redirect to Browser page
- Browse (after authentication)
  - Header
  - Main Movie
      - Trailer in background
      - Title & description
      - MovieSuggestion
        - MovieLists * N

- NetflixGPT
  - Search Bar
  - Movie Suggestions

Before running the command - 'firebase login'
please install firebase CLI using the command line - npm install -g firebase-tools

There are 2 types of hoisting
1. you can deploy your application to firebase whenever you want to. - firebase deploy - here you have the access when you want to deploy
2. You can setup github actions as soon as code is pushed to github on the main branch it will automatically deploy. - here you don't have control

To deploy aplication to the firebase, follow this steps in terminal
1. login to firebase - firebase login
2. initializing firebase, it will create config for us - firebase init
3. now you will get 2 options

It will ask you few questions
- What do you want to use as your public diretory? 
ANS - remember we have the dist folder when we are building app using parcel, that contains all the bundled production ready file in that folder.
same in CRA(create react app) we have the build folder. so answer 'build' if you are using CRA.
 - here you are telling fire base that you want to deploy using build folder

- Configure a single-page app (rewrite all urls to /index.html) - No

This creates the firebase.json and .firebaserc file in your root directory

now before deploying first generate the build

firebase deploy


Steps for deployment
1. install firebase CLI - npm install -g firebase-tools
2. Firebase login - firebase login
3. initialize firebase - firebase init, then select hosting
4. deploy command - firebase deploy

Any api of firebase needs to get the auth from getAuth so we need to get the auth for the first time only and use it at every places
so we need to centralize the auth things.

## Reading Documentation is a super power of developer.


The firebase provide the api as onAuthStateChanged it will get automatically called whenever user lofin, signup or logout.