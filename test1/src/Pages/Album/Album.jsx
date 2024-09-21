import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

export default function Album() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const fetchData = await fetch("https://jsonplaceholder.typicode.com/photos");
            const jsonData = await fetchData.json();
            const filteredData = jsonData.filter((item) => item.albumId === parseInt(id));
            setData(filteredData);
        };
        getData();
    }, [id]);

    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: "slideOutUp",
        nav: false,
        dots: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
        },
    };

    return (
        <>
           {data.length>0?( <OwlCarousel className="owl-theme" {...options}>
                {data.map((item) => (
                    item.id==1?(<div className="item" key={item.id}>
                        <img src={item.url} alt={item.title} />
                        <p>{item.title}</p>
                    </div>):""
                ))}
            </OwlCarousel>):(<Loader />)}
        </>
    );
}
