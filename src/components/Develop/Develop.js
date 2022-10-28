import sophi from '../../images/sophiaback.png'
import beingsophi from '../../images/beingsophialogo.png'
import robotsophi from '../../images/sophia_therobot_hat.jpg'

import './Develop.css'
function Develop() {
    return(
        <>
            <section>
                <div className="bg-black p-6">
                    <div className="d-flex align-center justify-content-around robotics flex-column">
                        <div className="robot-txt">
                            <h1 className="lh-2">Shamskhus AI</h1>
                            <h4 className="lh-2 mt-1">Developing Meaningful AI Interactions</h4>
                            <p className="lh-2">Hanson AI develops cognitive architecture and AI-based tools that enable our robots to simulate human personalities, have meaningful interactions with people and evolve from those interactions. Our team of renowned AI scientists conducts advanced research to build the most compelling robotics and AI platform for research, media, and service applications.</p>
                            <button className=" mt-2 btn btn-secondary">SHAMSKHUS AI</button>
                        </div>
                        <div className="robot-img">
                            <img src={sophi} alt="sophi" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
        <div className="d-flex align-center justify-content-around robotics flex-column">
            
            <div className="robot-img" data-aos="flip-up">
                <img src={robotsophi} alt="robotsophi" />
            </div>
            <div className="robot-txt" data-aos="flip-up">
                <img src={beingsophi} alt="sophiya" />
                <h3 className="lh-2 mt-1 fw">AI Coming Of Age</h3>
                <p className="lh-2 mt-1">Being Sophia is about Sophia’s emerging life, adventures, experiences, and quest to learn and develop into a super-intelligent, benevolent being. Join her as she embarks on her adventures and incredible journey of becoming a conscious, living machine.</p>
                <button className=" mt-2  mb-2 btn btn-transparent">Book Sophia For Your Next Virtual Event !</button>
            </div>
        </div>
    </section>
        </>
    )
}
export default Develop