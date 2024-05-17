import React from 'react';
import banner from '../Assets/image/tour.jpg'
import tour from '../Assets/image/male-tourist.png'
import Footer from './Footer';
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const Tour = () => {
    return (
        <>
            <div>
                <div>
                    <img src={banner} id='all' alt="" srcset="" />
                    <h3 id='to'>All Tours</h3>
                    <div className='ten'>
                        <div className='Icon_search'>
                            <h5 id='Loc-1'> <CiLocationOn id='color'/>Location </h5>
                            <input id='par-1' type="text" placeholder='Where are you going?' />
                        </div>
                        <div className='Icon_search'>
                            <h5 id='Loc-1'> <CiLocationOn id='color'/> Distance  </h5>
                            <input id='par-1' type="text" placeholder='Where are you going?' />
                        </div>
                        <div className='Icon_search'>
                            <h5 id='Loc-1'> <GoPeople id='color'/> Max People </h5>
                            <input id='par-1' type="number" value="0" placeholder='Where are you going?' />

                        </div>
                        <div className='it'>
                            <span className='types'><CiSearch/></span>

                        </div>
                    </div>
                   
                       
                    <div>
                        <div className='blue'>
                            <div className='now'>
                                <h3 >Subscribe now for usefull travelling information. <br /></h3>
                                <input type="text" placeholder="Enter your email" id='toy' /> <br />
                                <button id='bt'>Subscribe</button>
                                <p>Lorem ipsum dolor, sit amet consectetur  <br />Ouia odio iure quasi Deserent,similique in!</p>


                            </div>
                            <div>
                                <img id='tourist' src={tour} alt="" />
                            </div>
                        </div>
                    </div>




                </div>

            </div>
            <Footer />


        </>
    );
}

export default Tour;
