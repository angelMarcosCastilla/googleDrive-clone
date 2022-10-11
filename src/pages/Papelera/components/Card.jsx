import {
	Card,
	CardContent,
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList,
	Paper,
	Popover,
	Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFile, restablecerFile } from '../../../services/file';
import { addFile, removeFile } from '../../../store/slices/fileSlice';
import useContextFiles from '../hooks/useContext';

export default function CardFile({ file }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const { deleteFolderForPapelera } = useContextFiles();
  const dispatch = useDispatch();

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

	const handleRestablecerFiles = async () => {
		try {
			await restablecerFile(file.id);
			deleteFolderForPapelera(file.id);
      dispatch(addFile(file));
      handleClose();
		} catch (error) {
			
		}
	};

  const handleDeleteFiles = async () => {
    try {
      await deleteFile(file.id);
      deleteFolderForPapelera(file.id);
      dispatch(removeFile(file.id));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  }
	return (
		<>
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
						<MenuItem onClick={handleRestablecerFiles}>
							<ListItemIcon></ListItemIcon>
							<ListItemText>Restablecer</ListItemText>
						</MenuItem>

						<MenuItem onClick={handleDeleteFiles}>
							<ListItemIcon></ListItemIcon>
							<ListItemText>Eliminar Definitivamente</ListItemText>
						</MenuItem>
					</MenuList>
				</Paper>
			</Popover>
		</>
	);
}
