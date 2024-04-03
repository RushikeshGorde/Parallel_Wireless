import React from 'react'

const Case_Studies = () => {
  return (
    <>
          <div className="container-fluid home">
            <div className="imgg">
            <img src="https://www.parallelwireless.com/wp-content/uploads/blog-hero.jpg" class="img-fluid" alt="..."/>
            <h1 className='heading-white'>Case Studies</h1>
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
            <div className="carhov">
            <div class="container-3">
        <div class="row m-5">
            <div class="col-3"><p class="hover-2 para">5G OpenRAN in the UK PDF</p></div>
            <div class="col-3"><p class="hover-2 para">BYOC Case Study PDF</p></div>
            <div class="col-3"><p class="hover-2 para">Inland Cellular Case Study PDF</p></div>
            <div class="col-3"><p class="hover-2 para">Mayutel Case Study PDF</p></div>
        </div>
        <div class="row m-5">
            <div class="col-3"><p class="hover-2 para">Optus Case Study PDF</p></div>
            <div class="col-3"><p class="hover-2 para">Telefonica Case Study PDF</p></div>
            <div class="col-3"><p class="hover-2 para">Tier Case Study PDF</p></div>
            <div class="col-3"><p class="hover-2 para">Vodafone Case Study PDF</p></div>
        </div>
    </div>
            </div>
        </div>
    </>
  )
}

export default Case_Studies