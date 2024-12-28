import React from 'react'

export default function ContactForm() {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Contact Us'" }}>Contact Us</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6 bg-white rounded p-3">
                            <form action="" method="post">

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" required placeholder="Enter your name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" required placeholder="Enter your email" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="contact" className="form-label">Contact Number</label>
                                        <input type="tel" className="form-control" id="contact" name="contact" required placeholder="Enter your contact number" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input type="text" className="form-control" id="subject" name="subject" required placeholder="Enter the subject" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="4" required placeholder="Enter your message"></textarea>
                                </div>

                                <button type="submit" className="btn btn-custom custom-btn w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
