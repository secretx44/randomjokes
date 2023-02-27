import React, { useState, useEffect } from "react"
import axios from "axios"
import "../index.scss"
function JokeList() {
  const [jokes, setJokes] = useState()

  const limit = 1

  useEffect(() => {
    fetchJokes()
  }, [])

  const fetchJokes = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/jokes?limit=${limit}`,
        {
          headers: {
            "X-Api-Key": "c7YKvxUusXxXScN1FTppnA==eO7zmDwdtD0O2uzY",
          },
          params: {
            limit: limit,
          },
        }
      )
      const { joke } = response.data[0] // extract the joke string
      console.log(response.data)
      setJokes(joke) // set the joke string to the state
    } catch (error) {
      setJokes(error)
    }
  }

  return (
    <div className="container">
      <h1 className="title">Random Jokes 🤪</h1>
      <div className="mainjoke">
        <p className="jokerist">{JSON.stringify(jokes)}</p>
      </div>

      <button className="buttonjoke" onClick={fetchJokes}>
        Generate a new Joke
      </button>
    </div>
  )
}

export default JokeList
