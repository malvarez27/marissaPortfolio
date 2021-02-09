import React, { Component } from 'react';
import { Link } from 'react-scroll';
import SocialIcon from "./subcomponents/SocialIcon";

export default class Footer extends Component {
  render() {
    let links = this.props.socialLinks;
    return(
      <footer>
        <div className="row">
          <div className="social">
            <ul className="social-links">
              {links.map(link => {
                return <SocialIcon link={link} key={link.url} />;
              })}
            </ul>
          </div>

          <div id="scroll-top">
            <Link to="home" smooth={true} title="Scroll to top">
              <i className="fa fa-angle-up" />
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}