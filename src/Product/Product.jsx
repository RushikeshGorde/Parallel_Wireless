import React from 'react'

const Product = () => {
    return (
        <>
            <div className="container-fluid home p-0">
                <div className="home">

                    <img src="https://www.parallelwireless.com/wp-content/uploads/products-hero-1600x500.jpg" class="img-fluid position-sticky" alt="..." />
                    <div className="heading2">
                        <h1 className='display-3 text-center'>Products & Technologies</h1>
                       
                    </div>
                </div>
                <div className="heading-res-2 mt-5 container">
                    <h2 className='mt-5 display-4 text-center'>Reimagine Your Network. <br />
                        Reimagine Your Economics </h2>
                    <p className='fs-4 text-secondary mt-5 text-center'>The RAN accounts for around 60% of CAPEX and 65% of OPEX in the cellular network TCO. Mobile operators need to maximize the value of their existing network assets before giving the green light to new investment. With its software-defined and cloud-native OpenRAN network architecture, and with the world’s largest OpenRAN ecosystem, Parallel Wireless is leading the Open movement by delivering substantial cost savings to mobile operators for building or maintaining both today’s 4G/3G/2G networks and tomorrow’s multi-vendor 5G networks. We strive to support our customers as they enable best-quality experiences to their end users and industries.

</p>
                </div>
                <div className="Res-cord container mt-5 mb-5">
                    <div class="container">

                        <div class="row d-flex align-items-center">
                            <div class="col-sm flex-grow-1 ms-3">
                                <h2 className='fs-1'>Products</h2>
                                <p className='fs-4'>Our unified, cloud-native, software-defined product portfolio spans across RAN, transport, Core, and Analytics to help reduce the cost and deployment complexity of today’s and tomorrow’s networks for consumers and industries.</p>
                                <p class="d-inline-flex gap-1">
                                    <a href="#" class="btn card-btn Allbtn" role="button" data-bs-toggle="button">Learn More </a>

                                </p>
                            </div>
                            <div class="col-sm flex-shrink-0">
                                <img src="https://www.parallelwireless.com/wp-content/uploads/products-img.jpg" class="img-fluid" alt="..." />
                            </div>

                        </div>
                        <div class="row mt-5 d-flex align-items-center">
                            <div class="col-sm flex-shrink-0">
                                <img src="https://www.parallelwireless.com/wp-content/uploads/open-ran.jpg" class="img-fluid" alt="..." />
                            </div>
                            <div class="col-sm flex-grow-1 ms-3">
                                <h2 className='fs-1'>Technologies</h2>
                                <p className='fs-4'>Parallel Wireless leads the innovation in wireless infrastructure, with software-defined unified cloud-native OpenRAN network solutions. We provide the world’s largest OpenRAN ecosystem, delivering substantial cost savings to mobile operators as they build or maintain today’s 4G/3G/2G and tomorrow’s multi-vendor 5G networks to enable quality experience to their end users.</p>
                                <p class="d-inline-flex gap-1">
                                    <a href="#" class="btn card-btn Allbtn" role="button" data-bs-toggle="button">Learn More </a>

                                </p>
                            </div>


                        </div>
                      
                    </div>
                </div>
                <div className="res-last pt-5 pb-5 text-center shadow-lg p-3 mb-5  rounded">
                    <p className='fs-2 fw-medium container '>Visit our Resources page to download data sheets, solution overviews, watch webinar recordings and much more!
                    
                    </p>
                    <i class="fa-solid fa-cloud-arrow-down display-3 foot-icon "></i>
                </div>
            </div>
        </>
    )
}

export default Product