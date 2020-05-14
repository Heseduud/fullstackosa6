const initialState = ''
let timeoutID = undefined

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIF': 
      return state = action.notif

    case 'CLEAR_NOTIF':
      return state = initialState

    default: return state
  }
}

export const setNotifWithTimeout = (notif, timeMS) => {
  return async dispatch => {
    clearTimeout(timeoutID)

    dispatch({
      type: 'SET_NOTIF',
      notif: notif
    })

    timeoutID = setTimeout(() => {
      console.log('timeoutID in var: ' + timeoutID)
      dispatch({
        type: 'CLEAR_NOTIF'
      })
    }, timeMS)
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
