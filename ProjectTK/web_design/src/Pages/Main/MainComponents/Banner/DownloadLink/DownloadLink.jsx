import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DownloadLink(props) {
    const data = props.data;

    const handleCopy = (link) => {
        navigator.clipboard.writeText(link);
        toast.success("Link copied to clipboard!");
    };

    return (
        <div className="container-fluid py-5">
            <div className="bg-white text-dark p-md-5 p-3 rounded shadow form-box position-relative overflow-hidden">
                <h3 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Download Link'" }}>
                    Download Link
                </h3>

                {data.map((file, index) => (
                    <ul className="list-group" key={index}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Link className="text-truncate">{file.downloadLink}</Link>
                            <button
                                className="btn btn-light"
                                onClick={() => handleCopy(file.downloadLink)}
                            >
                                <i className="fa fa-copy"></i>
                            </button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="text-center fs-6">
                                Send To: <strong>{file.receiverEmail}</strong>
                            </p>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="text-center fs-6">
                                Total Files Shared: <strong>{data.length}</strong>
                            </p>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="text-center fs-6">
                                Link will expire on{" "}
                                {new Date(file.downloadLinkExpiry).toLocaleString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", })}
                            </p>
                        </li>

                    </ul>
                ))}

            </div>
        </div>
    );
}
