import React, { useState } from 'react';
import {
	Avatar,
	IconButton,
	Menu,
	Box,
	Tooltip,
	Typography,
	Stack,
	Divider,
	Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/slices/userSlice';

export default function AvatarMenu() {
	const [anchorElUser, setAnchorElUser] = useState(null);
	const user = useSelector(state => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleOpenUserMenu = event => setAnchorElUser(event.currentTarget);

	const handleCloseUserMenu = () => setAnchorElUser(null);

	const hanldeLogoutAuth = () => {
		logout().then(({ error }) => {
			if (!error) {
				dispatch(logoutUser());
				navigate('/login');
			}
		});
	};

	return (
		<Box>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar
						alt={`picture of ${user.user_metadata.avatar_url}`}
						src={user.user_metadata.avatar_url}
					/>
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<Stack
					sx={{ minWidth: '350px', padding: '20px 30px', textAlign: 'center' }}
				>
					<Avatar
						sx={{ width: 70, height: 70, margin: '0 auto' }}
						src={user.user_metadata.avatar_url}
					></Avatar>
					<Typography mt={2}>{user.user_metadata.name}</Typography>
					<Typography variant='subtitle2'>
						{user.user_metadata.email}
					</Typography>
				</Stack>
				<Divider />
				<Button
					onClick={hanldeLogoutAuth}
					disableRipple
					sx={{
						display: 'block',
						cursor: 'pointer',
						margin: '20px auto',
						border: '1px solid gray',
						padding: '6px 20px',
					}}
				>
					Salir
				</Button>
			</Menu>
		</Box>
	);
}
