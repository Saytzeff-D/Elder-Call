import React from 'react'
import NavbarBrand from '../assets/logo-nav.png'
import NavbarBrandMobile from '../assets/logo-nav-mobile.png'

const Navbar = ()=>{
    return (
        <div>
            {/* Desktop Nav */}
            <div className='d-md-block d-none'>
                <nav className='container py-4'>
                    <div data-aos="fade-down">
                        <a className='pe-5' href='#home'>Home</a>
                        <a className='pe-5' href='#features'>Features</a>
                        <a href='#faqs'>Faqs</a>
                    </div>
                    <div data-aos="zoom-out" className="logo">
                        <img src={NavbarBrand} alt='navbar_brand' className='img-fluid' />
                    </div>
                    <div data-aos="fade-down" className="right">
                        <a href='https://drive.google.com/uc?export=download&id=1XkwQIsKB-RpcZmgqr8132Y9T6m2EZIBi' target='_blank' className='btn btn-elder' download>
                            Download Now
                        </a>
                    </div>
                </nav>
            </div>
            {/* Mobile */}
            <div className='d-md-none d-block'>
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <div data-aos="fade" className="">
                            <img src={NavbarBrandMobile} alt='navbar_brand' className='img-fluid' />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-md-2">
                                <a href='#home' data-aos="fade" className='nav-link'>Home</a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a href='#features' data-aos="fade" className='nav-link'>Features</a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a href='#faqs' data-aos="fade" className='nav-link'>Faqs</a>
                            </li>
                            <li data-aos="fade" className="nav-item px-md-2">
                                <a href='https://drive.google.com/uc?export=download&id=1XkwQIsKB-RpcZmgqr8132Y9T6m2EZIBi' target='_blank' className='nav-link btn btn-elder' download>
                                    Download Now
                                </a>
                            </li>                            
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar