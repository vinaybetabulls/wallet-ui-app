
import * as React from 'react'
import { Box, Paper, TextField, Typography, Button, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function AccessWallet() {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)

  const handleAccess = () => {
    setLoading(true)
    setTimeout(() => {
      const session = { userId: 'U12345', userName: 'Vinay', token: 'mock-session-token' }
      sessionStorage.setItem('walletSession', JSON.stringify(session))
      navigate('/wallet')
    }, 1500)
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='90vh'>
      <Paper sx={{ p: 4, maxWidth: 420, borderRadius: 3, textAlign: 'center' }}>
        <img src='https://upload.wikimedia.org/wikipedia/en/0/0e/Lloyds_Bank.svg' alt='Lloyds' style={{ width: 120, marginBottom: 20 }} />
        <Typography variant='h5' mb={2} color='primary'>Lloyds Digital Wallet</Typography>
        <TextField fullWidth label='Client ID' value='afsdflgesdf' InputProps={{ readOnly: true }} sx={{ mb: 2 }} />
        <TextField fullWidth label='Secret' value='********' InputProps={{ readOnly: true }} sx={{ mb: 3 }} />
        <Button fullWidth variant='contained' onClick={handleAccess} disabled={loading}>
          {loading ? <CircularProgress size={24} color='inherit' /> : 'Access Wallet'}
        </Button>
      </Paper>
    </Box>
  )
}
