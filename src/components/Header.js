import React from 'react';
import Banner from '../assets/banner.png'

const Header = ()=>{
    return (
        <div className='header text-center py-4' id='home'>
            <div className='d-flex justify-content-center pt-5'>
                <div className='col-md-9'>
                    <p className='display-1'>
                        Celebrate Your <span className='fw-bold'>Loved Ones</span> Like Never Before
                    </p>
                    <p className='fs-6'>
                        From birthdays to special achievements, share meaningful moments with ease.
                    </p>
                    <a href='https://drive.google.com/uc?export=download&id=1XkwQIsKB-RpcZmgqr8132Y9T6m2EZIBi' target='_blank' className='btn btn-outline-elder' download>
                        Download Now
                    </a>
                </div>
            </div>
            <img src={Banner} alt='header' className='img-fluid px-md-0 px-4' />
        </div>
    )
}

export default Header