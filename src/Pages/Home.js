import React from "react";
import "../CSS/Home.css";
import Search from "./Search";
import Searchpage from "./Searchpage";

// import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { AppIcon } from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

const Home = () => {
  return (
    <>
      {/* <h1>Homeeeeeeeeeeeeeeeeeee ..</h1> */}

      <div className="home">
        <div className="home_header">
          <div className="home_headerleft">
            {/* <Link to="/About"> About </Link>
            <Link to="/Store"> Store </Link> */}
          </div>
          <div className="home_headeright">
            {/* <Link to="/Gmail"> Gmail </Link> */}
            <a href= "https://support.google.com/mail/answer/56256?hl=en">Gmail</a>

            {/* <Link to="/Images"> Images</Link> */}

            <a href = "https://www.google.co.in/imghp?hl=en&tab=ri&authuser=0&ogbl"> Images</a>
            {/* <AppIcon/> */}
            <img id="img" src={require("../Images/dots-nine.png")}></img>
            <Avatar />
          </div>
        </div>
        <div className="home_body">
          <img
            id="google-logo"
            src={require("../Images/Google-logo.png")}
          ></img>
        </div>
        <div className="home_inputcontainer">
          <Search hidebutton />
        </div>
      </div>
    </>
  );
};

export default Home;
