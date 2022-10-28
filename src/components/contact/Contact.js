import "./contact.css";
function Contact(){
    return(
        <>
        <section>
        <div className="w-60 p-6">
            <div className="w-60">
                <p className="lh-2 mb-1">Join us on his journey of discovery to create empathetic, living, intelligent machines that enrich our lives.</p>
                <div className="mb-1">
                    <input type="text" placeholder="Your Email Address" className="email-input" />
                </div>
                <div>
                    <button className="btn btn-danger">SUBSCRIBE</button>
                </div>
                <div className="mt-4 d-flex justify-content-around fs-30 myIcon">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Contact