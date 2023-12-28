import React from 'react'
import './SapCert.css'

const SapCert = () => {
    return (
        <div className='sapContainer'>
            <div className='sapLeft'>
                <h4>Take <em>SAP</em> Certification online course and <br />get life time acces to LMS.</h4>
                <div className='1st'>
                    <div class="counter">
                        <div class="days">
                            <div class="value">02</div>
                            <span>Days</span>
                        </div>
                        <div class="hours">
                            <div class="value">11</div>
                            <span>Hours</span>
                        </div>
                        <div class="minutes">
                            <div class="value">30</div>
                            <span>Minutes</span>
                        </div>
                        <div class="seconds">
                            <div class="value">20</div>
                            <span>Seconds</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='sapright'>
                <div class="right-content">
                    <div class="top-content">
                        <h5 style={{ color: '#fff' }}>Acquire Free Scholarship</h5>
                    </div>
                    <form id="contact" action="contact1.php" method="post">
                        <div class="row contact">
                            <div class="col-md-12 name">
                                <input type="hidden" name="from" value="Scholarship" />
                                <input name="name" type="text" class="form-control" placeholder="Your Name" required="" />

                            </div>
                            <div class="col-md-12 email">

                                <input name="email" type="text" class="form-control" placeholder="Your Email" required="" />

                            </div>
                            <div class="col-md-5 countryCode">
                                <select name="countryCode" class="form-control">
                                    <option data-countrycode="IN" value="91" selected="">India (+91)</option>
                                    <optgroup label="Other countries">
                                        <option data-countrycode="GB" value="44">UK (+44)</option>
                                        <option data-countrycode="US" value="1">USA (+1)</option>
                                        <option data-countrycode="DZ" value="213">Algeria (+213)</option>
                                        <option data-countrycode="AD" value="376">Andorra (+376)</option>
                                        <option data-countrycode="AO" value="244">Angola (+244)</option>
                                        <option data-countrycode="AI" value="1264">Anguilla (+1264)</option>

                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-md-7">
                                <input name="mobile" type="text" class="form-control" pattern="[789][0-9]{9}" placeholder="Your Phone Number" maxlength="10" required="" />
                            </div>
                            <div class="col-md-12">

                                <button type="submit" class="button">Get it now</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>


    )
}

export default SapCert