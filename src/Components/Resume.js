import React, { Component } from 'react';
import Skills from './Skills';
import { Fade } from 'react-reveal';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}>
          <Fade right>
            <h3>{education.school}</h3>
          </Fade>
          <Fade right>
            <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
            <p>{education.description}</p>
          </Fade>
        </div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <Fade left><h1><span>Education</span></h1></Fade>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
                <Fade right cascade>
                  <ul>
                    <li>Minor: Audio Production</li>
                    <li>GPA: 3.79</li>
                    <li>Awards: Dean's List Recipient, Audio Production Student of the Year (x2)</li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/*
        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
        */}
        <Skills />
      </section >
    );
  }
}

export default Resume;
