import { styled } from '@mui/system'
import React from 'react'

const Input = styled('input')(({ theme }) => ({
  border: `1px solid ${theme.palette.neutral.main}`,
  outline: 'none',
  padding: '10px 15px',
  borderRadius: '4px',
  marginBottom: '10px',
  fontFamily: theme.typography.fontFamily,
  color: 'inherit',
  fontSize: theme.typography.fontSize
}))
const InputGroup = styled('div')(({ theme }) => ({
  color: theme.palette.neutral.main,
  fontFamily: theme.typography.fontFamily
}))

const InputLabel = styled('label')(({ theme, ...props }) => ({
  fontSize: '14px',
  marginBottom: '.2rem',
  position: 'relative',
  display: 'block',
  ...(props.required && {
    '&::after': {
      position: 'absolute',
      content: "'*'",
      zIndex: '100',
      marginLeft: '5px',
      color: theme.palette.error.main
    }
  })
}))

export default function LabelInput ({ label, required = false, ...props }) {
  return (
		<InputGroup>
			<InputLabel required={required}>{label}</InputLabel>
			<Input {...props} />
		</InputGroup>
  )
}
