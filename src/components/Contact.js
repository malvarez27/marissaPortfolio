import React, { Component } from 'react';
import SocialLink from "./subcomponents/SocialLink";

export default class Contact extends Component {
  render() {
    const concludingStatements = this.props.contact.concludingStatements;
    const socialLinks = this.props.socialLinks;
    return(
      <section id="contact">
        <div className="row">
          <div className="seven columns">
            <h2>
              <span>Get in touch.</span>
            </h2>
            <div className="contact-text">
              {concludingStatements.map((statement, index) =>
                <p key={index}>{statement}</p>
              )}
            </div>
          </div>

          <div className="five columns">
            <h4>Where to reach me:</h4>
            <div className="contact-details">
              {socialLinks.map((link, index) =>
                <SocialLink key={index} link={link} />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}