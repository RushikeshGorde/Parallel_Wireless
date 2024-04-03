import React from 'react'

const Footer = () => {
  return (
   <div className='foot'>
            <div class="container-fluid">
                <div class="container">

                    <div class="row mt-5">
                        <div class="col-sm">
                            <img src="https://www.parallelwireless.com/wp-content/uploads/brand-paralell-wireless.svg" class="img-fluid foot-img" alt="..." />
                            <br />
                            <br />
                            <h3>Follow Us</h3>
                            <div className="foot-icon">
                          

                                <i class="fa-brands fa-x-twitter  fs-3 "></i>
                          
                                <i class="fa-brands fa-linkedin ms-3 fs-3"></i>
                                <i class="fa-brands fa-facebook ms-3 fs-3"></i>
                                <i class="fa-brands fa-youtube ms-3 fs-3"></i>

                            </div>
                        </div>
                        <div class="col-sm">
                            <h3 className='fw-medium'>IMPORTANT LINKS</h3>
                            <br />

                            <div className="hrr" />
                            <div class="container">

                                <div class="row">
                                    <div class="col-sm">
                                        <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>Resources</a> <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>Leadership</a> <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>News</a> <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>Contact</a> <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>Careers</a> <br />
                                    </div>
                                    <div class="col-sm">
                                        <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>About Us</a> <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>Solutions</a> <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>Technologies</a> <br />
                                        <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'>Products</a> <br />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <h3 className='fw-medium'>CONTACT US</h3>
                            <br />
                            <div className="hrr " />
                            <div className="fot-ico">
                                <i class="fa-solid fa-headset mt-4"> </i> <span className='fs-5 ms-3'>1-603-589-9937</span><br />
                                <div>

                                    <i class="fa-solid fa-location-dot mt-4"></i> <span className='ms-4 fs-5'>300 Innovative Way, Suite #2310 <span className='ms-5'>
                                        Nashua, NH 03062, USA
                                    </span>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-4">
                    <h4 className='ms-5'>
                        <span className='ms-5'>

                            &copy; {new Date().getFullYear()},<span>Parallel Wireless. All rights reserved.</span>
                        </span>
                    </h4>
                    <span className='ms-5'>
                    <a href="" className='text-dark  link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'><span className='footlink'></span>Privacy Policy &nbsp; &nbsp;  | &nbsp; &nbsp;</a> 
                    </span>
                    <span className='ms-2'>
                    <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'><span className='ms-2'></span>Legal &nbsp; &nbsp;  |  </a> 
                    </span>
                    <span className='ms-2'>
                    <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'><span className='ms-2'></span>Cookies &nbsp; &nbsp;  |  </a> 
                    </span>
                    <span className='ms-2'>
                    <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'><span className='ms-2'></span>Terms of Use &nbsp; &nbsp;  |  </a> 
                    </span>
                    <span className='ms-2'>
                    <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'><span className='ms-2'></span>Trademarks &nbsp; &nbsp;  |  </a> 
                    </span>
                    <span className='ms-2'>
                    <a href="" className='text-dark link-offset-2 fs-5 link-underline link-underline-opacity-0 mt-3 mb-3'><span className='ms-2'></span>PO Terms & Conditions </a> 
                    </span>
                </div>
            </div>
        </div>
  )
}

export default Footer