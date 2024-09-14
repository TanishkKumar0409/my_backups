import React from 'react'

export default function Gallery() {
  return (
    <>
       <section id="gallery" class="py-5 bg-dark text-light">
      <div class="container">
        <div class="text-center">
          <h2 class="mb-4">Gallery</h2>
          <div class="row">
            <div class="col-md-6 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                class="img-fluid rounded border border-5 border-secondary shadow-lg"
              />
            </div>
            <div class="col-md-6 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                class="img-fluid rounded border border-5 border-secondary shadow-lg"
              />
            </div>
          </div>
          <div class="row ">
            <div class="col-md-3 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                class="img-fluid rounded border border-5 shadow-lg border-secondary"
              />
            </div>
            <div class="col-md-3 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                class="img-fluid rounded border border-5 shadow-lg border-secondary"
              />
            </div>
            <div class="col-md-3 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                class="img-fluid rounded border border-5 shadow-lg border-secondary"
              />
            </div>
            <div class="col-md-3 mt-2">
              <img
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                alt=""
                class="img-fluid rounded border border-5 shadow-lg border-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
