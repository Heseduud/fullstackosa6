import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotif, clearNotif } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
    dispatch(setNotif(`You created ${content}`))
    setTimeout(() => { dispatch(clearNotif()) }, 5000)
  }

  return (
    <form onSubmit={createAnecdote}>
      <input name="anecdote"/>
      <button type="submit">Create</button>
    </form>
  )
}

export default AnecdoteForm