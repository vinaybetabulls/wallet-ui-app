
import * as React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import { lloydsTheme } from './theme'
import AccessWallet from './routes/AccessWallet'
import WalletDashboard from './routes/WalletDashboard'

export default function App() {
  const [mode] = React.useState<'light' | 'dark'>('light')
  const theme = React.useMemo(() => lloydsTheme(mode), [mode])
  const navigate = useNavigate()

  React.useEffect(() => {
    const session = sessionStorage.getItem('walletSession')
    if (session && window.location.pathname === '/') navigate('/wallet')
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 4 }}>
        <Routes>
          <Route path='/' element={<AccessWallet />} />
          <Route path='/wallet' element={<WalletDashboard />} />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}
