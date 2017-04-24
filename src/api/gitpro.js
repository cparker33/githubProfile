import store from '../store'
import axios from 'axios'


export function getUserData() {


  axios.get('https://api.github.com/users/cparker33').then(function (data) {

  // console.log('user data ', data.data);

    store.dispatch({

      type: 'GET_USER_DATA',
      action: data
      
    })

  })
    
}


export function getReposData() {


  axios.get('https://api.github.com/users/cparker33/repos').then(function (data) {

  // console.log('user data ', data.data);

    store.dispatch({

      type: 'GET_REPOS_DATA',
      action: data.data
      
    })

  })
    
}








  