import React, { Component } from 'react';
import { Fade } from 'react-reveal';


class Header extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var nameShort = this.props.data.nameShort;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var state = this.props.data.address.state;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#skills">Skills</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <Fade>
               <div className="row banner">
                  <div className="banner-text">
                     <h1 className="responsive-headline">Hello, I'm Josh!</h1>
                     <h3>I'm an Oregon based <span>Full-Stack Software Developer</span>.</h3>
                     <hr />
                     <ul className="social">
                        <li key="linkedin"><a href="https://www.linkedin.com/in/joshuajacobmauricio/"><i className="fa fa-linkedin"></i></a></li>
                        <li key="github"><a href="http://github.com/jmauricio1"><i className="fa fa-github"></i></a></li>
                     </ul>
                  </div>
               </div>
            </Fade>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
