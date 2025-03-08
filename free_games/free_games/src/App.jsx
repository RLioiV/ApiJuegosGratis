import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import GamesList from './components/GamesList'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GamesList />
    </ThemeProvider>
  )
}

export default App