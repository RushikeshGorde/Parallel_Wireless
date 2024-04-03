import React from 'react'
import "../Css/Style.css"
const Hero = () => {
  return (
    <div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active hero1">
          <img src="https://www.parallelwireless.com/wp-content/uploads/website-banner-3.jpg" class="d-block w-100" alt="..." />

          <div className="herohed ms-5">

            <h2 className='fs-1'>Pioneering Unprecedented Open 
            <br />RAN Hardware-Agnostic Solutions</h2>
            <button type="button" class="rounded-pill albt mt-4 text-center">Learn More <span><i class="fa-solid fa-arrow-right"></i> </span></button>
          </div>

        </div>
        <div class="carousel-item hero1">
          <img src="https://www.parallelwireless.com/wp-content/uploads/website-banner-3.jpg" class="d-block w-100" alt="..." />

          <div className="herohed ms-5">

            <h2 className='fs-1'>Pioneering Unprecedented Open 
            <br />RAN Hardware-Agnostic Solutions</h2>
            <button type="button" class="rounded-pill albt mt-4 text-center">Learn More <span><i class="fa-solid fa-arrow-right"></i> </span></button>
          </div>


        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}

export default Hero