import React, { Component, PropTypes} from 'react';
import LandingHeader from '../components/LandingHeader';
import {connect} from 'react-redux';


class LandingContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div className="row">
                <LandingHeader language={this.props.user.get('language')}/>
            </div>
        )
    }
}

LandingContainer.propTypes = {
    user: PropTypes.object
};

function mapStateToProps(state){
    const { user } = state;

    return {
        user
    }
}

export default connect(mapStateToProps)(LandingContainer);