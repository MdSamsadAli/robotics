import './Footer.css'
const Footer = ({listitem}) => {
    return(
        <>
            <footer>
                <div className="bg-black p-6">
                    <div className="robotics">
                        
                                <div className="d-flex justify-content-around flex-column">
                                {listitem.map((curElem)=>{
                            return(
                                    <div className="b-1">
                                        <h1>{curElem.title}</h1>
                                        <p>
                                            <a href="#">{curElem.item1}</a>
                                        </p>
                                        <p>
                                            <a href="#">{curElem.item2}</a>
                                        </p>
                                        <p>
                                            <a href="#">{curElem.item3}</a>
                                        </p>
                                    </div>
                                    )
                                })}
                                    <div className="b-1">
                                        <h1>News Letter</h1>
                                        <div className="mb-1">
                                            <input type="text" placeholder="Your Email Address" className="email-input" />
                                        </div>
                                        <div>
                                            <button className="btn btn-danger">SUBSCRIBE</button>
                                        </div>
                                    </div>
                                </div>
                            
                    </div>
                    
                </div>
            </footer>
        </>
    )
}
export default Footer