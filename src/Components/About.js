import React, { Component } from 'react';
import resume from "./JoshuaJacobMauricio_Resume_.pdf";
import { Fade } from 'react-reveal';

class About extends Component {
   render() {

      if (this.props.data) {
         //var name = this.props.data.name;
         var name = "Joshua Jacob Mauricio";
         //var profilepic = "images/" + this.props.data.image;
         var profilepic = "/profilepic.jpg";
         //var bio = this.props.data.bio;
         var bio = "My name is Joshua Jacob Mauricio. I am a 2020 computer science gradute from Western Oregon University and an aspiring software developer. I am experienced in full-stack web development and enjoy collaborating with other team members to reach our shared goals. Individually, I am able to adapt to varying work environments and I am always striving to improve myself as a developer, team member, and a person.";

         //var phone = this.props.data.phone;
         var phone = "(808) 469-9794";

         //var email = this.props.data.email;
         var email = "joshua.mauricio1@gmail.com";
         
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
                           <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Open Resume</a>
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
