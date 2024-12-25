import React from 'react'
import ImageView from './ViewExt.jsx/ImageView'
import Footer from '../../Components/Footer/Footer'
import VideoView from './ViewExt.jsx/VideoView'

export default function FileView() {
    return (
        <>
            <section className='bgGradient py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col text-center py-md-5 pt-5">
                            {/* <ImageView /> */}
                            <VideoView />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
