import React, { useState } from 'react'
import './FAQ.css'
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeItems, setActiveItems] = useState([]);
    const faqData = [
        {
            id: 1,
            question: 'I have no Post graduate degree, am I eligible for the certification?',
            answer: ' Yes, anyone who is a graduate can choose this program.',
        },
        {
            id: 2,
            question: 'When will I have the certification exam?',
            answer: 'The certification exam would consist of many assessment tests. These tests would be conducted throughout the workshop, after the completion of each module in the curriculum. Also, there would be a final certification exam after all your classes are over. You can choose any date for this final certification exam within a month from the date your classes are over.',
        },
        {
            id: 3,
            question: 'Are these courses self-paced?',
            answer: 'We do have specially designed self-paced courses with high quality 4K resolution video lectures. These videos can be watched by participants at their own pace and availability. The videos are followed by self-assessment questions for the participants to test their understanding of the topic shared in the video.',
        },
        {
            id: 4,
            question: 'What kind of projects are included as part of the training?',
            answer: 'ZebLearn is offering you the most updated, relevant, and high-value real-world projects as part of the training program. This way, you can implement the learning that you have acquired in real-world industry setup. All training comes with multiple projects that thoroughly test your skills, learning, and practical knowledge, making you completely industry-ready. You will work on highly exciting projects in the domains of high technology, ecommerce, marketing, sales, networking, banking, insurance, etc. After completing the projects successfully, your skills will be equal to 6 months of rigorous industry experience.',
        },
        {
            id: 5,
            question: 'Does ZebLearn offer job assistance?',
            answer: 'ZebLearn actively provides placement assistance to all learners who have successfully completed the training. For this, we are exclusively tied-up with over 80 top MNCs from around the world. This way, you can be placed in outstanding organizations such as Sony, Ericsson, TCS, Mu Sigma, Standard Chartered, Cognizant, and Cisco, among other equally great enterprises. We also help you with the job interview and résumé preparation as well.',
        },
        {
            id: 6,
            question: 'Is it possible to switch from self-paced training to instructor-led training?',
            answer: 'You can definitely make the switch from self-paced training to online instructor-led training by simply paying the extra amount. You can join the very next batch, which will be duly notified to you.',
        },
        {
            id: 7,
            question: 'How are ZebLearn-verified certificates awarded?',
            answer: 'Once you complete ZebLearn’s training program, working on real-world projects, quizzes, and assignments and scoring at least 60 percent marks in the qualifying exam, you will be awarded ZebLearn’s course completion certificate. This certificate is very well recognized in ZebLearn-affiliated organizations, including over 80 top MNCs from around the world and some of the Fortune 500companies.',
        },
        {
            id: 8,
            question: 'Does the job assistance program guarantee me a Job?',
            answer: 'Apparently, no. Our job assistance program is aimed at helping you land in your dream job. It offers a potential opportunity for you to explore various competitive openings in the corporate world and find a well-paid job, matching your profile. The final decision on hiring will always be based on your performance in the interview and the requirements of the recruiter.',
        },
        // Add more FAQ items as needed
    ];

    const toggleFAQ = (id) => {
        if (activeItems.includes(id)) {
          setActiveItems(activeItems.filter(item => item !== id));
        } else {
          setActiveItems([...activeItems, id]);
        }
      };

    return (
        <div className='FAQ'>
            <div className='FAQBrand'>
                <div className='FAQTitle'>FAQ</div>
                <hr className='FAQtitleUnderline'></hr>
            </div>
            <div className='FAQColumns'>
                {faqData.map((item) => (
                    <div key={item.id} className="faq-item">
                        <div className="question" onClick={() => toggleFAQ(item.id)}>
                            {item.question}
                            <span className='active'>{activeItems.includes(item.id) ? '-' : '+'}</span>
                        </div>
                        {activeItems.includes(item.id) && (
                            <div className="answer">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ