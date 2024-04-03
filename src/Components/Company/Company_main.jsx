import React from 'react'
import '../Css/Style.css'
const Company_main = () => {
    return (
        <><div className="home">
            <img
                src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="img-fluid Main-img w-100"
                alt="..." />
        </div><div className="heading">
                <h1 className="text-center display-2 fw-medium main-head">Company</h1>
            </div><div className="about text-center container">
                <h2 className="fs-1 mt-3">About Us</h2>
                <p className="main-para fs-5">
                    Parallel Wireless is leading the OpenRAN movement with the world’s
                    first 5G/4G/3G/2G cloud-native OpenRAN architecture that is open,
                    standardized, and interoperable across five key domains – RAN, Edge,
                    Core, Orchestration and Analytics. <br />

                    Through open collaboration with our OpenRAN ecosystem partners, we
                    have created a world first and largest fully-compliant OpenRAN
                    ecosystem that is capable of delivering the next generation of
                    wireless infrastructure at dramatically lower cost, ensuring more
                    equal access to 5G across the globe.
                    <br />
                    Our OpenRAN portfolio is designed to help our customers modernize
                    their networks, reduce deployment cost and complexity, increase
                    operational efficiency, find new revenue streams, and start deploying
                    multi-vendor 5G networks today.
                    <br />
                    Our customers include over 60 global mobile operators, as well as
                    private and public industries and governments that are all using our
                    software-defined network portfolio to reimagine their networks and get
                    ready for 5G.
                </p>
            </div><div className="cards main-para mt-5 container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm mt-5">
                            <h3 className="fs-1">Leadership</h3>
                            <p className="fs-5">
                                The Parallel Wireless team has experience building every
                                component of the cellular network across 2G, 3G, 4G and 5G. We
                                have built many companies from scratch into the leading industry
                                players. For the past 7+ years, our amazing team has been
                                reimagining the architecture of the cellular networks to make
                                deploying and maintaining any G networks, including 5G, easy and
                                cost-effective.
                            </p>
                        </div>

                        <div className="col-sm mt-5">
                            <img
                                src="https://www.parallelwireless.com/wp-content/uploads/leadership-image-585x415.jpg"
                                className="img-fluid"
                                alt="..." />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-sm mt-5 flex-shrink-0">
                            <img
                                src="https://www.parallelwireless.com/wp-content/uploads/parallel-reimagine-585x415.jpg"
                                className="img-fluid"
                                alt="..." />
                        </div>
                        <div className="col-sm mt-5 flex-grow-1 ms-3">
                            <h3 className="fs-1">Our Culture</h3>
                            <p className="fs-5">
                                We are a fast-moving technology company that is proud of what we
                                do, ambitious about innovation and collaboration, and keenly
                                focused on our customers’ success.
                            </p>
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default Company_main