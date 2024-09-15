import React from "react";

export default function About(props) {
  return (
    <>
      <section id="about" className={`py-5 bg-${props.SecondaryTheme}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/Images/Group.jpg"
                className={`img-fluid rounded-circle shadow-lg border border-5 border-${props.darkTheme==="dark"?"light":"dark"}`}
                alt="Tanishk"
              />
            </div>
            <div className="col-md-6">
              <h2>About Me</h2>
              <br />
              <p>
                Hi, I'm Tanishk Kumar, a passionate web developer with a strong
                background in front-end and back-end development. Over the past
                few years, I’ve honed my skills in crafting responsive,
                user-friendly websites using modern technologies like HTML, CSS,
                SCSS, PHP, MySQL, Bootstrap, Tailwind, and JavaScript. My
                journey in web development has been fueled by a love for
                creating clean, efficient, and innovative digital solutions that
                deliver a seamless user experience. <br />
                <br />
                I recently completed a 3-month web development internship at
                Offbeat Pixels, where I developed four projects and deepened my
                knowledge of cutting-edge design principles and best practices.
                My expertise also extends to tools like Figma for UI/UX design,
                Git and GitHub for version control, and I am continuously
                expanding my skill set to include the latest frameworks and
                technologies.
                <br />
                <br />
                Whether it's building dynamic, animated web pages or designing
                templates with purely dark black themes and blue accents, I
                enjoy pushing the boundaries of creativity and functionality in
                every project I undertake. I am always exploring new ways to
                improve designs and implement user-focused, visually appealing,
                and technically sound websites.
                <br />
                <br />
                If you’re looking for a developer with a passion for coding and
                a commitment to quality, I’d love to collaborate and bring your
                ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
