import React from 'react';

export default function Newsletter() {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <h2 className="fw-bold">Subscribe to Our Newsletter</h2>
              <p className="text-muted">Stay updated with the latest news and special offers!</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control border-0 shadow-sm" 
                  placeholder="Enter your email address"
                  aria-label="Email"
                  id='newsletter'
                />
                <button className="btn btn-custom custom-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
