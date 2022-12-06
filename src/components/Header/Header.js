import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import "./Header.css";

class Header extends Component {
    render() {
        // if (!this.props.data) return null;

        const project = "Hello";
        const github = "World";
        const name = "Technology Robotix Society";
        const description = "Indian Institute of Technology Kharagpur";

        return (
            <header id="home">
                <ParticlesBg type="cobweb" bg={true} />
                <div className="row banner">
                    <div className="banner-text">
                        <Fade bottom>
                            <h1 className="responsive-headline">{name}</h1>
                        </Fade>
                        <Fade bottom duration={1200}>
                            <h3>{description}.</h3>
                        </Fade>
                        <hr />
                        {/* <Fade bottom duration={2000}>
                            <ul className="social">
                                <a href={project} className="button btn project-btn">
                                    <i className="fa fa-book"></i>Project
                                </a>
                                <a href={github} className="button btn github-btn">
                                    <i className="fa fa-github"></i>Github
                                </a>
                            </ul>
                        </Fade> */}
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;
