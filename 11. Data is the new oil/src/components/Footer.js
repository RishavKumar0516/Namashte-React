import {LINKEDIN_URL} from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

  const {loggedInUser} = useContext(UserContext);
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>❤️</span>
      <a href={LINKEDIN_URL} target="_blank">
        {loggedInUser}
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        Tasty <span>Trails</span>
      </strong>
    </div>
  );
};

export default Footer;
