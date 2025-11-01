
import * as React from 'react'
import { Box, Paper, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function WalletDashboard() {
  const navigate = useNavigate()
  const session = JSON.parse(sessionStorage.getItem('walletSession') || '{}')

  const handleLogout = () => {
    sessionStorage.removeItem('walletSession')
    navigate('/')
  }

  return (
    <Box>
      <Box display='flex' justifyContent='space-between' mb={3}>
        <Typography variant='h5' color='primary'>Lloyds Digital Wallet</Typography>
        <Typography>Welcome, {session.userName || 'User'} | <Button onClick={handleLogout}>Logout</Button></Typography>
      </Box>

      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
        <Paper sx={{ p: 3, flex: 1 }}>
          <Typography variant='h6' gutterBottom>View Accounts</Typography>
          <Typography>Wallet ID: 12312323XXX</Typography>
          <Typography>Name: {session.userName || 'User'}</Typography>
        </Paper>

        <Paper sx={{ p: 3, flex: 1 }}>
          <Typography variant='h6' gutterBottom>Deployed Contracts</Typography>
          <Typography>Contract ID: 0x123abc</Typography>
          <Typography>Contract Details...</Typography>
          <Button sx={{ mt: 2 }}>Deploy Smart Contract</Button>
          <Button sx={{ mt: 1 }}>Deploy Swap Smart Contract</Button>
        </Paper>
      </Stack>
    </Box>
  )
}
