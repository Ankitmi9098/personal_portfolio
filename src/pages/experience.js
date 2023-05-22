import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";

function experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Tata Consultancy Services, Bengaluru, Karnataka
          </h3>
          <p>System Engineer</p>
          <p>
            <ul>
              <li>
                Worked on the development of REST APIs to perform CRUD operations using JavaScript.
              </li>
              <li>
                Designed and developed payload validation framework in ServiceNow, which sends email to the stakeholders when API receives Invalid or Unexpected value in payload.
              </li>
              <li>
                Worked on the end-to-end development of automation catalogs.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bhagalpur College of Engineering, Bhagalpur, Bihar
          </h3>
          <p>B.Tech in Computer Science and Engineering, 7.99 CGPA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Govt. Boys Senior Secondary School, Patna
          </h3>
          <p>Senior Secondary Diploma in Physics, Chemistry and Mathematics</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default experience;
