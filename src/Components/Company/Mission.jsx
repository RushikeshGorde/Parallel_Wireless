import React from 'react'

const Mission = () => {
    return (
        <>
            <h1 className='display-3 text-center mi-head'>
                Mission and Vision
            </h1>
            <div className="sonu">

                <div className="navv d-flex justify-content-center">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav d-flex justify-content-between mb-2 mb-lg-0 reul">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/white">VISION</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/solu">MISSION</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/video">VALUES</a>
                                    </li>
                                   
                                  

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Mission