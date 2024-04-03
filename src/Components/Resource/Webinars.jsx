import React from 'react'

const Webinars = () => {
    return (
        <>
            <div className="container-fluid text-center home mb-5">
                <div className="imgg">
                    <img src="https://www.parallelwireless.com/wp-content/uploads/blog-hero.jpg" class="img-fluid" alt="..." />
                    <h1 className='heading-white'>Webinars</h1>
                </div>
                <div className="white-nav">

                    <div className="navv d-flex justify-content-center">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav d-flex justify-content-between mb-2 mb-lg-0 reul">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/white">White Papers</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/solu">Solution Overviews</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/video">Videos</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/blod">Blog</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/case">Case Studies</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/webinars">Webinars</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/openran">OpenRAN</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="container">
                <div className="Webinar">
                    <h2 className='text-center fs-3 mt-5'>Join our webinars, live or on-demand, to learn about our unified, cloud-native, software-based OpenRAN solutions and All G (5G, 4G, 3G, 2G) technologies.</h2>
                    <h2 className='text-center fs-1 mt-5'>   5G NSA vs SA: Calculating the right way forward</h2>
                    <div class="youtube  text-center">
                        <div class="container position-relative">
                            <span class="icon">
                                <a href="https://www.youtube.com/user/ParallelWireless/about">

                                    <i class="fa-regular fa-circle-play"></i>
                                </a>
                            </span>
                            <img src="https://i.ytimg.com/vi/jPxHvmyR57w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNSgTMA8=&rs=AOn4CLAhC5qUk6IPcI8IYfWSUnNxY_XBCw" class="img-fluid yt" alt="..." />
                        </div>
                    </div>

                    <h2 className='text-center fs-1 mt-5'> Cloud-Native Webinar Series</h2>
                    <div className="webhrr"></div>
                    <div class="youtube  text-center">
                        <h2 className='fs-2 fw-bold text-start'>Cloud-Native Open RAN</h2>
                        <div class="container position-relative">

                            <img src="https://www.parallelwireless.com/wp-content/uploads/Cloud-Native-Open-RAN-768x424.jpg" class="img-fluid yt" alt="..." />
                        </div>
                    </div>
                    <h2 className='fs-2 fw-bold text-start'>Cloud-Native Applications 101</h2>
                    <div class="container position-relative">

                        <img src="https://www.parallelwireless.com/wp-content/uploads/Cloud-Native-Open-RAN-768x424.jpg" class="img-fluid yt" alt="..." />
                    </div>
                </div>
                <h2 className='text-start fs-1 mt-5'>  Parallel Wireless OpenRAN Solutions Webinar Series</h2>
                <div className="webhrr"></div>
                <div className="Webinar">
                    <h2 className='text-center fs-3'>Join our webinars, live or on-demand, to learn about our unified, cloud-native, software-based OpenRAN solutions and All G (5G, 4G, 3G, 2G) technologies.</h2>
                    <h2 className='text-center fs-1 mt-5'>   5G NSA vs SA: Calculating the right way forward</h2>
                   

                    <h2 className='text-center fs-1 mt-5'>On-Demand: Part 1 – Overview</h2>
                    <div className="webhrr"></div>
                    <div class="youtube  text-center">
                        <h2 className='fs-2 fw-bold text-start'>Cloud-Native Open RAN</h2>
                        <div class="container position-relative">

                            <img src="https://www.parallelwireless.com/wp-content/uploads/OpenRAN-Webinar-Overview.jpg" class="img-fluid yt" alt="..." />
                        </div>
                    </div>
                    <h2 className='fs-2 fw-bold text-start'>On-Demand: Part 2 – All G OpenRAN</h2>
                    <div class="container position-relative">

                        <img src="https://www.parallelwireless.com/wp-content/uploads/OpenRAN-Webinar-Overview.jpg" class="img-fluid yt" alt="..." />
                    </div>
                    <h2 className='fs-2 fw-bold text-start'>On Demand: Part 3.1 – 5G Use Cases</h2>
                    <div class="container position-relative">

                        <img src="https://www.parallelwireless.com/wp-content/uploads/Cover-Slide-v2.jpg" class="img-fluid yt" alt="..." />
                    </div>
                    <h2 className='fs-2 fw-bold text-start'>On-Demand: Part 4 – Monetizing 5G</h2>
                    <div class="container position-relative">

                        <img src="https://www.parallelwireless.com/wp-content/uploads/Cover-Slide-v2.jpg" class="img-fluid yt" alt="..." />
                    </div>

                    <h3 className='text-start'>Subscribe to our BrightTalk channel and sign up for the remainder of the OpenRAN series as the sessions become available.</h3>
                </div>
            </div>

        </div>
        </>
    )
}

export default Webinars