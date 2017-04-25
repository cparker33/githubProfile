import React from 'react'
import '../assets/styles/App.css';
import { getUserData } from '../api/gitpro'
import { getReposData } from '../api/gitpro'

import LeftCont from './LeftCont'
import MidCont from './MidCont'



export default React.createClass({

  render() {

    getUserData()
    getReposData()

    

    return (

      <div
        id='cApp'>

        <div
          id='cTopBar'>

          <div
            className="topBarGit">
            <i className="fa fa-github" aria-hidden="true"></i>
          </div>

          <input 
            className='gitInp'
            type='text'
            placeholder='Search GitHub...'/>

            <div
              className='topBarMenuLft'>

              <span className='tbmLItm'>Pull request</span>
              <span className='tbmLItm'>Issues</span>
              <span className='tbmLItm'>Gist</span>

            </div>


        </div>

        <div
          id='cMain'>

          <LeftCont />
          <MidCont />

        </div>



        



      </div>

    )

  }
  
})






