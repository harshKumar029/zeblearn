import React, { useEffect } from 'react';
import './placement.css';

const Placement = () => {
    // useEffect(() => {
    //     const slider = document.querySelector('.slider');

    //     const handleAnimationIteration = () => {
    //         // Reset the animation when it completes one cycle
    //         slider.style.animation = 'none';
    //         setTimeout(() => {
    //             slider.style.animation = 'slide 30s linear infinite';
    //         });
    //     };

    //     slider.addEventListener('animationiteration', handleAnimationIteration);

    //     return () => {
    //         slider.removeEventListener('animationiteration', handleAnimationIteration);
    //     };
    // }, []);

    return (
        <>
            <div className='background-image slidecont'>
                <div className='sliderheader'>
                    <h3>Placement Partner</h3>
                    <hr />
                    <a class="cta-button" href="#">GET YOUR JOB <span >Placement Assistance</span></a>
                </div>
                <div class="slider-container">
                    <div class="slider">
                        <div class="slide"><img src='./assets/img/company/accenture.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/curious.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/jpmor.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/lt.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/mahindra satya.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/mcrosoft.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/mahindra.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/mindtree.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/pinnacle.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/samsung.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/sapient.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/sasken.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/sopra.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/spice.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/sunstone.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/syntel.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/tcs.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/vodafone.png' alt='' /></div>

                        {/* <!-- Duplicate the slides to create a seamless loop --> */}
                        <div class="slide"><img src='./assets/img/company/accenture.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/curious.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/jpmor.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/lt.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/mahindra satya.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/mcrosoft.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/mahindra.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/mindtree.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/pinnacle.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/samsung.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/sapient.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/sasken.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/sopra.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/spice.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/sunstone.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/syntel.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/tcs.png' alt='' /></div>
                        <div class="slide"><img src='./assets/img/company/vodafone.png' alt='' /></div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Placement
