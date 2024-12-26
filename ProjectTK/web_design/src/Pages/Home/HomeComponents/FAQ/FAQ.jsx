import React from 'react';


export default function FAQ() {
    const faqs = [
        { question: "What is your return policy?", answer: "Our return policy allows you to return items within 30 days of purchase for a full refund. Items must be in their original condition." },
        { question: "How do I track my order?", answer: "You can track your order using the tracking number provided in the confirmation email. Visit the 'Track Order' page on our website." },
        { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to select countries. Shipping fees and delivery times vary by location." },
        { question: "What payment methods do you accept?", answer: "We accept credit cards, debit cards, PayPal, and other major payment methods." },
        { question: "Can I cancel my order?", answer: "Yes, you can cancel your order within 24 hours of placing it, provided it has not yet been shipped." },
        { question: "Do you offer gift wrapping?", answer: "Yes, we offer gift wrapping services at checkout for an additional fee." },
        { question: "How can I contact customer service?", answer: "You can contact our customer service team via the Contact Us page or by calling our hotline." },
        { question: "What is your warranty policy?", answer: "We offer a one-year warranty on all our products. Please retain your receipt for warranty claims." },
        { question: "Can I change my shipping address after placing an order?", answer: "You can change your shipping address before the order is shipped by contacting customer support." },
        { question: "Do you have a loyalty program?", answer: "Yes, we have a loyalty program where you can earn points on purchases and redeem them for discounts." },
        { question: "What are your store hours?", answer: "Our store is open Monday through Friday from 9 AM to 8 PM and Saturday from 10 AM to 6 PM." },
        { question: "Do you have a physical store location?", answer: "Yes, we have several physical stores. Visit our Locations page to find one near you." }
    ];

    const getRandomFAQs = (faqs, count) => {
        const shuffled = [...faqs].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const selectedFAQs = getRandomFAQs(faqs, 4);

    return (
        <>
            <section className="bg-white py-5">
                <div className="container">
                    <div id="faqCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner bg-light rounded-5">
                            {selectedFAQs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    data-bs-interval="5000"
                                >
                                    <div className="text-center p-5">
                                        <h3 className="mb-3">{faq.question}</h3>
                                        <p className="text-muted">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#faqCarousel"
                            data-bs-slide="prev"
                            style={{ filter: "invert(1)" }}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#faqCarousel"
                            data-bs-slide="next"
                            style={{ filter: "invert(1)" }}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
