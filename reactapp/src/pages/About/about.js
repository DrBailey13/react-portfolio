import React from "react";
import './about.css'
import Devante from '../../images/devante.png'


function About() {

  return (
    <div>

      <div className="container-fluid main">

        <div className="row sub_row">
          <div className="col-12 line">
            <h2 id="sub1_text">About Me</h2></div>
        </div>
        <div className="row full_row">
          <div className="col-md-1"></div>
        </div>
        <div className="col-md-10 clearfix">
          <img className="P-img rounded" src={Devante} alt="DeVante" />
          <p>
            Hi! My name is DeVante Bailey,
            I'm 26 years old and originally from Snow Camp, NC. Also known as "where???" where i grew up fishing,
            riding bikes, and playing sports. Now that im older they've taken a backseat to my
            newfound and frustrating love for coding. This page was designed to show you what i've learned so far,
				so feel free to let me know what you think.</p>
        </div>
      </div>
    </div>
  );

}


export default About;
