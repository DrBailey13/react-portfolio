import React from "react";
import './contact.css'


function About() {

  return (
    <div>
      <div class="mainC">
        <div id="line">
          <h1 id="sub1_text">Contact</h1>
        </div>
        <div class="list-group">
          <a class="list-group-item list-group-item-action">
            Email: devantebailey1322@gmail.com
           </a>
          <a href="https://www.linkedin.com/in/devante-bailey-682b7590/" target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action">LinkedIn: https://www.linkedin.com/in/devante-bailey-682b7590/</a>
          <a href="https://github.com/DrBailey13" target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action">Github: https://github.com/DrBailey13</a>
          <a href="https://docs.google.com/document/d/10bh8PEwj7OklGFqVplgDiHx1Esd5gtQxCu6FEX3jCBI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action">Resume</a>
        </div>
      </div>
    </div>
  );

}


export default About;

