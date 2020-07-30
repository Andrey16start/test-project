export const GET_CURRENT_USER = 'GET_CURRENT_USER';


export const getCurrentUser = () => dispatch => {
  dispatch({
    type: GET_CURRENT_USER,
    payload: {
      id: 5,
      fn: 'Andrey Ilchenko',
      username: 'Admin',
      tel: '+380681111111',
      email: 'andrey_ilchenko137@ukr.net',
      timezone: 180,
      photo: 'https://avatars3.githubusercontent.com/u/38696345?s=460&u=8c97939b23e4e8aa744c2cc7a35bd91aff2587aa&v=4',
    },
  })
}


const initialState = {};


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state;
  }
}