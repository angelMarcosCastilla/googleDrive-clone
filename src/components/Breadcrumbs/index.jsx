import { Breadcrumbs, Stack, Typography, Link } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Breadcrumbss() {
	const breadcrumbs = [
		<Link underline='hover' key='1' color='inherit' href='/'>
			Root
		</Link>,
		<Link
			underline='hover'
			key='2'
			color='inherit'
			href='/material-ui/getting-started/installation/'
		>
			Core
		</Link>,
		<Typography key='3' color='text.primary'>
			Breadcrumb
		</Typography>,
	];

	return (
		<Stack spacing={2} mb={3}>
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize='small' />}
				aria-label='breadcrumb'
			>
				{breadcrumbs}
			</Breadcrumbs>
		</Stack>
	);
}
