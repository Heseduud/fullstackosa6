import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content) => {
  const anecToAdd = {
      content: content,
      id: getId(),
      votes: 0
    }
  
    const res = await axios.post(baseUrl, anecToAdd)
    return res.data
}

const likeAnecdote = async (anec) => {
  const anecToPut = { ...anec, votes: anec.votes+1}
  const res = await axios.put(`${baseUrl}/${anec.id}`, anecToPut)
  return res.data
}

export default { getAll, createNew, likeAnecdote }