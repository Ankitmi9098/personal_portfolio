import React, { useState } from "react";
import { BsLinkedin, BsGithub, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import copy from "copy-to-clipboard";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import toast, { Toaster } from "react-hot-toast";
import "../Styles/Home.css";

function Home() {
  const email = "ankit926mishra@gmail.com";

  const CopyIntoClipboard = () => {
    copy("ankit926mishra@gmail.com");
    // alert("Email Copied to Clipboard");
    toast.success("Copied!", {
      style: {
        borderRadius: "25px",
        fontSize: "20px",
        backgroundColor: "#ddd",
      },
      duration: 1000,
    });
  };
  return (
    <div className="home">
      <div className="about">
        <div class="name">
          <h2> Hi, My Name is Ankit.</h2>
        </div>
        <div className="prompt">
          <p> A Software Engineer with passion of learning and creating.</p>
          <div className="socialMedia">
            <IconContext.Provider value={{ className: "socialMediaButton" }}>
              <a
                href="https://github.com/Ankitmi9098"
                title="GitHub Profile"
                target="_blank"
              >
                <BsGithub />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "socialMediaButton" }}>
              <a
                title="ankit926mishra@gmail.com | Click to Copy Email in Clipboard"
                onClick={CopyIntoClipboard}
              >
                <MdEmail />
                <Toaster />
              </a>
            </IconContext.Provider>
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
                href="https://drive.google.com/file/d/1c9dhD5LEcNIQzOuNKcc1mDjY6MsdI4Pi/view?usp=sharing"
                download
                title="Download Resume"
                target="_blank"
              >
                <BsFillFileEarmarkPdfFill />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, Bootstrap, React, Redux, Hooks</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Node.js, Express.js, REST API, JSON, MongoDB, MySQL </span>
          </li>
          <li className="item">
            <h2>ServiceNow</h2>
            <span>
              Ebonding, Scripted REST Message, Script Include, UI Policy,
              Catalog, Service Request, ITSM, Business Rule, REST Message,
              Client Script, Event, Inbound Email Action, Notifications
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C++, Java, C, Python</span>
          </li>
          <li className="item">
            <h2>Courses & Certifications</h2>
            {/* <span>JavaScript, C++, Java, C, Python</span> */}
            <ul>
              <span>
                <li>
                  The Complete Node.js Developer Course <i>by Udemy</i>
                </li>
              </span>
              <span>
                <li>
                  Certified Application Developer <i>by ServiceNow</i>
                </li>
              </span>
              <span>
                <li>
                  Certified System Administrator <i>by ServiceNow</i>
                </li>
              </span>
              <span>
                <li>
                  Microsoft Azure Fundamentals (AZ-900) <i>by Microsoft</i>
                </li>
              </span>
              <span>
                <li>
                  Basics of Java <i>by Coding Ninjas</i>
                </li>
              </span>

              <span>
                <li>
                  CCNA: Introduction to Networks<i>by CISCO</i>
                </li>
              </span>
              <span>
                <li>
                  Programming with Python <i>by E&ICT, IIT Kanpur</i>
                </li>
              </span>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
