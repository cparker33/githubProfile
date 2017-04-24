import React, { Component } from 'react';
import '../assets/styles/LeftCont.css';
import store from '../store'



class LeftCont extends Component {

constructor() {

    super()
    
    this.state = {

      theClass: 'Closed',
      
    }

  }

  componentWillMount() {

    store.subscribe(() => {

      const appState = store.getState()

      console.log('Mount ', appState.userdata)  

      this.setState( {

        // appItems: appState.cData[0].appetizers,
        
      })

    })

  }

  render () {

    return (

      <div
        id='cLeftCont'>

        <img
          id='cProfImg' 
          alt='CP'
          src='https://avatars3.githubusercontent.com/u/25848922?v=3' />

        <h2>Caleb Parker</h2> 

        <h3>cparker33</h3> 

        <a href='#'>Add a bio</a>

      </div>

    )

  }


}

export default LeftCont;




