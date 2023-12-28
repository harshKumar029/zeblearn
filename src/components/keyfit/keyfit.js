// React component for the "Key Features" section
import React from 'react';
import './keyfit.css';

function Keyfit() {
    return (
        <div className='keyfiture'>
                    <div className='test_header'>
          <h3>Key Features</h3>
          <hr />
        </div>
        <div className='keyfit'>
            
            <div className="key-features">
            <div className='items1'>
                    <div className="feature-card c1">
                        <h3>SAP Power User Program</h3>
                        <p>Get the latest version of SAP Power User Program Business Suite Software, and get the unmatched speed and access to real-time data. With low space consumption SAP allows faster Loading and eliminates duplicate Data</p>
                    </div>
                    <div className="feature-card c2">
                        <h3>24x7 Lifetime Support & Access</h3>
                        <p>Capstone Projects, Recorded Videos, Monthly Bonuses, Sessions, Interactive Skills, Career Services.</p>
                    </div>
                </div>
                <div className='items1'>

                <div className="feature-card c1">
                        <h3>Mobile App Access to Moodle E-Learning Portal</h3>
                        <p>You can access the exclusive Learning Management System (LMS) on the go. Use the login credentials to use the Moodle app on your phone.</p>
                    </div>
                    <div className="feature-card c2">
                        <h3>SAP Exam Assistance</h3>
                        <p>Get assistance for SAP exam from experts for scheduling, registration, and clearing the certificate requirement</p>
                    </div>
                </div>
                <div className='items1'>

                    <div className="feature-card c1">
                        <h3>Attend Unlimited Sessions with Multiple Trainers</h3>
                        <p>Once enrolled at our ERP Academy, you have the facility to attend different batches with different trainers. This means you can have unlimited repetitions of the Certified SAP Power User.</p>
                    </div>
                    <div className="feature-card c2">
                        <h3>Ranked Amongst Top</h3>
                        <p>ZebLearn Certified SAP Power User Program is ranked amongst the top 3 courses in the industry by BestCourseNews.com</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="feature-card2">
                    <h3>Most Trending & Job Oriented SAP<br/> Modules</h3>
                    <ul>
                        <li>SAP Finance (FI): SAP Financial<br/>
                        Accounting helps to boost finance<br/> management
                         in organizations</li>
                         <li>SAP Material Management (MM)</li>
                        <li>SAP Sales & Distribution (SD)</li>
                        
                        <li>SAP Production & Planning (PP)</li>
                        <li>Plant Maintenance (PM)</li>
                        <li>Project System (PS)</li>
                        <li>Human Capital Management (HCM)</li>
                        <li>Advanced Business Application<br/> Programming(ABAP)</li>
                    </ul>
                    <h4>Get guidance to choose best suited<br/> modules for your profile</h4>
                    <p>For consulting, <br/>Call @<br/> +91 6366 888 288</p>
                    <div>
                    <button className="enquire-btn">Enquire Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Keyfit;
