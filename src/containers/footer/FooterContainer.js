import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './Footer.css';

class FooterContainer extends Component {
    render(){
        return (
            <footer className="footer footer-white">
                <div className="container">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-4">
                                <h4>About Bolívar Hub</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel vulputate massa. Quisque dictum enim in nisi ornare euismod.</p> <p>Aenean tincidunt nisl ut velit convallis luctus. Vivamus eget elementum mauris. Aenean posuere vitae arcu non dignissim. Nunc convallis quam non dignissim volutpat. Donec pellentesque arcu et accumsan cursus. Donec a aliquet tortor.</p>
                            </div>
                            <div className="col-md-4">
                                <h4>Social Feed</h4>
                                <div className="social-feed">
                                    <div className="feed-line">
                                        <i className="fa fa-twitter"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel vulputate massa.</p>
                                    </div>
                                    <div className="feed-line">
                                        <i className="fa fa-twitter"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel vulputate massa.</p>
                                    </div>
                                    <div className="feed-line">
                                        <i className="fa fa-facebook-square"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h4>Follow Us</h4>
                                <ul className="social-buttons">
                                    <li>
                                        <a className="btn btn-youtube" href="https://www.instagram.com/sof.tokyo/" target="_blank">
                                            <i className="fa fa fa-youtube-play"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-twitter" href="https://twitter.com/Sof_tokyo" target="_blank">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-facebook" href="https://www.facebook.com/springoffashion/" target="_blank">
                                            <i className="fa fa-facebook-square"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <ul className="pull-left">
                        <li>
                            <a>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a>
                                Presentation
                            </a>
                        </li>
                        <li>
                            <a>
                            Discover
                            </a>
                        </li>
                        <li>
                            <a>
                                Payment
                            </a>
                        </li>
                        <li>
                            <a>
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    <div className="copyright pull-right">
                        Copyright ©  Bolívar Hub All Rights Reserved.
                    </div>
                 </div>
            </footer>
        )
    }
}

FooterContainer.propTypes = {
    user : PropTypes.object
};

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}
export default connect(mapStateToProps)(FooterContainer);

