
const InitState = {

  userdata: {},
  reposdata: [], 

}


export function cReducer (state = InitState, action) {

  // console.log('from reducer type ', action.type)
  // console.log('from reducer action ', action.action)


  switch (action.type) {

  case 'GET_REPOS_DATA': 

    return {

      userdata: state.userdata,
      reposdata: action.action

    }



    case 'GET_USER_DATA':

    return {

      reposdata: state.reposdata,
      userdata: action.action
    }

  default:

    return state

  }

}