import { Button, Paper, Stack, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { loginWithGoogle } from '../../services/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import Loader from '../../components/Loader';

const StyledButtonGoogle = styled(Button)({
	backgroundColor: '#4285f4',
	color: '#fff',
	fontSize: '17px',
	fontWeight: 'bold',
	padding: '10px 30PX',
	borderRadius: '5px',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '#4382e9',
		borderColor: '#357ae8',
		color: '#fff',
	},
});
export default function Login() {
	const navigate = useNavigate();
	const { hasUser, loaderSession } = useUser();

	useEffect(() => {
		if (hasUser) {
			navigate('/', { replace: true });
		}
	}, [hasUser, navigate]);

	if (hasUser === undefined) return <Loader />;
	return (
		<Stack alignItems='center' justifyContent='center' sx={{ height: '100vh' }}>
			<Stack
				elevation={2}
				component={Paper}
				sx={{ minHeight: '300px', padding: '0 50px' }}
				alignItems='center'
				justifyContent='center'
			>
				<Stack direction='row' alignItems='center' mb={4} spacing={2}>
					<Box>
						<img
							src='https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png'
							alt='logo de google drive'
						/>
					</Box>
					<Typography variant='h4'>Drive Clone</Typography>
				</Stack>
				<StyledButtonGoogle
					onClick={loginWithGoogle}
					disableRipple
					disabled={loaderSession}
				>
					Login with Google {loaderSession && '...'}
				</StyledButtonGoogle>
			</Stack>
		</Stack>
	);
}
