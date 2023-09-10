import React from "react";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      {/* SIDEBAR START */}
      <div class="sidebar__container">
        <div class="sidebar__container_intro">
          <p>PEDRO</p>
          <p>FERNANDES</p>
          <h3>GRAPHIC DESIGNER</h3>
        </div>
        <div class="sidebar__container_details">
          <div class="sidebar__container_left">
            <h3>EXPERIENCES</h3>
            <p>Sep, 2018 - Present</p>
            <p>Senior Graphic Designer</p>
            <ul>
              <li>Created and managed digital campaigns for top clients</li>
              <li>
                Increased two clients' digital presence and customer interaction
                by 200%
              </li>
            </ul>
            <h3>EDUCATION</h3>
            <p>Sep, 2010 - Nov, 2014</p>
            <p>University of Giggling</p>
            <ul>
              <li>News Editor of the University, The Giggling</li>
              <li>President of the Giggling Design Society</li>
              <li>Member of the Giggling Association</li>
            </ul>
          </div>
          <div class="sidebar__container_right">
            <h3>HOBBIES</h3>
            <p>Dance</p>
            <p>Community Involvement</p>
            <ul>
              <li>Dance can help you unwind and keep your stress levels low</li>
              <li>
                Volunteering teaches organizational skills, teamwork, and
                leadership.
              </li>
            </ul>
            <h3>SKILLS</h3>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Creativity</li>
              <li>Problem-solving</li>
              <li>Leadership</li>
              <li>Organization</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
      {/* SIDEBAR END */}
    </div>
  );
};

export default Sidebar;
