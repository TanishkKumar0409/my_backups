import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nesciunt fuga iure molestias architecto quae, sint consectetur pariatur amet ipsum quod numquam inventore aut, doloremque at, earum neque nostrum laboriosam. Tempora, cupiditate nam eum expedita delectus repellendus sunt animi nulla dolore magni aperiam placeat cum quod nostrum voluptates beatae! Illo asperiores voluptatum laudantium aspernatur quas aperiam dolore doloremque repudiandae sapiente.",
            name: "John Doe",
            role: "Web Developer",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            stars: 3
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nesciunt fuga iure molestias architecto quae, sint consectetur pariatur amet ipsum quod numquam inventore aut, doloremque at, earum neque nostrum laboriosam. Tempora, cupiditate nam eum expedita delectus repellendus sunt animi nulla dolore magni aperiam placeat cum quod nostrum voluptates beatae! Illo asperiores voluptatum laudantium aspernatur quas aperiam dolore doloremque repudiandae sapiente.",
            name: "Jane Smith",
            role: "UI/UX Designer",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            stars: 5
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nesciunt fuga iure molestias architecto quae, sint consectetur pariatur amet ipsum quod numquam inventore aut, doloremque at, earum neque nostrum laboriosam. Tempora, cupiditate nam eum expedita delectus repellendus sunt animi nulla dolore magni aperiam placeat cum quod nostrum voluptates beatae! Illo asperiores voluptatum laudantium aspernatur quas aperiam dolore doloremque repudiandae sapiente.",
            name: "Michael Brown",
            role: "Product Manager",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            stars: 4
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nesciunt fuga iure molestias architecto quae, sint consectetur pariatur amet ipsum quod numquam inventore aut, doloremque at, earum neque nostrum laboriosam. Tempora, cupiditate nam eum expedita delectus repellendus sunt animi nulla dolore magni aperiam placeat cum quod nostrum voluptates beatae! Illo asperiores voluptatum laudantium aspernatur quas aperiam dolore doloremque repudiandae sapiente.",
            name: "Emily Clark",
            role: "Software Engineer",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
            stars: 5
        },
        {
            id: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nesciunt fuga iure molestias architecto quae, sint consectetur pariatur amet ipsum quod numquam inventore aut, doloremque at, earum neque nostrum laboriosam. Tempora, cupiditate nam eum expedita delectus repellendus sunt animi nulla dolore magni aperiam placeat cum quod nostrum voluptates beatae! Illo asperiores voluptatum laudantium aspernatur quas aperiam dolore doloremque repudiandae sapiente.",
            name: "David Green",
            role: "Data Scientist",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
            stars: 4
        },
        {
            id: 6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nesciunt fuga iure molestias architecto quae, sint consectetur pariatur amet ipsum quod numquam inventore aut, doloremque at, earum neque nostrum laboriosam. Tempora, cupiditate nam eum expedita delectus repellendus sunt animi nulla dolore magni aperiam placeat cum quod nostrum voluptates beatae! Illo asperiores voluptatum laudantium aspernatur quas aperiam dolore doloremque repudiandae sapiente.",
            name: "Sarah Lee",
            role: "Marketing Manager",
            image: "https://randomuser.me/api/portraits/women/6.jpg",
            stars: 5
        }
    ];

    const owlOptions = {
        loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
        },
    };

    return (
        <>
            <section className="bg-light py-5">
                <div className="container">
                    <OwlCarousel className="owl-theme" {...owlOptions}>
                        {testimonials.map((testimonial) => (
                            <div className="item" key={testimonial.id}>
                                <div className="testimonialCard d-flex flex-column bg-white shadow-sm">
                                    <div className="testimonialCardHead py-3 text-white p-3 textJustify">
                                        <p>{testimonial.text}</p>
                                    </div>
                                    <div className="testimonialCardBody d-flex">
                                        <div className="testimonialCardImage " style={{ width: "30%" }}>
                                            <img src={testimonial.image} className="img-fluid h-100" alt={testimonial.name} />
                                        </div>
                                        <div className="testimonialCardAbout p-3">
                                            <h2>{testimonial.name}</h2>
                                            <h3 className="text-muted fs-5">{testimonial.role}</h3>
                                            <div className="stars">
                                                {Array.from({ length: testimonial.stars }, (_, index) => (
                                                    <i key={index} className="fa fa-star text-warning"></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}
