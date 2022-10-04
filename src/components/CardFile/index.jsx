import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	InputBase,
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList,
	Modal,
	Paper,
	Popover,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useToggle from '../../hooks/useToggle';
import { StyledCreateNewFolder } from '../../layout/styled';
import { solfDeleteFile, updateFile } from '../../services/file';
import { removeFile, updateFileStore } from '../../store/slices/fileSlice';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
	borderRadius: 2,
};

export default function CardFile({ file, details }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const dispatch = useDispatch();
	const [isOpen, toggleOpen] = useToggle();
	const inputFileName = useRef(null);

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClickFolder = e => {
		if (e.button === 2) {
			setAnchorEl(e.currentTarget);
		}

		if (e.button === 0) {
			console.log('click izquierdo');
		}
	};

	const handleSolftDelete = async () => {
		await solfDeleteFile(file.id);
		dispatch(removeFile(file.id));
		handleClose();
	};

	const handleOpenNewFile = () => {
		toggleOpen();
		handleClose();
		inputFileName.current.focus();
	};

	const handleUpdateFileName = async () => {
		const newNameFile = inputFileName.current.querySelector('input').value;
    console.log("newNameFile", newNameFile);
		await updateFile(file.id, { name: newNameFile });
		dispatch(updateFileStore({ id: file.id, name: newNameFile }));
		toggleOpen();
	};

	return (
		<>
			<Modal open={isOpen} onClose={toggleOpen}>
				<Box sx={{ ...style, width: 350 }}>
					<Typography variant='h6' id='modal-title' marginBottom={1}>
						Cambiar Nombre
					</Typography>
					<TextField
						ref={inputFileName}
						autoFocus
						defaultValue={file.name}
						size='small'
						fullWidth
						color='secondary'
						placeholder='new folder'
					>
						<InputBase></InputBase>
					</TextField>
					<Stack mt={2} direction='row' spacing={1} justifyContent='flex-end'>
						<Button onClick={toggleOpen} disableRipple>
							Cancelar
						</Button>
						<StyledCreateNewFolder onClick={handleUpdateFileName} disableRipple>
							Aceptar
						</StyledCreateNewFolder>
					</Stack>
				</Box>
			</Modal>
			<Card
				onMouseDown={handleClickFolder}
				aria-describedby={id}
				elevation={0}
				sx={{
					border: `1px solid ${grey[300]}`,
					cursor: 'pointer',
				}}
			>
				<img
					src={file.key}
					style={{
						height: '120px',
						objectFit: 'cover',
						objectPosition: 'center',
					}}
					alt={`image-${file.name}`}
				/>
				<CardContent>
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{
							display: 'flex',
							alignItems: 'center',
							direction: 'row',
							columnGap: '10px',
						}}
					>
						<img
							style={{ width: '15px', height: '15px' }}
							src='https://drive-thirdparty.googleusercontent.com/32/type/image/jpeg'
							alt=''
						/>
						<p
							style={{
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis',
								overflow: 'hidden',
							}}
						>
							{file.name}
						</p>
					</Typography>
					{/* <Typography color='neutral.main' sx={{ fontSize: '13px' }}>
					Lo abriste
				</Typography> */}
				</CardContent>
			</Card>
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
						<MenuItem>
							<ListItemIcon></ListItemIcon>
							<ListItemText>Vista Previa</ListItemText>
						</MenuItem>
						<MenuItem onClick={handleOpenNewFile}>
							<ListItemIcon></ListItemIcon>
							<ListItemText>Cambiar Nombre</ListItemText>
						</MenuItem>
						<Divider />
						<MenuItem onClick={() => handleSolftDelete(file.id)}>
							<ListItemIcon></ListItemIcon>
							<ListItemText>Quitar</ListItemText>
						</MenuItem>
					</MenuList>
				</Paper>
			</Popover>
		</>
	);
}
