import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotif, clearNotif } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  const dispatchVote = (anecdote) => {
    // event.preventDefault()
    console.log(anecdotes)
    dispatch(voteAnecdote(anecdote.id))
    dispatch(setNotif(`You voted: ${anecdote.content}`))
    setTimeout(() => { dispatch(clearNotif()) }, 5000)
  }

  return (
    <div>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => {dispatchVote(anecdote)}}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList