// React component for the SAP Training promotion section
import React from 'react';
import './hero.css';

function Hero() {
    return (
        <>
            <div className='bg_image hero'>
                <div className='hero_item'>
                    <div>
                        <h3>"BOOST YOUR CAREER IN SAP"<br />
                            <span>WITH NO. 1 SAP TRAINING PROVIDER IN INDIA</span></h3>
                        <p class="popular-courses-text"><span style={{ color: 'white' }}>4.9</span>&nbsp;&nbsp;⭐⭐⭐⭐⭐&nbsp;<span style={{ color: 'yellow' }}>(6678 Ratings)</span></p>
                        <h6>Our SAP Certification Training Classes will enable you to clear<br /> SAP certification exams. Master SAP certification skills in this<br /> online SAP course.</h6>
                        <a href='#'>DISCOVER MORE</a>
                    </div>
                    <div>
                        <img src='./assets/img/webimg/certimg.svg' alt='' />
                    </div>
                    <div className='courceform'>
                        <h3 className='enroll'>Check Your Course Fee</h3>
                        <form id="contact" action="contact1.php" method="post">
                            <div className="row">
                                <div className="col-md-12 inp">
                                    <input type="hidden" name="from" value="Check Your Course Fee" />
                                    <input name="name" type="text" className="form-control" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-12 inp">
                                    <input name="email" type="text" className="form-control" placeholder="Your Email" required />
                                </div>
                                <div className="col-md-7 inp">
                                    <input
                                        name="mobile"
                                        type="text"
                                        className="form-control"
                                        pattern="[789][0-9]{9}"
                                        placeholder="Your Phone Number"
                                        maxLength="10"
                                        required
                                    />
                                </div>
                                <div >
                                    <button type="submit" className="button_cal">Calculate</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='butt'>
                    <button>PLACEMENT REPORT</button>
                    <button>DOWNLOAD CURRICULUM</button>
                    <button>INTERVIEW QUESTIONS</button>
                </div>
            </div>
        </>
    );
}

export default Hero;
