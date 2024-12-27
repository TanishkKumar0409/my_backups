import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img from "../../../../Image/Wave.jpg";

export default function Features() {
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

    const features = [
        {
            title: "Secure File Upload",
            description: "Easily upload your files with end-to-end encryption to ensure data safety.",
            iconClass: "fa fa-cloud-upload",
            cardBg: "#06b6d4"
        },
        {
            title: "Large Storage Capacity",
            description: "Store large files and access them from anywhere, anytime.",
            iconClass: "fa fa-database",
            cardBg: "#ef4444"
        },
        {
            title: "File Sharing",
            description: "Share files securely with specific users or through public links.",
            iconClass: "fa fa-share-alt",
            cardBg: "#fbbf24"
        },
        {
            title: "Version Control",
            description: "Track file changes and access previous versions as needed.",
            iconClass: "fa fa-history",
            cardBg: "#10b981"
        },
        {
            title: "Real-Time Collaboration",
            description: "Work together on documents with teammates in real-time.",
            iconClass: "fa fa-users",
            cardBg: "#a78bfa"
        },
    ];

    return (
        <section className="bg-white py-5">
            <div className="container">
                <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Features'" }}>Features</h2>
                <OwlCarousel className="owl-theme" {...owlOptions}>
                    {features.map((feature, index) => (
                        <div className="item" key={index}>
                            <div className="featureCard position-relative rounded overflow-hidden border" style={{ "--cardColor": feature.cardBg }}>
                                <img
                                    src={img}
                                    className="position-absolute top-0 start-0 w-100 h-100 featureImg"
                                    alt="Feature Background"
                                />
                                <div className="featureCardContent p-4 text-center text-white">
                                    <div className="featureCardIcon mb-3">
                                        <i
                                            className={`fa ${feature.iconClass} p-3 fs-2 rounded-circle shadow`}
                                            style={{
                                                background: "rgba(0, 255, 255, 0.2)",
                                                color: "white",
                                            }}
                                        ></i>
                                    </div>
                                    <h3 className="featureCardTitle mb-2">{feature.title}</h3>
                                    <p className="featureCardText">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    );
}
