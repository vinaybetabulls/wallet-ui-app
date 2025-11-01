
import { createTheme } from '@mui/material/styles'

export const lloydsTheme = (mode: 'light' | 'dark' = 'light') =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#005A30' },
      secondary: { main: '#007A53' },
      background: { default: '#F7F8F7', paper: '#FFFFFF' },
    },
    shape: { borderRadius: 16 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(45deg, #005A30, #007A53)',
            color: '#fff',
            '&:hover': {
              background: 'linear-gradient(45deg, #007A53, #005A30)'
            }
          }
        }
      }
    },
    typography: { fontFamily: 'Roboto, sans-serif' },
  })
