import React from 'react'
import "../Css/Style.css"
const Cards = () => {
  return (
    <div>
            <div class="container mt-5">
                <div class="container">

                    <div class="row">
                        <div class="col-sm ">
                            <div class="card border border-0">
                            <div className="cardove">

                                <img src="https://www.parallelwireless.com/wp-content/uploads/20211001-REIMAGINE-COVERAGE-opt-350x295.jpg" class="card-img-top cdimg" alt="..." />
                            </div>
                                <div class="card-body">
                                    <h3 className="card-title text-2xl font-medium">Reimagine Coverage</h3>
                                    <p class="card-text">Parallel Wireless OpenRAN supports indoor or outdoor deployment scenarios at the lowest TCO and can be deployed on an accelerated timeline to help mobile operators deliver coverage everywhere from rural to suburban to most dense urban.</p>
                                    <p class="d-inline-flex gap-1">
                                        <a href="#" class="btn card-btn Allbtn" role="button" data-bs-toggle="button">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm ">
                            <div class="card border border-0">
                            <div className="cardove">

                                <img src="https://www.parallelwireless.com/wp-content/uploads/20211102_REIMAGINE-CAPACITY-Home-page-350x295px-opt-350x295.jpg" class="card-img-top cdimg" alt="..." />
                            </div>
                                <div class="card-body">
                                    <h3 className="card-title text-2xl font-medium"> Reimagine Capacity</h3>
                                    <p class="card-text"> Easy to install, low-cost and high-performing cloud-native Parallel Wireless Open RAN supports macro, Massive MIMO or small cell deployments for densification and delivers superior end user QoS for consumers and industries in urban scenarios.</p>
                                    <p class="d-inline-flex gap-1">
                                        <a href="#" class="btn card-btn Allbtn" role="button" data-bs-toggle="button">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm ">
                            <div class="card border border-0">
                            <div className="cardove">

                                <img src="https://www.parallelwireless.com/wp-content/uploads/20211001-REIMAGINE-5G-AND-BEYOND-01-2-opt-350x295.jpg" class="card-img-top cdimg" alt="..." />
                            </div>
                                <div class="card-body">
                                    <h3 className="card-title text-2xl font-medium">Reimagine 5G and Beyond  </h3>
                                    <p class="card-text">Parallel Wireless cloud-native ORAN approach enables any 5G migration option and is software upgradable to any future 3GPP releases delivering the most cost-effective, easy to deploy, and advanced 5G capabilities for all 5G use cases.</p>
                                    <p class="d-inline-flex gap-1">
                                        <a href="#" class="btn card-btn Allbtn" role="button" data-bs-toggle="button">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cards