import React, { Component } from 'react';
import SocialLink from "./subcomponents/SocialLink";

export default class About extends Component {
  render() {
    const about = this.props.about;
    const links = this.props.socialLinks;
    return (
      <section id="about">
        <div className="row grid">
          <div id="about-me-summary" className="grid-cell">
            <h2>ABOUT ME</h2>
            <p className="about-summary">{about.summary}</p>
          </div>

          <div id="about-profile-picture" className="grid-cell">
            <img className="profile" src="images/profile.jpg" alt="Marissa Alvarez's Profile" />
          </div>

          <div id="about-contact-details" className="grid-cell">
            <h4>Contact Details</h4>
            <div className="contact-details">
              {links.map((link, index) =>
                <SocialLink key={index} link={link} />
              )}
            </div>
          </div>

          <div id="about-download-resume" className="grid-cell">
            <a className="download"
               href="./images/marissa-resume.pdf"
               download="marissa-resume.pdf">
              <i className="fa fa-download" />&nbsp;&nbsp;
              Download Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}
