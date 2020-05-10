const initialState = ''

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action: ', action)

  switch (action.type) {
    case 'SET_NOTIF': 
      return state = action.notif

    case 'CLEAR_NOTIF':
      return state = initialState

    default: return state
  }
}

export const setNotif = (notif) => {
  return {
    type: 'SET_NOTIF',
    notif: notif
  }
}

export const clearNotif = () => {
  return {
    type: 'CLEAR_NOTIF'
  }
}

export default reducer
