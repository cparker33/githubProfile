import React, { Component } from 'react';
import '../assets/styles/LeftCont.css';
import store from '../store'



class LeftCont extends Component {

constructor() {

    super()
    
    this.state = {

      userData: 'Closed',
      
    }

  }

  componentWillMount() {

    store.subscribe(() => {

      const appState = store.getState()

      const usrDat = appState.userdata

      // console.log('usrDat ', usrDat)

      this.setState( {

        userData: usrDat,
        
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
          src={this.state.userData.avatar_url} />

        <h2>{this.state.userData.name}</h2> 

        <p
          className='usrName'>

          {this.state.userData.login}

        </p> 

        <a href='#'>Add bio...</a>


        <p><i className="fa fa-map-marker" aria-hidden="true"></i> {this.state.userData.location}</p>

      </div>

    )

  }


}

export default LeftCont;




