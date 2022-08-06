export const generateGradient = ({ firstColor, secondColor, direction }) => {
  return {
    background: `linear-gradient(${direction}, ${firstColor}, ${secondColor})`,
    color: '#fff',
    border: 'none',
    '&:hover': {
      background: `linear-gradient(${direction}, ${firstColor}, ${secondColor})`
    },
    '&:active': {
      backgroundColor: `linear-gradient(${direction}, ${firstColor}, ${secondColor})`
    }
  }
}
