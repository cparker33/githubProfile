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

          <span className='cMidTopItm'>Overview</span>
          <span className='cMidTopItmSel'>Repositories<div className='menuCnt'>30</div></span>
          <span className='cMidTopItm'>Stars<div className='menuCnt'>0</div></span>
          <span className='cMidTopItm'>Followers<div className='menuCnt'>0</div></span>
          <span className='cMidTopItm'>Following<div className='menuCnt'>0</div></span>
          
        </div>

        <div
          className='cMidMid'>

          <input 
            className='repInp'
            type='text'
            placeholder='Search repositories...'/>

            <select
              className='repDrpDwnType'>
              <option value="All">Type: All</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
              <option value="Sources">Sources</option>
              <option value="Forks">Forks</option>
              <option value="Mirrors">Mirrors</option>
            </select>

            <select
              className='repDrpDwnLang'>
              <option value="All">Language: All</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
              <option value="Sources">Sources</option>
              <option value="Forks">Forks</option>
              <option value="Mirrors">Mirrors</option>
            </select>

            <div
              className='addRepBtn'>New</div>
          
        </div>

        <div
          className='cMidBot'>

          <ul
            className='resUL'>
          {

            this.state.repData.map((rep, i) => {

              return (
                <li
                  key={i}
                  className='repLi'>

                  <a 
                    href={rep.html_url}>

                    <h2 className='repName'>{rep.name}</h2>

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


