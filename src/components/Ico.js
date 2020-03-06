import React from 'react'
import image from '../ico/1.png'
import './styles/ico.css'

class ico extends React.Component {
    render(){
        return(
            <div className="links">
                <a href="">
                <img src={this.props.image} />
                </a>
            </div>
        )
    }
}

export default ico