import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotifWithTimeout } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const createAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addAnecdote(content)
    props.setNotifWithTimeout(`You created ${content}`, 5000)
  }

  return (
    <form onSubmit={createAnecdote}>
      <input name="anecdote"/>
      <button type="submit">Create</button>
    </form>
  )
}

export default connect(null, { addAnecdote, setNotifWithTimeout })(AnecdoteForm)