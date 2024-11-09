import React from 'react'
import FooterLogo from '../assets/logo-foot.png'

const Footer = ()=>{
    return (
        <div className='bg-elder-light'>
            <div className='container py-5'>
                <p className='display-1 footer-text py-2'>
                    <span>Start</span> <span className='fw-boldering'>Celebrating</span> <span className='fw-boldest'>Now</span>
                </p>
                <a href='https://drive.google.com/uc?export=download&id=1XkwQIsKB-RpcZmgqr8132Y9T6m2EZIBi' target='_blank' className='btn btn-outline-elder' download>
                    Download Now
                </a>
                <div className='d-flex justify-content-between pt-5 flex-md-row flex-column'>
                    <div>
                        <img src={FooterLogo} alt='footerlogo' className='img-fluid' />
                    </div>
                    <div className='d-flex pt-3'>
                        <p className='pe-2'>
                            Terms & Conditions Apply
                        </p>
                        <p className='ps-2'>
                            Eldercall 2024
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer