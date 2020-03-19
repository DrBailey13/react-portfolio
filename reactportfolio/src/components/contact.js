import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>About Me</h2>
            <img
              src="images/DeVante.PNG"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>SOON TO BE A GRADUATE OF THE UNCC CODING BOOTCAMP APRIL 4TH, 2020, WITH DEVELOPED SKILLS IN HTML,CSS, JAVASCRIPT, SERVER SIDE AND DATABASE BASED APPLICATIONS. A SELF MOTIVATED
DEVELOPER WITH EXCEPTIONAL VERBAL COMMUNICATION AND LEADERSHIP SKILLS ABLE TO WORK INDEPENDENTLY OR WITH A TEAM. I AM ALWAYS EAGER TO LEARN MORE SO I WILL BE ABLE TO CREATE CREATIVE AND PRACTICAL WEB EXPERIENCES FOR ALL.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (336) 534-3701
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                   
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    devantebailey1322@gmail.com
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem> */}


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
