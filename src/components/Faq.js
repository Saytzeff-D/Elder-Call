import React from 'react'
import FaqImg from '../assets/faq-img.png'

const Faq = ()=>{
    return (
        <div className='bg-faq' id='faqs'>
            <div className='container'>
                <div className='row w-100 mx-auto pt-5'>
                    <div className='col-md-8 py-5 pe-md-5'>
                        <p className='fs-3 my-0' data-aos="fade">
                            Got Questions?                            
                        </p>
                        <p className='fs-3 my-0' data-aos="fade">
                            We’ve Got Answers!
                        </p>
                        <div className='mt-4 py-1 border-top border-bottom border-faq'>
                            <p className='question' data-aos="fade">
                                Q. How does the app work?
                            </p>
                            <div className='d-flex'>
                                <p className='pt-2 question' data-aos="fade">
                                    A.
                                </p>
                                <p className='answer my-0 ps-2' data-aos="fade">
                                    Our app makes it easy to celebrate loved ones on special occasions. Simply download the app, customize your celebration, and share the joy with friends and family through calls, and music.
                                </p>
                            </div>
                        </div>
                        <div className='py-1 border-bottom border-faq'>
                            <p className='question' data-aos="fade">
                                Q. Is the app free to use?
                            </p>
                            <div className='d-flex'>
                                <p className='question' data-aos="fade">
                                    A.
                                </p>
                                <p className='answer my-0 ps-2' data-aos="fade">
                                    Yes! The app is free to download and comes with a variety of features to help   you celebrate.
                                </p>
                            </div>
                        </div>
                        <div className='py-1 border-bottom border-faq'>
                            <p className='question' data-aos="fade">
                                Q. Is my information secure on the app?
                            </p>
                            <div className='d-flex'>
                                <p className='pt-2 question' data-aos="fade">
                                    A.
                                </p>
                                <p className='answer my-0 ps-2' data-aos="fade">
                                    We take privacy and security seriously. All data is encrypted, and we ensure    your information is protected and only shared with your permission.
                                </p>
                            </div>
                        </div>
                        <div className='py-1 border-bottom border-faq'>
                            <p className='question' data-aos="fade">
                                Q. What kind of music can I play for celebrations?
                            </p>
                            <div className='d-flex'>
                                <p className='question' data-aos="fade">
                                    A.
                                </p>
                                <p className='answer my-0 ps-2' data-aos="fade">
                                    You can choose from our curated selection of popular songs to play tunes that make the celebration special.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 pt-5'>
                        <img data-aos="slide-up" alt='faqimg' src={FaqImg} className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq