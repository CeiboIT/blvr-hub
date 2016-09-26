import React, {Component, PropTypes } from 'react';
import './Landing.css';
import * as i18n from './LandingContactFormI18n.json'

class LandingContactForm extends Component {

    render(){
        const { language } = this.props;
        return(
            <div className="row contactFormContainer">
                <div className="col-md-6">
                    <input type="text" className="contact" placeholder={i18n[language].name}/>
                    <input type="text" className="contact" placeholder={i18n[language].email}/>
                    <input type="text" className="contact" placeholder={i18n[language].phone}/>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        )
    }
}

LandingContactForm.propTypes = {
    language : PropTypes.string
}

export default LandingContactForm;