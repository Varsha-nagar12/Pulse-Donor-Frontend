import { useEffect } from "react"

export default function Slider()
{
    useEffect(()=>window.headerCarousel(),[])
    return <>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 className="mb-5">Pulse Donor !!!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: '80px', height: '80px' }}/>
                    <h5 className="mb-0">Blood Donor </h5>
                     {/*<p>Profession</p>*/} <br/>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">"Donate blood, save lives—be someone's hero today."
                       "Every drop you give brings hope to those in need."
                       "Join us in creating a healthier, stronger community."
                       "Your generosity is the gift of life—donate now."</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: '80px', height: '80px' }}/>
                    <h5 className="mb-0">Blood Donor</h5>
                    {/*<p>Profession</p>*/} <br/>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">"Give blood, give lifebe the miracle someone is waiting for."
                     "A tiny act of kindness, a lifetime of impact."
                     "Your blood is a gift of hope, healing, and second chances."
                     "Heroes aren’t born—they donate."</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: '80px', height: '80px' }}/>
                    <h5 className="mb-0">Blood Donor</h5>
                    {/*<p>Profession</p>*/} <br/>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">"Donate blood, save lives—be someone's hero today."
                       "Every drop you give brings hope to those in need."
                       "Join us in creating a healthier, stronger community."
                       "Your generosity is the gift of life—donate now."</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg"style={{ width: '80px', height: '80px' }}/>
                    <h5 className="mb-0">Blood Donor</h5>
                    {/*<p>Profession</p>*/} <br/>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">"Give blood, give lifebe the miracle someone is waiting for."
                     "A tiny act of kindness, a lifetime of impact."
                     "Your blood is a gift of hope, healing, and second chances."
                     "Heroes aren’t born—they donate."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}