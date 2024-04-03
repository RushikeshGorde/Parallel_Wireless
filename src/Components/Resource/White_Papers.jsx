import React from 'react'

const White_Papers = () => {
  return (
    <>
        <div className="container-fluid home">
            <div className="imgg">
            <img src="https://www.parallelwireless.com/wp-content/uploads/blog-hero.jpg" class="img-fluid" alt="..."/>
            <h1 className='heading-white'>White Papers</h1>
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
            <div class="col-3">
               <p class="hover-2 para">5G NR Logical Architecture and its Functional Splits PDF</p>
            </div>
            <div class="col-3"><p class="hover-2 para">Tackling Network Densification Challenges for 5G PDF</p></div>
            <div class="col-3"><p class="hover-2 para">Open RAN Integration: Run With It PDF</p></div>
            <div class="col-3"><p class="hover-2 para">Prallel Wireless Creates OpenRAN "ALL G" Radio Access Network Architecture PDF</p></div>
            <div class="col-3 m-5"><p class="hover-2 para">Cloud Native Application 101 PDF</p></div>
            <div class="col-3 m-5"><p class="hover-2 para">5G Functional Splits PDF</p></div>
        </div>
    </div>
            </div>
        </div>
    </>
  )
}

export default White_Papers