import React from 'react'

const Nav = () => {
  return (
    <div>
 <div class="container-fluid navbarr">
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <nav class="navbar bg-body-tertiary">
            <div class="container">
            <a href="/">

              <img
                src="https://www.parallelwireless.com/wp-content/uploads/parallel_wireless.svg"
                alt="Bootstrap"
                width="180"
                height="100"
              />
            </a>
            </div>
          </nav>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li class="nav-item dropdown">
             
                <a
                  class="nav-link dropdown-toggle"
                  href="/solu"
                  role="button"
                  // data-bs-toggle="dropdown"
                  
                >
               Solutions
                  
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="">Urban</a></li>
                  <li><a class="dropdown-item" href="#">Rural</a></li>
                  <li><a class="dropdown-item" href="#">Private LTE</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/product">Products & Technologies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/cost"> Customers</a>
              </li>
              <li class="nav-item dropdown" id="myDropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/Company"
                  data-bs-toggle="dropdown"
                >
                  Company
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/who"> Who We Are&raquo; </a>
                    <ul class="submenu dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/mission">Mission and Vision</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/news"> News &raquo; </a>
                    <ul class="submenu dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">Press Relise</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">News Covrage</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/leader"> Leadership </a></li>
                  <li><a class="dropdown-item" href="#"> Award </a></li>
                  <li>
                    <a class="dropdown-item" href="/concact"> Concact &raquo; </a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Support</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/partener"> Partners </a></li>
                  <li><a class="dropdown-item" href="#"> Legal </a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/carer">Careers</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/resource"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mt-2 ms-3">
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <form class="d-flex" role="search">
                <button class="btn btn-outline-danger ms-5"  type="submit">
                <a href="/con" className='text-black link-offset-2 link-underline link-underline-opacity-0'> Contact us</a> 
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</div>

  )
}

export default Nav