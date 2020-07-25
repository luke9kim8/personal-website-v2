import React from 'react';
import '../App.css'

function About(props) {
  return (
    <div ref={props.divRef} className="">
        <div className="about title">
            <h3 className="titleText"> About </h3>
        </div>

        <div className="about-description">
            <p>
                I'm an aspiring software engineer interested in opening up new domains for creativity.
                <br/><br/>
                Like how smartphones opened up a new playground for developers and users to do wacky things, 
                I believe IoT and VR devices will create a similar environment in the coming decade.
                It never has been more exciting time to be alive studying CS.
                <br/><br/>
                I am currently studying computer science at Georgia Tech. At school, I'm an active member
                of Bits of Good, Database Lab, and Automated Algorithm Design VIP Project.
            </p> 
        </div>
    </div>
  );
}

export default About;
