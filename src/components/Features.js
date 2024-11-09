import React from "react";
import Call from '../assets/get-touch.png'
import Music from '../assets/fav-tunes.png'

const Features = ()=>{
    return (
        <div className="bg-features py-5" id="features">
            <div className="container">
                <p className="my-0 fs-2" data-aos="fade-up">
                    Features to Make Every
                </p>
                <div className="d-flex justify-content-between flex-md-row flex-column">
                    <div>
                        <p data-aos="fade-up" className="fs-2">
                            Celebration Unforgettable
                        </p>
                    </div>
                    <div className='mb-md-0 mb-4'>
                        <a data-aos="slide-up" href='https://drive.google.com/uc?export=download&id=1XkwQIsKB-RpcZmgqr8132Y9T6m2EZIBi' target='_blank' className='btn btn-outline-elder' download>
                            Download Now
                        </a>
                    </div>
                </div>
                <div className="row w-100 mx-auto">
                    <div className="col-md-6 mb-md-0 mb-4">
                        <div data-aos="slide-up" className="card-feature py-5 shadow-lg px-4 rounded-lg">
                            <img data-aos="fade" className="img-fluid" alt="call" src={Call} />
                            <p data-aos="fade-up" className="card-title col-md-8 py-3">
                                Connect in Real-Time with a Personal Touch
                            </p>
                            <p data-aos="fade" className="card-text col-md-10">
                                Sometimes, a message isn’t enough. With celebratory calls, you can connect directly with your loved ones on their special day, wherever they are. Share heartfelt words, laughter, and memories in real-time, making each call a moment to remember.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div data-aos="slide-up" className="card-feature py-5 shadow-lg px-4 rounded-lg">
                            <img data-aos="fade" className="img-fluid" alt="music" src={Music} />
                            <p data-aos="fade-up" className="card-title col-md-8 py-3">
                                Bring Joy with Their Favorite Tunes
                            </p>
                            <p data-aos="fade" className="card-text col-md-10">
                                Music is powerful, and it brings people together. Surprise your loved ones by playing their favorite songs during celebrations. Whether it's a birthday anthem, a love song, or a nostalgic hit, let the music set the tone for the moment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features