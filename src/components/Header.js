import React, { Component } from 'react';
import { Link } from 'react-scroll';
import SocialIcon from "./subcomponents/SocialIcon";
export default class Header extends Component {
  constructor() {
    super();
    this.state = { screenHeight: 800 }
  }

  componentDidMount() {
    this.setState({ screenHeight: document.documentElement.clientHeight });
  }

  render() {
    const header = this.props.header;
    const links = this.props.socialLinks;
    const headerStyle = { height: this.state.screenHeight };
    return (
      <header id="home" style={headerStyle}>
        <div id="introduction">
          <div id="intro-text">
            <h1>I'm {header.name}.</h1>
            <h3>I am a {header.currentRole}. {header.roleDescription}</h3>
          </div>

          <ul className="social">
            {links.map(link => {
              return <SocialIcon link={link} key={link.name} />;
            })}
          </ul>
        </div>

        <p id="scroll-down">
          <Link to="about"
                activeClass="active"
                spy={true}
                smooth={true}>
            <i className="fa fa-angle-down"/>
          </Link>
        </p>
      </header>
    );
  }
}