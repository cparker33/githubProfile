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






