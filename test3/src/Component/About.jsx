import React from 'react'

export default function About() {
  return (
    <>
       <section id="about" className="py-5 bg-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>
              I'm a passionate web developer with a knack for creating
              responsive, dynamic, and visually appealing websites. My expertise
              lies in HTML, CSS, JavaScript, and frameworks like Bootstrap and
              React.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
              className="img-fluid rounded-circle"
              alt="Tanishk"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
