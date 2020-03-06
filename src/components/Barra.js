import React from 'react'
import image1a from '../ico/1a.png'
import image1 from '../ico/1.png'
import image2 from '../ico/2.png'
import image3 from '../ico/3.png'
import image4 from '../ico/4.png'
import image5 from '../ico/5.png'
import './styles/barra.css'
import Ico from './Ico'
import firebase from 'firebase'




class Barra extends React.Component {
    

    render(){
        return(
            <nav className="mobile">
                <Ico 
                image={image1}
                />
                <Ico 
                image={image2}
                />
                <Ico 
                image={image3}
                />
                <Ico 
                image={image4}
                />
                <Ico 
                image={image5}
                />
            </nav>
        )
    }
}

export default Barra