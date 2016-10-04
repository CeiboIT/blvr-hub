import React, {Component, PropTypes } from 'react';
import './Landing.css';
import * as i18n from './LandingContactFormI18n.json'

class LandingContactForm extends Component {

    render(){
        const { language } = this.props;
        return(

            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="well well-sm">
                    <form className="form-horizontal" action="" method="post">
                        <fieldset>
                            <legend className="text-center">
                                <h4>{i18n[language].contactUs}</h4>
                            </legend>

                            <div className="form-group">
                            <label className="col-md-3 control-label">{i18n[language].name}</label>
                                <div className="col-md-9">
                                    <input id="name" name="name" type="text" placeholder={i18n[language].name} className="form-control" />
                                </div>
                            </div>
                    
                            <div className="form-group">
                            <label className="col-md-3 control-label">{i18n[language].email}</label>
                                <div className="col-md-9">
                                    <input id="email" name="email" type="text" placeholder={i18n[language].email} className="form-control"/>
                                </div>
                            </div>
                    
                            <div className="form-group">
                                <label className="col-md-3 control-label">{i18n[language].message}</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" id="message" name="message" placeholder={i18n[language].message} rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12 text-right">
                                    <button type="submit" className="btn btn-primary btn-lg">{i18n[language].submit}</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

LandingContactForm.propTypes = {
    language : PropTypes.string
}

export default LandingContactForm;