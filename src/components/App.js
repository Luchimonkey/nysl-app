import React from 'react'
import Barra from './Barra'
import firebase from 'firebase'



class App extends React.Component {
    
    constructor(){
        super()
        this.state = {
            
            info: []
        }
    }
        componentWillMount(){
            const infoRef = firebase.database().ref().child('partidos').child('0').child('nombre')

            infoRef.on('value', (snapshot) => {
                this.setState({
                    info:snapshot.val()
                })
            })
        }


    render(){
        return(
            <div>

               <Barra />
               <p>{this.state.info}</p>
               
            </div>
        )
    }
}

export default App

