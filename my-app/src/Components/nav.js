import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Portfolio from "./portfolio";
import Blog from "./blog";
import Contact from "./contact";

const Nav = () => {
    return (
        <div className="">
            <Router>
                <div className="navblock">
                    <div className="navbar">
                        <nav
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <Link to="/home">HOME</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/portfolio">PORTFOLIO</Link>
                            <Link to="/blog">BLOG</Link>
                            <Link to="/contact">CONTACT ME</Link>
                        </nav>
                    </div>
                </div>
                <div>
                    <Switch>
                        <ul>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/portfolio" component={Portfolio} />
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/contact" component={Contact} />
                        </ul>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Nav;
