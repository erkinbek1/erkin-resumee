import React from "react";
import "../Section/Section.css";

const Section = () => {
  return (
    <div>
      {/* SECTION OR CONTENT START */}
      <section class="section__container">
        <div class="section__container_left">
          <hr />
          <img
            src="https://deadline.com/wp-content/uploads/2016/03/pedro-pascal-headshot1-e1460110446783.jpg?w=1024"
            alt="photo error"
          />
          <hr />
        </div>
        <div class="section__container_right">
          <div class="section__container_profile">
            <h1>PROFILE</h1>
            <p>
              Hello, my name is Pedro, I'm expert in graphic design,
              illustration and animator designer. Motivated with 6 years
              experiences in design. Dedicated and hardworking with internal
              drive to deliver
            </p>
          </div>
        </div>
      </section>
      {/* SECTION OR CONTENT END */}
    </div>
  );
};

export default Section;
