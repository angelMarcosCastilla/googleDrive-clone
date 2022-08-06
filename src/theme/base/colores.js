import { grey } from '@mui/material/colors'

export const colors = {
  primary: {
    main: '#102142'
  },
  secondary: {
    main: '#285BED',

    contrastText: '#fff'
  },
  info: {
    main: '#5e72e4',
    contrastText: '#fff'
  },
  error: {
    main: '#D22759',
    contrastText: '#fff'
  },
  success: {
    main: '#2dce89',
    contrastText: '#fff'
  },
  warning: {
    main: '#F49C0E',
    contrastText: '#fff'
  },
  neutral: {
    main: grey[700],
    bgHover: grey[300],
    dark: '#5F6368'
  },
  bg: {
    main: '#fff'
  },
  /* Gradientes */
  gradients: {
    primary: {
      main: '#EC407A',
      state: '#D81B60'
    },

    secondary: {
      main: '#747b8a',
      state: '#495361'
    },

    info: {
      main: '#49a3f1',
      state: '#1A73E8'
    },

    success: {
      main: '#66BB6A',
      state: '#43A047'
    },

    warning: {
      main: '#FFA726',
      state: '#FB8C00'
    },

    error: {
      main: '#EF5350',
      state: '#E53935'
    },

    light: {
      main: '#EBEFF4',
      state: '#CED4DA'
    },

    dark: {
      main: '#42424a',
      state: '#191919'
    }
  }
}
