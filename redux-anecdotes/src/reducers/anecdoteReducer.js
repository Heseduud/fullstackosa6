import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'LIKE_ANECDOTE':
      const anec = action.anecdote
      return state.map(anecdote => anecdote.id !== anec.id ? anecdote : anec).sort((a,b) => { return b.votes - a.votes })

    case 'ADD_ANECDOTE':
      return state.concat(action.data)

    case 'INIT_ANECDOTES':
      return action.content.sort((a,b) => {return b.votes - a.votes})

    default: return state
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const liked = await anecdoteService.likeAnecdote(anecdote)
    dispatch({
      type: 'LIKE_ANECDOTE',
      anecdote: liked
    })
  }
}

export const addAnecdote = (data) => {
  return async dispatch => {
    const newAnec = await anecdoteService.createNew(data)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnec
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecs = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      content: anecs
    })
  }
}

export default reducer