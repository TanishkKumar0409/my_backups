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
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                className={`img-fluid rounded border border-5 border-${props.SecondaryTheme} shadow-lg`}
              />
            </div>
            <div className="col-md-6 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                className={`img-fluid rounded border border-5 border-${props.SecondaryTheme} shadow-lg`}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                className={`img-fluid rounded border border-5 shadow-lg border-${props.SecondaryTheme}`}
              />
            </div>
            <div className="col-md-3 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                className={`img-fluid rounded border border-5 shadow-lg border-${props.SecondaryTheme}`}
              />
            </div>
            <div className="col-md-3 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                className={`img-fluid rounded border border-5 shadow-lg border-${props.SecondaryTheme}`}
              />
            </div>
            <div className="col-md-3 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
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
