import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.useScroll = this.useScroll.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.hideMobileNav = this.hideMobileNav.bind(this);
    this.state = {
      isMobileNavOpen: false,
      scrollPosition: 0,
      navStyle: (document.documentElement.clientWidth > 767) ? { background: 'transparent' } : {},
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.useScroll);
    window.addEventListener('resize', this.useScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.useScroll);
    window.removeEventListener('resize', this.useScroll);
  }

  useScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    const screenHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const screenWidth = document.documentElement.clientWidth;
    const height = scrollHeight - screenHeight;
    const scrolled = windowScroll / height;
    this.setState({scrollPosition: scrolled });

    if(screenWidth < 752) {
      this.setState({
        navStyle: {
          display: "none",
        }
      });
      setTimeout(() => this.setState({ navStyle: {} }), 1);
    } else if(windowScroll < (screenHeight / 4)) {
      this.setState({
        navStyle: {
          background: 'transparent',
        }
      });
    } else if(windowScroll >= (screenHeight / 4)
      && windowScroll < screenHeight - 90) {
      this.setState({
        navStyle: {
          visibility: 'hidden',
          opacity: '0',
        }
      });
    } else {
      this.setState({
        navStyle: {
          background: '#1F2024',
        }
      });
    }
  }

  toggleMobileNav() {
    const oldState = this.state.isMobileNavOpen;
    this.setState({ isMobileNavOpen: !oldState })
  }

  hideMobileNav() {
    if (this.state.isMobileNavOpen) { this.toggleMobileNav(); }
  }

  render() {
    const navClass = this.state.isMobileNavOpen ? "mobile" : "";
    const navStyle = this.state.isMobileNavOpen ? {} : this.state.navStyle;

    return (
      <nav id="nav-wrap">
        <div className="mobile" onClick={this.toggleMobileNav} title="Toggle navigation menu">Toggle navigation</div>

        <ul id="nav" className={navClass} style={navStyle}>
          <li>
            <Link to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={this.hideMobileNav}
            >Home</Link>
          </li>

          <li>
            <Link to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={this.hideMobileNav}
            >About</Link>
          </li>

          <li>
            <Link to="portfolio"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={this.hideMobileNav}
            >Portfolio</Link>
          </li>

          <li>
            <Link to="testimonials"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={this.hideMobileNav}
            >Testimonials</Link>
          </li>

          <li>
            <Link to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={this.hideMobileNav}
            >Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}