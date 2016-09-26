import React, {Component} from 'react'
import MenuBar from '../components/MenuBar';
class MainContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>
            <MenuBar/>
            <div className="container margin-top">
                {this.props.children}
            </div>
        </div>)
    }
}


export default MainContainer