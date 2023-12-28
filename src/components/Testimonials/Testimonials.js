import React from 'react'
import './Testimonials.css'
const Testimonials = () => {
  return (
    <>
      <div className='testimonial'>
        <div className='test_header'>
          <h3>What Our Students Say</h3>
          <hr />
        </div>
        <div className='test_data'>
          <div className='leftImg'><img src='./assets/img/webimg/testoimg.webp' alt='' /></div>
          <div className='test_student'>
            <div className='student1'>
              <div className='img_data'>
                <img src='./assets/img/webimg/reviewimg1.webp' alt='' />
                <p>Vishal gangwar</p>
              </div>
              <div className='cont_data1'>
                <h3>Wow! my profile is completely<br /> different now.</h3>
                <p>Great place for SAP Online Trainings. Trainers &<br /> cordinators were exceptionally helpful. Instructor had<br /> thorough practical experience which he inculcated in his<br /> training methodology. I landed up a job within 15 days<br /> of the completion of my sap in lockdown itself.</p>
              </div>
            </div>
            <div className='student2'>
              <div className='img_data'>
                <img src='./assets/img/webimg/reviewimg2.webp' alt='' />
                <p>Manisha</p>
              </div>
              <div className='cont_data2' >
                <h3>Successfully Completed Fast Track<br /> Online Training Of ARIBA</h3>
                <p>I got to know about ZebLearn through one of my senior<br /> & my experience was exceptionally good</p>
              </div>
            </div>
            <div className='sstory' style={{ textAlign: 'right' }}><a href='#'>Success Stories →</a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials