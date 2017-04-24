import React, { Component } from 'react';
import '../assets/styles/MidCont.css';
import store from '../store'



class MidCont extends Component {

constructor() {

    super()
    
    this.state = {

      repData: [],
      
    }

  }

  componentWillMount() {

    store.subscribe(() => {

      const appState = store.getState()

      const repDat = appState.reposdata

      console.log('Rep Mnt ', repDat)
      

      this.setState( {

        repData: repDat,
        
      })

    })

  }

  render () {

    return (

      <div
        id='cMidCont'>

        <div
          className='cMidTop'>

          <span>Overview</span>
          <span>Repositories</span>
          <span>Stars</span>
          <span>Followers</span>
          <span>Following</span>
          
        </div>

        <div
          className='cMidMid'>

          <input 
            className='repInp'
            type='text'
            placeholder='Search repositories...'

          />
          
        </div>

        <div
          className='cMidBot'>

          <ul>
          {

            this.state.repData.map((rep, i) => {

              return (
                <li
                  key={i}
                  className='repLi'>

                  <a 
                    href={rep.html_url}>

                    <h2>{rep.name}</h2>

                  </a>

                    <p>{rep.language}</p>

                  

                </li>

              )

            })

          }
          </ul>
          
        </div>
        

        

      </div>

    )

  }


}

export default MidCont;

/*

{

            this.state.repData.map((rep) => {

              <li>
              <h2>{rep.name}</h2>
              </li>

            })

          }
*/


