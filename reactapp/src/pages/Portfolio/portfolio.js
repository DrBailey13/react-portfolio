import React  from "react";
import P1 from '../../images/project1.png'
import P2 from '../../images/project2.png'
import P3 from '../../images/project3.png'
import P5 from '../../images/project5.png'
import P6 from '../../images/project6.png'
import P4  from '../../images/project4.png'
import '../Portfolio/portfolio.css' 


function Portfolio() {

  return (
    <div>
         
      <div className="container-fluid mainP">
         
          <div id="line">
            <h1 id="sub1_text">Portfolio</h1>
          </div>

            <div className="row full_row">
                <div className="col-md-1"></div>
                <div className="col-md-4">   
                    <div className="all_images">
                        <div id="codelink_wrapper">
                          <a href="https://github.com/DrBailey13/IntuitiveBanana" target="_blank" rel="noopener noreferrer"> Github Repository </a>
                          <a href="https://drbailey13.github.io/IntuitiveBanana/index.html" target="_blank" rel="noopener noreferrer"> Deployed App </a>
                        </div>  
                        <img className= "imge" src= {P1}alt="Project1" /> 
  
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/DrBailey13/password" target="_blank" rel="noopener noreferrer"> Github Repository </a>
                            <a href="https://drbailey13.github.io/password/index.html" target="_blank" rel="noopener noreferrer"> Deployed App </a>
                        </div>
                        <img src={P2} alt="Project2"/> 
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/DrBailey13/Quiz" target="_blank" rel="noopener noreferrer"> Github Repository </a>
                            <a href="https://drbailey13.github.io/Quiz/" target="_blank" rel="noopener noreferrer"> Deployed App </a>
                        </div> 
                       <img src={P3} alt="Project3"/> 
                        
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/DrBailey13/buddgettracker" target="_blank" rel="noopener noreferrer"> Github Repository </a>
                            <a href="https://immense-ravine-96808.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Deployed App </a>
                        </div>    
                         <img src={P5} alt="Project5"/>
                     </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">

                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/DrBailey13/Dayplanner" target="_blank" rel="noopener noreferrer"> Github Repository </a>
                            <a href="https://drbailey13.github.io/Dayplanner/" target="_blank" rel="noopener noreferrer"> Deployed App </a>
                        </div>
                        

                        <img src= {P6} alt="Project6"/>
                         
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">

                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/DrBailey13/BootcampForum" target="_blank" rel="noopener noreferrer"> Github Repository </a>
                            <a href="https://uncc-bootcamp-forum.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Deployed App </a>
                    
                        </div>
                         <img src={P4} alt="Project4"/>
                          
                    </div>
                </div>
             
      </div>
      </div>
    </div>

    );

  }


export default Portfolio;
