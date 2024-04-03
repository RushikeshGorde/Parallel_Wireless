import React from 'react'
import '../Css/Style.css'
const News = () => {
  return (
    <>
      <div class="home scrol">
        <img
          src="https://www.parallelwireless.com/wp-content/uploads/hero-resources.jpg"
          class="img-fluid Main-img"
          alt="..."
        />
    

      <div class="heading sc">
        <h1 class="text-center display-2 fw-medium main-head">News</h1>
      </div>
      </div>
      <div class="about text-center container">

        <p class="main-para fs-5">
          At Parallel Wireless, we try to be as active as possible within the markets we service. In doing so, we find ourselves attending many events, conferences, and tradeshows in the wireless, telecom, and Public Sector industries. If you would like to hear what we have presented at previous events, or to see what noise we’ve been making in industry publications, visit our News page to learn more about our Open RAN solutions and deployments. If you would like to see what future events we will be attending, or to setup a meeting with us at one of these upcoming events, visit our Events page.
        </p>
      </div>

      <div class="cards mt-5 container">

        <div class="container text-center">

          <div class="row">

            <div class="col-sm">
              <div class="news-img1">

                <div class="news-head">

                  <h2 class="ms-3">In The News</h2>
                </div>
                <img src="https://www.parallelwireless.com/wp-content/uploads/in-the-news.jpg" class="img-fluid news-img" alt="..." />
              </div>
            </div>
            <div class="col-sm">
              <div class="news-img1">

                <div class="news-head">

                  <h2 class="ms-3">Hear Us Speak</h2>
                </div>
                <img src="https://www.parallelwireless.com/wp-content/uploads/upcomingevent-e1620925173854.png" class="img-fluid news-img" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center mt-5">

          <div class="row">

            <div class="col-sm">
              <div class="news-img1">
                <div class="news-head">

                  <h2 class="ms-3">Press Releases</h2>
                </div>

                <img src="https://www.parallelwireless.com/wp-content/uploads/press-releases-sm.jpg" class="img-fluid news-img" alt="..." />
              </div>
            </div>
            <div class="col-sm">
              <div class="news-img1">
                <div class="news-head">

                  <h2 class="ms-3">Awards</h2>
                </div>

                <img src="https://www.parallelwireless.com/wp-content/uploads/ourawards.png" class="img-fluid news-img" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default News