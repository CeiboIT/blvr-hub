import React, {Component} from 'react'
import MenuBar from '../components/MenuBar';
import FooterContainer from '../containers/footer/FooterContainer';
class MainContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
            <MenuBar/>
            <div className="container main-container">
                {this.props.children}
            </div>
            <FooterContainer/>
        </div>)
    }
}


export default MainContainer