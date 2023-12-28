// React component for the SAP Certification Training section
import React from 'react';
import './pres.css';

function Pres() {
    return (
        <div className="sap-certification background_image">
            <div className="content">
                <h2>OUR PRESENTATION IS FOR YOU</h2>
                <h3>Watch the Latest Demo video to<br /> learn more<span style={{ color: '#f5a425' }}> about Training</span></h3>
                <p>Who can go for this <a href='#'>SAP Certification?</a></p>
                <ul>
                    <li>SAP Professionals, Software Administrators, App Builders</li>
                    <li>Developers, Analysts, IT Managers</li>
                    <li>Sales Managers, Executives, and any enthusiast who is willing to<br /> learn the SAP can take up this certification.</li>
                </ul>
                <button className="know-more-btn">On-Demand Training</button>
                <a className='demo' href='#'>Interactive Demos →</a>
            </div>
            <div className="image-container">

                <img src='./assets/img/webimg/salesforce-isometric.svg' alt='' />
       



            </div>
        </div>
    );
}

export default Pres;
