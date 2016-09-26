import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class FooterContainer extends Component {
    render(){
        return (<div>
            Footer
        </div>)
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

