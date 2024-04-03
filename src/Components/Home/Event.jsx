import React from 'react'
import "../Css/Style.css"
const Event = () => {
  return (
    <div>
      <div class="container-fluid bg-gr">
        <div class="container">

          <div class="row">
            <div class="col-sm mt-5">
              <div class="card bg-transparent border border-0 mt-5">
                <img src="https://www.parallelwireless.com/wp-content/uploads/icon-events.png" class="Event-img img-fluid" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Upcoming Events</h3>
                  <p class="card-text">Visit with us at upcoming tradeshows, conferences or attend our webinars to learn how we can help you reimagine your networks.</p>
                  <p class="d-inline-flex gap-1">
                    <a href="#" class="btn card-btn Allbtn" role="button" data-bs-toggle="button">Connect with us at events   <i class="fa-solid fa-arrow-right"></i></a>

                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm mt-5">
              <div class="card bg-transparent border border-0 mt-5">
                <img src="https://www.parallelwireless.com/wp-content/uploads/icon-awards.png" class="Event-img img-fluid" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Awards</h3>
                  <p class="card-text">We are honored and humbled to be recognized by the industry with awards for our innovation, technology vision and deployments..</p>
                  <p class="d-inline-flex gap-1">
                    <a href="#" class="btn card-btn Allbtn" role="button" data-bs-toggle="button">Learn More   <i class="fa-solid fa-arrow-right"></i></a>

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

export default Event