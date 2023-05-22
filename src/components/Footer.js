import React from "react";
import "../Styles/Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconContext.Provider value={{ className: "socialMediaButton" }}>
          <a
            href="https://www.linkedin.com/in/ankit-mishra-7b3660157/"
            title="LinkedIn Profile"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "socialMediaButton" }}>
          <a
            href="mailto: ankit926mishra@gmail.com"
            title="Mail to: ankit926mishra@gmail.com"
            target="_blank"
          >
            <MdEmail />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "socialMediaButton" }}>
          <a
            href="https://github.com/Ankitmi9098"
            title="GitHub Profile"
            target="_blank"
          >
            <BsGithub />
          </a>
        </IconContext.Provider>
      </div>
      <p> &copy; 2023 ankitmi9098.github.io</p>
    </div>
  );
}

export default Footer;
