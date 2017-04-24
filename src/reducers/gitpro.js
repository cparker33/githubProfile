
const InitState = {

  userdata: {},
  reposdata: {}, 

}


export function cReducer (state = InitState, action) {

  // console.log('from reducer type ', action.type)
  console.log('from reducer action ', action.action)


  switch (action.type) {

  case 'GET_USER_DATA':

    return {

      userdata: action.action,
      reposdata: state.reposdata

    }



    case 'GET_REPOS_DATA':

    return {

      reposdata: action.data,
      userdata: state.userdata
    }

  default:

    return state

  }

}