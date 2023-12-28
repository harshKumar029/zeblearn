import React from 'react'
import './whyZeb.css'

const WhyZeb = () => {
    return (
        <div className='whyZeb'>
            <h3 class="whyZebtitle" style={{ marginBottom: 20 + 'px' }} >Why ZebLearn?</h3>
            <hr class="WhyZebtitleunderline"></hr>
            <div className='Zebflex'>
                <div className='whyZebpic'>
                    <img src='./assets/img/webimg/why-zeb.svg' />
                </div>
                <div className='whyZebContent'>
                    <h2>Lorem ipsum dolor, sit amet consectetur<br /> adipisicing elit.</h2>
                    <ul>
                        <li> Eaque quasi quia, omnis non doloribus esse! Eligendi accusantium delectus, <a href='#'>Live Q&A Sessions</a> itaque minima beatae cum! Facere quidem laudantium officiis laboriosam rem libero repellat!</li>
                        <li> Eaque quasi quia, omnis non doloribus esse! Eligendi accusantium delectus, <a href='#'>Hands-On Project Assignments</a> itaque minima beatae cum! Facere quidem laudantium officiis <a href='#'>Monthly Workshops</a> laboriosam rem libero repellat!</li>
                        <li> Eaque quasi quia, omnis non doloribus esse! Eligendi accusantium delectus, itaque minima beatae cum!<a href='#'>Flexible Learning Plans</a> Facere quidem laudantium officiis laboriosam rem libero repellat!</li>
                    </ul>
                </div>
            </div>
            {/* <div className='ctWebinar'>Know more about our <a href='#'>Upcoming Webinar</a> </div> */}
        </div>
    )
}

export default WhyZeb