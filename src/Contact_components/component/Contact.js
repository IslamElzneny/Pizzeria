import React from "react";

const Contact_Form=()=>{
    return(
        <div className="container_form" id="contact">
            <div className="information_about_company">
                <div className="company_office">
                    <h3>CORPORATE OFFICE</h3>
                    <div className="location_form">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy.</p>
                    </div>
                    <div className="numPhone">
                        <i class="fas fa-phone"></i>
                        <p>+012 7056 5461</p>
                    </div>
                    <div className="email">
                        <i class="fas fa-envelope"></i>
                        <p>eslamelzeniny421@gmail.com</p>
                    </div>
                </div>

                <div className="queries">
                    <h3>PRESS INQUIRIES</h3>
                    <h5>MATTEO DAMIAN</h5>
                    <div className="numPhone">
                        <i class="fas fa-phone"></i>
                        <p>+012 7056 5461</p>
                    </div>
                    <div className="email">
                        <i class="fas fa-envelope"></i>
                        <p>eslamelzeniny421@gmail.com</p>
                    </div>
                </div>

                <div className="social_media_form">
                    <h3>STAY CONNECTED</h3>
                    <div className="links_social">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

            </div>
            
            <div className="contact_form">
                <div className="header_contact">
                    <h2>WE LOVE TO HEAR FROM YOU</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

                <form>
                    <div className="level_one_field">
                        <div>
                            <label>First Name<span>*</span></label>
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div>
                            <label>Last Name<span>*</span></label>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                    </div>

                    <div className="level_two_field">
                        <div>
                            <label>Email<span>*</span></label>
                            <input type="email" placeholder="Email Address"/>
                        </div>
                        <div>
                            <label>Phone Number<span>*</span></label>
                            <input type="tel" placeholder="Phone Number"/>
                        </div>
                    </div>

                    <div className="level_three_field">
                        <div>
                            <label>Subject<span>*</span></label>
                            <input type="text" placeholder="Subject"/>
                        </div>
                        <div>
                            <label>Select Location<span>*</span></label>
                            <select>
                                <option>Giza</option>
                                <option>Cairo</option>
                                <option>Alskandria</option>
                                <option>Al samaliya</option>
                                <option>More options</option>
                            </select>
                        </div>
                    </div>
                    <div className="level_last_field">
                        <div>
                            <label>Comment or Message<span>*</span></label>
                            <textarea></textarea>
                        </div>
                        <div>
                            <input type="submit" value="SUBMIT"/>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Contact_Form;