import React, { useEffect, useState } from 'react';
import { noFileAPI } from '../../../../Services/API/API';

export default function StorageAnalysis() {
    const username = JSON.parse(localStorage.getItem("user"));

    const [data, setData] = useState([]);
    const [gradientColors, setGradientColors] = useState({ start: "#e91e63", end: "#673ab7" });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await noFileAPI.get(`/user/${username}`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const intervalId = setInterval(() => {
            getData();
        }, 5000);

        getData();

        return () => clearInterval(intervalId);
    }, [username]);


    const usedSize = data.usedStorage || 0;
    const totalSize = data.totalStorage || 1;

    const percentage = parseFloat(((usedSize / totalSize) * 100).toFixed(2));

    const value = 628 - (628 * (percentage / 100));

    useEffect(() => {
        if (percentage <= 20) {
            setGradientColors({ start: "#00bcd4", end: "#2196f3" });
        } else if (percentage <= 40) {
            setGradientColors({ start: "#4caf50", end: "#8bc34a" });
        } else if (percentage <= 60) {
            setGradientColors({ start: "#ffc107", end: "#ff9800" });
        } else if (percentage <= 80) {
            setGradientColors({ start: "#ff5722", end: "#f44336" });
        } else {
            setGradientColors({ start: "#9c27b0", end: "#673ab7" });
        }
    }, [percentage]);

    return (
        <>
            <section className='bg-white py-5'>
                <div className="container">
                    <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": `'${username} Storage'` }}>
                        {username} Storage
                    </h2>
                    <div className="row py-3">


                        <div className="col-md-6 textJustify">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi deserunt exercitationem quos. Officiis quaerat minus earum quisquam deserunt necessitatibus nesciunt facere dolores. Non architecto ad suscipit, rerum nisi nesciunt harum maxime animi dolorem quos fuga deserunt impedit! Hic architecto incidunt fugiat nam laborum repudiandae perspiciatis nulla dicta beatae numquam animi cupiditate nesciunt, necessitatibus quo ipsum. Necessitatibus neque ullam voluptatem dicta quisquam, vitae assumenda quo. Eius aperiam nihil, aspernatur quidem nam labore veritatis, ad cumque non ipsam ducimus sit! Cum et veniam libero ipsum nisi rem. Necessitatibus, nesciunt, similique consequuntur commodi mollitia nihil fugit molestiae et obcaecati fugiat ducimus facere.
                            </p>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="skill position-relative">
                                <div className="outer rounded-circle">
                                    <div className="inner rounded-circle d-flex justify-content-center align-items-center">
                                        <div id="number" className='fw-bold'>
                                            {percentage}%
                                        </div>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px" className='position-absolute top-0 start-0'>
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="0%" stopColor={gradientColors.start} />
                                            <stop offset="100%" stopColor={gradientColors.end} />
                                        </linearGradient>
                                    </defs>
                                    <circle
                                        id="circle"
                                        cx="100"
                                        cy="100"
                                        r="90"
                                        strokeLinecap="round"
                                        style={{ "--array": value }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
