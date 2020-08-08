import React, { Component } from 'react';
class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} href={projects.url} className="portofolio-img"/>
              <div className="overlay">
                <div className="portfolio-item-meta">

                </div>
              </div>
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <h6 className="thicker-p">{projects.tools}</h6>
                <p>{projects.category}</p>
              </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Projects</h1>

            <div id="portfolio-wrapper" className="portfolio-grid">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
