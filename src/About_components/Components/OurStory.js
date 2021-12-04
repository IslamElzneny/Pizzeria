import React from "react";

const OurStory=()=>{
    return(
        <div className="our_story" id="story">
            <div className="Head_story">
                <h4>OUR STORY</h4>
            </div>
            <div className="container_story">
                <div className="image_pizzera">
                    <img src={require('../../assest/images/pizzeria-template-vintage-building-img.jpg').default} />
                </div>
                <div className="container_about">
                    <div className="header_about">
                        <h2>AUTHENTIC ITALIAN PIZZERIA</h2>
                        <p>Varius eu mauris est vitae ultrices et, justo, at in ut faucibus libero pellentesque facilisis molestie suspendisse lacinia gravida sed habitasse diam nec nulla.</p>
                    </div>

                    <div className="discription_one">
                        <h3>IT'S ALL ABOUT THE FAMILY</h3>
                        <p>Imperdiet orci, volutpat consequat fermentum, proin tempus et tellus, vulputate adipiscing auctor nulla in malesuada et amet, aliquam laoreet mauris gravida consectetur malesuada est ultricies diam vestibulum velit sit aliquet pellentesque vitae.</p>
                    </div>

                    <div className="discription_two">
                        <h3>GENERATIONS IN THE MAKING</h3>
                        <p>Cursus ultricies in maecenas pulvinar ultrices integer quam amet, semper dictumst sit interdum venenatis pellentesque nunc libero vestibulum velit sit aliquet pellentesque vitae mauris gravida consectetur malesuada.</p>
                    </div>

                    <div className="founder">
                        <img src={require('../../assest/images/pizzeria-template-founder-img.jpg').default} />
                        <h4>ANTONIO BAGGIO</h4>
                        <span>Founder of The Pizzeria</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default OurStory;