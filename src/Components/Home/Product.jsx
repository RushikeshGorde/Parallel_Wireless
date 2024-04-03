import React from 'react'
import "../Css/Style.css"
const Product = () => {
  return (
    <div class="container">
      <h2 className="my-5 display-5 fw-fw-fw-bolder">Our Products</h2>

      <div class="row">
        <div class="col-sm">
          <div class="card">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/product-1.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-title">Access: OpenRAN</h2>
              <p class="card-text">
                Our OpenRAN hardware ecosystem consists of macros, outdoor and
                indoor small cells, and Massive MIMOs that are all Software
                Defined Radios (SDRs) and can be software upgraded to 5G for
                ease of deployment and much lower cost.
              </p>
              <a href="#" class="albt rounded-pill">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/20211001-NETWORK-SOFTWARE-350x225.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-title">Network Software</h2>
              <p class="card-text">
              Our software platforms provide RAN and core services, orchestration, programmability, and service assurance including analytics and monitoring to deliver business agility, TCO reduction and to enable new revenue opportunities.
              </p>
              <a href="#" class="albt rounded-pill">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card">
            <img
              src="https://www.parallelwireless.com/wp-content/uploads/20211102_Intelligence-and-Automation-section-1-Home-page-350x225px-350x225.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title">Intelligence <br /> 
and Automation</h3>
              <p class="card-text">
              Network automation and intelligence software across ALL Gs for outdoor and indoor delivers TCO savings with self-configuration and self-optimization to enable optimal subscriber experience.
              </p>
              <a href="#" class="albt rounded-pill">
                Learn More
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Product