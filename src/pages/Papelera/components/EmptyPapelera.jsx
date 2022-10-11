import { Stack } from '@mui/material'
import React from 'react'

export default function EmptyPapelera() {
  return (
    <Stack  alignItems="center" justifyContent="center" >
				<img
					src='https://ssl.gstatic.com/docs/doclist/images/empty_state_trash_v3.png'
					alt=''
				/>
				<h2>No hay nada en papelera</h2>
			</Stack>
  )
}
