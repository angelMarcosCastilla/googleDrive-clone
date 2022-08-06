import React from 'react';
import {
	Divider,
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList,
	Paper,
	Popover,
	styled,
	Typography,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { deletefolders } from '../../services/folders';
import { useDispatch } from 'react-redux';
import { deleteFolder } from '../../store/slices/folderSlice';
import { Link } from 'react-router-dom';

const FolderStyled = styled(Link)(({ theme }) => ({
	width: '230px',
	padding: '10px',
	textDecoration: 'none',
	borderRadius: '5px',
	border: `1px solid ${theme.palette.grey['300']}`,
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	color: theme.palette.grey['700'],
}));

export default function FolderUI({ name, id: idFolder }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const dispatch = useDispatch();
	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const handleClickFolder = e => {
		if (e.button === 2) {
			setAnchorEl(e.currentTarget);
		}

		if (e.button === 0) {
			console.log('click izquierdo');
		}
	};

	const handleDeleteFolder = () => {
		deletefolders(idFolder).then(res => {
			dispatch(deleteFolder(idFolder));
		});
	};
	return (
		<>
			<FolderStyled
				to={`/folders/${idFolder}`}
				aria-describedby={id}
				onMouseDown={handleClickFolder}
			>
				<FolderIcon />
				<Typography>{name}</Typography>
			</FolderStyled>

			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'center',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<Paper sx={{ width: 320, maxWidth: '100%' }}>
					<MenuList>
						<MenuItem onClick={handleDeleteFolder}>
							<ListItemIcon></ListItemIcon>
							<ListItemText>delete folder</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon></ListItemIcon>
							<ListItemText>Copy</ListItemText>
							<Typography variant='body2' color='text.secondary'>
								⌘C
							</Typography>
						</MenuItem>
						<MenuItem>
							<ListItemIcon></ListItemIcon>
							<ListItemText>Paste</ListItemText>
							<Typography variant='body2' color='text.secondary'>
								⌘V
							</Typography>
						</MenuItem>
						<Divider />
						<MenuItem>
							<ListItemIcon></ListItemIcon>
							<ListItemText>Web Clipboard</ListItemText>
						</MenuItem>
					</MenuList>
				</Paper>
			</Popover>
		</>
	);
}
