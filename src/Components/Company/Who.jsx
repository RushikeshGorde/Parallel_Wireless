import React from 'react'
import '../Css/Style.css'

const Who = () => {
  return (
    <>
      <div className="container-fluid mt-5">
      <div class="home scrol">
        <img
          src="https://www.parallelwireless.com/wp-content/uploads/2022-Web-Banner-Collage-Who-We-Are-1600x500.jpg"
          class="img-fluid Main-img mt-5"
          alt="..."
        />
   
      <div class="heading">
        <h1 class="text-center display-2 fw-medium main-head">Who We are</h1>
      </div>
      </div>
   
      <div class="about text-center container">
        <h2 class="fs-1 mt-3">We Are Reimaginers</h2>
        <p class="main-para fs-5">
            Parallel Wireless is the only US company challenging the world’s legacy vendors with the industry’s only unified ALL G (5G/4G/3G/2G) software-enabled solution. People come to work here because we are building the future of telecom. They stay, because they are challenged and driven by an incredible technology and team. The company is engaged with 50+ leading operators worldwide and has been named as a best performing vendor by Telefonica and Vodafone. Parallel Wireless’s innovation and excellence in multi-technology, open virtualized RAN solutions have been recognized with 65+ industry awards.
        </p>
      </div>
    
      <div class="cards main-para mt-5 container">
        <div class="container">
          <div class="row">
            <div class="col-sm mt-5">
              <h3 class="fs-1">Reimagine Your Network. Reimagine Your Economics</h3>
              <p class="fs-5">
                Our mission since day one has been to help global mobile operators to reimagine their networks through Parallel Wireless’s unified ALL G cloud- native OpenRAN architecture and the world’s first and largest OpenRAN ecosystem by delivering substantial cost savings to their end users and industries.
              </p>
            </div>

            <div class="col-sm mt-5">
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/missionandvision.jpg"
                class="img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="row d-flex align-items-center">
            <div class="col-sm mt-5 flex-shrink-0">
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/sw-wave-585x415-1.jpg"
                class="img-fluid"
                alt="..."
              />
            </div>
            <div class="col-sm mt-5 flex-grow-1 ms-3">
              <h3 class="fs-1">Reimagine Your Network. Reimagine Your Economics</h3>
              <p class="fs-5">
                Our software-defined fully compliant and interoperable OpenRAN architecture was designed from the ground up to reduce complexity and drive out cost from every aspect from the RAN to the Core. We pride ourselves on offering a fully automated outdoor or indoor coverage and capacity solutions that are easy and cost-effective to deploy and maintain and are software upgradable to 5G.
              </p>
            </div>
          </div>
          <div class="row  d-flex align-items-center">
            <div class="col-sm mt-5 flex-grow-1">
              <h3 class="fs-1">Reimaginers Wanted!</h3>
              <p class="fs-5">
                People come to work at Parallel Wireless because they are inspired with our vision to reimagine telecom industry. They stay, because they are motivated by an incredible technology and team and are inspired every day by making a difference. We take pride in our commitment to employee growth, and our culture is built on atmosphere of empowerment, trust, integrity, respect, and open communication. We have assembled an amazing team that helped us to get deployed in over 60 global networks and are looking to expand the team to continue our industry disruption.
              </p>
            </div>

            <div class="col-sm mt-5 d-flex align-items-center">
              <img
                src="https://www.parallelwireless.com/wp-content/uploads/parallel-photo.jpg"
                class="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    
      <div class="youtube  text-center">
              <div class="container position-relative">
                <span class="icon">
                    <a href="https://youtu.be/zO0utxX14Kg">

                        <i class="fa-regular fa-circle-play"></i>
                    </a>
                </span>
                <img src="https://www.parallelwireless.com/wp-content/uploads/parallel-wireless-corporate-overview-2022-1170x658.jpg" class="img-fluid yt" alt="..."/>
              </div>
      </div>
      </div>

    </>
  )
}

export default Who