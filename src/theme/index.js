import { colors } from './base/colores'
import { createTheme } from '@mui/material/styles'
import { custonButton } from './base/componets/button'
import { custonChebox } from './base/componets/checkbox'

export const theme = createTheme({
  palette: colors,
  components: {
    MuiButton: { ...custonButton },
    MuiCheckbox: { ...custonChebox },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          color: theme.palette.neutral.main
        })
      }
    }
  }
})
