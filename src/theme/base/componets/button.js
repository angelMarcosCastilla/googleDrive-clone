import { generateGradient } from '../../functions/generateGradient'

export const custonButton = {
  variants: [
    {
      props: { variant: 'gradient' }
    }
  ],
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      all: 'unset',
      boxShadow: 'none',
      borderColor: theme.palette[ownerState.color].main,
      cursor: 'pointer',
      textTransform: 'none',
      '&:hover': {
        boxShadow: 'none',
        opacity: 0.95
      },
      '&:active': {
        opacity: 0.95
      },
      ...(ownerState.variant === 'contained' &&
        ownerState.shadowcolered === 'true' && {
        boxShadow: `0px 10px 15px -3px ${theme.palette[ownerState.color].main
          }70`,
        '&:hover': {
          boxShadow: `0px 10px 15px -3px ${theme.palette[ownerState.color].main
            }70`,
          opacity: 0.9
        }
      })
    }),
    contained: ({ ownerState, theme }) => ({
      '&:hover': {
        backgroundColor: theme.palette[ownerState.color].main
      }
    }),

    gradient: ({ ownerState, theme }) => ({
      ...generateGradient({
        firstColor: theme.palette.gradients[ownerState.color].main,
        secondColor: theme.palette.gradients[ownerState.color].state,
        direction: 'to left'
      }),
      ...(ownerState.shadowcolered === 'true' && {
        boxShadow: `0px 10px 15px -3px ${theme.palette[ownerState.color].main
          }50`,
        '&:hover': {
          boxShadow: `0px 10px 15px -3px ${theme.palette[ownerState.color].main
            }50`,
          opacity: 0.9
        }
      })
    })
  }
}
