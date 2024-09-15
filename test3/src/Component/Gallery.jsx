import React from 'react'

export default function Gallery(props) {
  return (
    <>
       <section id="gallery" className={`py-5 bg-${props.darkTheme} text-${props.darkTheme==="dark"?"light":"dark"}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4">Gallery</h2>
          <div className="row">
            <div className="col-md-6 mt-2">
              <img
                src="/Images/gallery/g1.jpg"
                alt=""
                className={`img-fluid rounded border border-5 border-${props.SecondaryTheme} shadow-lg`}
              />
            </div>
            <div className="col-md-6 mt-2">
              <img
                src="/Images/gallery/g2.jpg"
                alt=""
                className={`img-fluid rounded border border-5 border-${props.SecondaryTheme} shadow-lg`}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3 mt-2">
              <img
                src="/Images/gallery/g3.jpg"
                alt=""
                className={`img-fluid rounded border border-5 shadow-lg border-${props.SecondaryTheme}`}
              />
            </div>
            <div className="col-md-3 mt-2">
              <img
                src="/Images/gallery/g4.jpg"
                alt=""
                className={`img-fluid rounded border border-5 shadow-lg border-${props.SecondaryTheme}`}
              />
            </div>
            <div className="col-md-3 mt-2">
              <img
                src="/Images/gallery/g5.jpg"
                alt=""
                className={`img-fluid rounded border border-5 shadow-lg border-${props.SecondaryTheme}`}
              />
            </div>
            <div className="col-md-3 mt-2">
              <img
                src="/Images/gallery/g6.jpg"
                alt=""
                className={`img-fluid rounded border border-5 shadow-lg border-${props.SecondaryTheme}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
