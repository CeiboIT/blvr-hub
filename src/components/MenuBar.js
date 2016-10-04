import React , {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/modules/User';
const languages = ['es', 'en', 'ja'];
import { DropdownButton, MenuItem} from 'react-bootstrap'
import * as i18n from './MenuBarI18n.json';


function LanguageOptionsElement({language}){
    let element;
    switch(language){
        case('ja'):
            element = (<span>日本語</span>);
        break;
        case('en'):
            element = (<span>English</span>);
        break;
        case('es'):
            element = (<span>Español</span>);
        break;
    }
    return element;
}


class MenuBar extends Component {
    changeLanguage(selectedLanguage){
        this.props.handleLanguageChange(selectedLanguage);
    }

    render(){
        const { user } = this.props;
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">HUB</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">{i18n[user.get('language')].menuOptions.home}</a></li>
                            <li><a href="#">{i18n[user.get('language')].menuOptions.aboutUs}</a></li>
                            <li><a href="#">{i18n[user.get('language')].menuOptions.customers}</a></li>
                            <li><a href="#">{i18n[user.get('language')].menuOptions.blog}</a></li>
                            <li><a href="#">{i18n[user.get('language')].menuOptions.contact}</a></li>
                            <li>
                                <DropdownButton bsStyle={'link'}
                                                title={<LanguageOptionsElement language={this.props.user.get('language')}/>}

                                id={'dropdown-basic-language-selector'}>
                                    {
                                        (()=>{
                                            return languages.map((language, i)=>{

                                                return <MenuItem
                                                    onClick={()=>this.changeLanguage(language)}
                                                    eventKey={i} key={i}><LanguageOptionsElement language={language}/></MenuItem>
                                            })
                                        })()
                                    }
                                </DropdownButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

MenuBar.propTypes = {
    handleLanguageChange: PropTypes.func,
    user : PropTypes.object
};

function mapStateToProps(state){
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, (dispatch)=>(bindActionCreators(userActions, dispatch)))(MenuBar)