import React from 'react'
import './award.css'
const Award = () => {
  return (
    <div  className='awardAndRecog'>
        <h3 class="Awardtitle" style={{marginBottom : 20+'px'}} >Awards and Recognition</h3>
        <hr class="Awardtitleunderline"></hr>
        <div>
            <img src='./assets/img/webimg/awards-1.webp'/>
        </div>
        <div className='ctWebinar'>Know more about our <a href='#'>Upcoming Webinar</a> </div>
    </div>
  )
}

export default Award