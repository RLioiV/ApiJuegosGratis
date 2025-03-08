import React from 'react'
import GamesList from './components/GamesList'
import { Container } from '@mui/material'

function App() {
  return (
    <Container>
      <h1>Free Games List</h1>
      <GamesList />
    </Container>
  )
}

export default App