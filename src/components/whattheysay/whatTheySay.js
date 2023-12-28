import React from 'react'
import './whatTheySay.css'

const whatTheySay = () => {
    return (
        <div  className='theySay'>
            <h3 class="theySaytitle" style={{marginBottom : 20+'px'}} >What they say</h3>
            <hr class="theySaytitleunderline"></hr>
            <div className='theySaypic'>
                <img src='./assets/img/webimg/what-say.svg'/>
            </div>
            {/* <div className='ctWebinar'>Know more about our <a href='#'>Upcoming Webinar</a> </div> */}
        </div>
      )
}

export default whatTheySay