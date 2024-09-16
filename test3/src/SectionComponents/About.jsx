import React from "react";

export default function About(props) {
  return (
    <>
      <section id="about" className={`py-5 bg-${props.SecondaryTheme}`}>
        <div className="container">
          <div className="row pt-4 text-center">
            <h2>About Me</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6 pt-3">
              <img
                src="/Images/Group.jpg"
                className={`img-fluid rounded-5 shadow-lg w-100`}
                alt="Tanishk"
              />
            </div>
            <div className="col-md-6 pt-3">
              <p>
                Hi, I'm <strong> Tanishk Kumar</strong>, a passionate web
                developer with a strong background in{" "}
                <strong> front-end</strong>
                and <strong> back-end development</strong>. Over the past few
                years, I’ve honed my skills in crafting
                <strong> responsive, user-friendly websites</strong> using
                modern technologies like
                <strong>
                  HTML, CSS, SCSS, PHP, MySQL, Bootstrap, Tailwind
                </strong>
                , and <strong> JavaScript</strong>. My journey in web
                development has been fueled by a love for creating
                <strong>
                  clean, efficient, and innovative digital solutions
                </strong>
                that deliver a seamless user experience. <br /> <br />I recently
                completed a <strong>3-month web development internship</strong>
                at <strong> Offbeat Pixels</strong>, where I developed
                <strong> four projects</strong> and deepened my knowledge of
                <strong> cutting-edge design principles</strong> and
                <strong> best practices</strong>. My expertise also extends to
                tools like <strong> Figma</strong> for
                <strong> UI/UX design</strong>, <strong> Git</strong> and
                <strong> GitHub</strong> for version control, and I am
                continuously expanding my skill set to include the latest
                frameworks and technologies.
                <br />
                <br />
                Whether it's building
                <strong> dynamic, animated web pages</strong> or designing
                templates with <strong> purely dark black themes</strong> and
                <strong> blue accents</strong>, I enjoy pushing the boundaries
                of
                <strong> creativity</strong> and <strong> functionality</strong>
                in every project I undertake. I am always exploring new ways to
                improve designs and implement
                <strong>
                  user-focused, visually appealing, and technically sound
                  websites
                </strong>
                . <br /> <br /> If you’re looking for a developer with a
                <strong> passion for coding</strong> and a
                <strong> commitment to quality</strong>, I’d love to collaborate
                and bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
