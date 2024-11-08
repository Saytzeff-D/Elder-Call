import React from 'react'
import NavbarBrand from '../assets/logo-nav.png'

const Navbar = ()=>{
    return (
        <div>
            {/* Desktop Nav */}
            {/* <div className='d-md-block d-none'>
                <nav className='container py-4'>
                    <div>
                        <a className='pe-5' href='#home'>Home</a>
                        <a className='pe-5' href='#features'>Features</a>
                        <a href='#faqs'>Faqs</a>
                    </div>
                    <div className="logo">
                        <img src={NavbarBrand} alt='navbar_brand' className='img-fluid' />
                    </div>
                    <div className="right">
                        <button className='btn btn-elder'>
                            Download Now
                        </button>
                    </div>
                </nav>
            </div> */}
            {/* Mobile */}
            <div className=''>
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container">
                        <div className="">
                            <img src={NavbarBrand} alt='navbar_brand' className='img-fluid' />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-md-2">
                                <a className='nav-link'>Home</a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className='nav-link'>Features</a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className='nav-link'>Faqs</a>
                            </li>
                            <li className="nav-item px-md-2">
                                <a className='nav-link'>
                                <button className='btn btn-elder'>
                                    Download Now
                                </button>
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