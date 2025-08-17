


// before creating the custom hooks finalize the contract
// what is the input of that hook?
// What is the output of that hook?

import { useEffect, useState } from "react";

// here in this case we don't need any input

// for example in the useParams hook we don't need any information from the caller, I just need to access the browser url.

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine);  
    // The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.onLine switches to tru

    // check if online

    // we have a event listener window.online to check the internet of user is online or not.
    // and we want to check this only once when our app is useLoaderData.
    // so we are using useEffect hook with empty dependency so that useEffect will be called only once.

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, [])



    // return a boolean value
    return onlineStatus;
}

export default useOnlineStatus;

// for checking this custom hooks working or not we can stop the connection of internet. but we can also experience that from the browser network as browser gives us the power to check how our browser will looks when user is offline.

// now using this feature of checking user is offline then show him a offline page and give a game to play them. just like google show the game (dyno game) when user is offline. instead of showing any error page. so you can increase the experience of your user through this.

// this is a very improtant feature when you are working on chat application.
