import React from 'react'
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useDispatch} from "react-redux"
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector((state) => state.user.userDetails);
  console.log("userDetail from header", userDetail);

  const handleSignOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser());
  navigate("/");


}).catch((error) => {
  // An error happened.
  navigate("/errorPage")

});
  }
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between flex-row w-full'>
         <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {userDetail && <div className='flex items-center gap-2 '>
          <img className='w-12' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="avatar" />
          <button className='text-white bg-red-500 py-2 px-3 rounded-lg' onClick={handleSignOut}>
            Sign Out
          </button>
        </div>}

    </div>
  )
}

export default Header