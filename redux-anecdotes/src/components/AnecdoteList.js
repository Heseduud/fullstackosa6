import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotifWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({anecdotes, filter}) => {
    return filter === ''
    ? anecdotes
    : anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  })

  const dispatchVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotifWithTimeout(`You voted: ${anecdote.content}`, 5000))
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