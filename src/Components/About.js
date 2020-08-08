import React, { Component } from 'react';
import resume from "./JoshuaJacobMauricio_Resume_.pdf";
import { Fade } from 'react-reveal';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = resume;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} />
               </div>
               <div className="nine columns main-col">
                  <Fade right>
                     <h2>About Me</h2>
                  </Fade>
                  <Fade right>
                     <p>{bio}</p>
                  </Fade>
                  <div className="row">
                     <div className="columns">
                        <Fade right>
                           <h2>Contact Details</h2>
                        </Fade>
                        <Fade bottom>
                           <p className="address">
                              <span>{name}</span><br />
                              <span>{phone}</span><br />
                              <span>{email}</span>
                           </p>
                        </Fade>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
