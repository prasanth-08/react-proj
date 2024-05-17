import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import deo from '../Assets/image/ava-1.jpg'
import jo from '../Assets/image/ava-2.jpg'

const MyCarouselSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className='slider'>
                <div className='new-one'>
                    <h6 id='manager'>Clients Love</h6>
                    <h2>What our clients say about us</h2>
                </div>

                <div className='d-flex'>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={deo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={deo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={jo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className='d-flex'>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={deo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={deo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={jo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='d-flex'>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={deo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={deo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={jo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='d-flex'>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={deo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={deo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='m-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi, expedita impedit repellendus repudiandae laborum. Sint ullam dicta cum sed eius iste, deleniti minus, voluptatem porro asperiores, quo mollitia dolores.
                        </p>
                        <div className='img-slider '>
                            <div className="sliker d-flex ">
                                <img src={jo} alt="Slide 1" className='m-3' />
                                <div className="sliker">
                                    <h3>jhon deo</h3>
                                    <p>Customer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default MyCarouselSlider;
