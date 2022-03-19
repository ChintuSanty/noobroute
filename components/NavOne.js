import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }

    

    render() {
        return (
            <header className="site-header site-header__header-one ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/assets/images/web_logo.png" className="main-logo" width="128"
                                         alt="Awesome Image" />
                                </a>
                            </Link>
                            <div className="header__social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                            <button className="menu-toggler">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/"><a>Home</a></Link>
                                </li>
                                <li>
                                    <Link href="/about"><a>About</a></Link>
                                </li>
                                <li>
                                    <Link href="/mentor"><a>Mentor</a></Link>
                                </li>
                                <li>
                                    <Link href="/program"><a>Program</a></Link>
                                </li>
                                <li>
                                    <Link href="/services"><a>Services</a></Link>
                                </li>
                                <li>
                                    <Link href="/contact"><a>Contact</a></Link>
                                </li>
                            </ul>
                        </div>
                        {/*<div className="right-side-box">
                            <a className="header__search-btn search-popup__toggler search-toggle" href="#"><i
                                className="kipso-icon-magnifying-glass"></i>
                            </a>
                        </div>*/}
                    </div>
                </nav>
                <div className="site-header__decor">
                    <div className="site-header__decor-row">
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-1"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-2"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-3"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavOne;