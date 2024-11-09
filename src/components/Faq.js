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
                        <div className='accordion accordion-flush mt-4 border-top' id='accordionFlushExample'>
                            <div className='accordion-item border-faq'>
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Q. How does the app work?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body bg-faq d-flex">
                                        <p className='pt-2 question' data-aos="fade">
                                            A.
                                        </p>
                                        <p className='answer my-0 ps-2' data-aos="fade">
                                            Our app makes it easy to celebrate loved ones on special occasions. Simply download the app, customize your celebration, and share the joy with friends and family through calls, and music.
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                            <div className='accordion-item border-faq'>
                            <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Q. Is the app free to use?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body bg-faq d-flex">
                                        <p className='question' data-aos="fade">
                                            A.
                                        </p>
                                        <p className='answer my-0 ps-2' data-aos="fade">
                                            Yes! The app is free to download and comes with a variety of features to help   you celebrate.
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                            <div className='accordion-item border-faq'>
                            <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Q. Is my information secure on the app?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body bg-faq d-flex">
                                        <p className='pt-2 question' data-aos="fade">
                                            A.
                                        </p>
                                        <p className='answer my-0 ps-2' data-aos="fade">
                                            We take privacy and security seriously. All data is encrypted, and we ensure    your information is protected and only shared with your permission.
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                            <div className='accordion-item border-faq'>
                            <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Q. What kind of music can I play for celebrations?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body bg-faq d-flex">
                                        <p className='question' data-aos="fade">
                                            A.
                                        </p>
                                        <p className='answer my-0 ps-2' data-aos="fade">
                                            You can choose from our curated selection of popular songs to play tunes that make the celebration special.
                                        </p>
                                    </div>
                                </div>                                
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