import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
export default function Input () {
  return (
		<Paper
			elevation={0}
			component='form'
			sx={{
			  p: '2px 4px',
			  display: 'flex',
			  alignItems: 'center',
			  width: 400,
			  border: '1px solid #e0e0e0'
			}}
		>
			<IconButton sx={{ p: '10px' }} aria-label='menu' disabled>
				<RotateLeftIcon color='' />
			</IconButton>
			<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />

			<InputBase sx={{ ml: 1, flex: 1 }} placeholder='search by code or name' />
			<IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
				<SearchIcon />
			</IconButton>
		</Paper>
  )
}
