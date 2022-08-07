import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import {
	Button,
	Collapse,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Modal,
	Stack,
	TextField,
} from '@mui/material';

import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import AvatarMenu from '../components/AvatarMenu';
import { createFolder } from '../services/folders';
import { useDispatch, useSelector } from 'react-redux';
import { addFoderStructure, addFolder } from '../store/slices/folderSlice';
import { parsestructureFolders } from '../utils/foldersUtils';
import {
	BorderLinearProgress,
	LayoutStyles,
	Search,
	StyledCreateNewFolder,
	StyledInputBase,
	StyledLinkLogo,
	StyledListMenuItem,
	StyledNewButton,
} from './styled';

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

function PrimarySearchAppBar({ children }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const params = useParams();
	const [openModalNewFolder, setOpenModalNewFolder] = React.useState(false);
	const nameFolder = React.useRef();
	const open = Boolean(anchorEl);
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();
	const { folders } = useSelector(state => state.folders);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = e => {
		setAnchorEl(null);
	};

	const handleOpenModalNewFolder = e => {
		setAnchorEl(null);
		setOpenModalNewFolder(true);
	};

	const handleCloseModalNewFolder = e => {
		setOpenModalNewFolder(false);
	};

	const handleSubmitnewfolder = e => {
		const folderName = nameFolder.current.querySelector('input').value;
		const idUser = user.id;
		let nameRootfolder = 'root';
		if (params?.id) {
			nameRootfolder = folders.find(
				folder => folder.id.toString() === params.id
			).name;
		}

		createFolder(folderName, nameRootfolder, idUser).then(res => {
			dispatch(addFolder(res.data));
			setOpenModalNewFolder(false);
		});
	};

	React.useEffect(() => {
		const structureFolderData = parsestructureFolders(folders);
		dispatch(addFoderStructure(structureFolderData));
	}, [folders]);

	return (
		<LayoutStyles>
			<Stack component='header' id='header' direction='row'>
				<StyledLinkLogo to='/'>
					<Box width={40} height={40}>
						<img
							src='https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png'
							alt='logo de google drive'
						/>
					</Box>
					<Typography
						variant='h1'
						sx={{
							fontSize: '18px',
							color: 'currentcolor',
							textDecoration: 'none',
						}}
					>
						Clone Drive
					</Typography>
				</StyledLinkLogo>
				<Stack
					flex={1}
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Search>
						<IconButton>
							<SearchIcon />
						</IconButton>
						<StyledInputBase
							placeholder='Buscar en Drive'
							inputProps={{ 'aria-label': 'search' }}
						/>
						<IconButton>
							<TuneIcon />
						</IconButton>
					</Search>
					<Stack direction='row' spacing={3}>
						<Stack direction='row' alignItems='center' spacing={1}>
							<IconButton>
								<HelpOutlineOutlinedIcon />
							</IconButton>
							<IconButton>
								<SettingsOutlinedIcon />
							</IconButton>
						</Stack>

						<Stack direction='row' alignItems='center' spacing={1}>
							<IconButton>
								<AppsOutlinedIcon />
							</IconButton>
							<AvatarMenu />
						</Stack>
					</Stack>
				</Stack>
			</Stack>
			<aside id='sidebar'>
				<StyledNewButton
					disableRipple
					id='demo-positioned-button'
					aria-controls={open ? 'demo-positioned-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='36'
						height='36'
						viewBox='0 0 36 36'
					>
						<path fill='#34A853' d='M16 16v14h4V20z' />
						<path fill='#4285F4' d='M30 16H20l-4 4h14z' />
						<path fill='#FBBC05' d='M6 16v4h10l4-4z' />
						<path fill='#EA4335' d='M20 16V6h-4v14z' />
						<path fill='none' d='M0 0h36v36H0z' />
					</svg>
					Nuevo
				</StyledNewButton>
				<Menu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					anchorEl={anchorEl}
					open={open}
					sx={{ '& .MuiPaper-root': { minWidth: '250px' } }}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'bottom',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'bottom',
					}}
				>
					<MenuItem onClick={handleOpenModalNewFolder}>
						<ListItemIcon>
							<CreateNewFolderOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Carpeta</ListItemText>
					</MenuItem>
					<Divider />
					<MenuItem onClick={handleClose}>
						<ListItemIcon>
							<UploadFileOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Archivos</ListItemText>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItemIcon>
							<DriveFolderUploadOutlinedIcon />
						</ListItemIcon>
						<ListItemText>Carpeta</ListItemText>
					</MenuItem>
				</Menu>
				<Modal
					open={openModalNewFolder}
					onClose={handleCloseModalNewFolder}
					aria-labelledby='child-modal-title'
					aria-describedby='child-modal-description'
				>
					<Box sx={{ ...style, width: 350 }}>
						<Typography variant='h6' id='modal-title' marginBottom={1}>
							Nueva Carpeta
						</Typography>
						<TextField
							ref={nameFolder}
							size='small'
							fullWidth
							color='secondary'
							placeholder='new folder'
						>
							<InputBase></InputBase>
						</TextField>
						<Stack mt={2} direction='row' spacing={1} justifyContent='flex-end'>
							<Button onClick={handleCloseModalNewFolder} disableRipple>
								Cancelar
							</Button>
							<StyledCreateNewFolder
								onClick={handleSubmitnewfolder}
								disableRipple
							>
								Crear
							</StyledCreateNewFolder>
						</Stack>
					</Box>
				</Modal>
				<Box marginTop={1}>
					<List sx={{ padding: '0' }}>
						<StyledListMenuItem>
							<NavLink className={({isActive}) => isActive ? "active": ""} to='/'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 24 24'
									fill='currentColor'
									focusable='false'
								>
									<path d='M19 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V4C21 2.9 20.1 2 19 2ZM19 20H5V19H19V20ZM19 17H5V4H19V17Z'></path>
									<path d='M13.1215 6H10.8785C10.5514 6 10.271 6.18692 10.0841 6.46729L7.14019 11.6075C7 11.8878 7 12.215 7.14019 12.4953L8.26168 14.4579C8.40187 14.7383 8.72897 14.9252 9.05608 14.9252H15.0374C15.3645 14.9252 15.6449 14.7383 15.8318 14.4579L16.9533 12.4953C17.0935 12.215 17.0935 11.8878 16.9533 11.6075L13.9159 6.46729C13.7757 6.18692 13.4486 6 13.1215 6ZM10.1776 12.0748L12.0467 8.8972L13.8692 12.0748H10.1776Z'></path>
								</svg>
								<ListItemText primary='Archivos' />
							</NavLink>
						</StyledListMenuItem>

						<StyledListMenuItem>
							<NavLink to='/pc'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 24 24'
									fill='currentColor'
									focusable='false'
								>
									<path d='M0 0h24v24H0z' fill='none'></path>
									<path d='M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z'></path>
								</svg>
								<ListItemText primary='Computadoras' />
							</NavLink>
						</StyledListMenuItem>
						<StyledListMenuItem>
							<NavLink className={({isActive}) => isActive ? "active": ""} to='/share'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 24 24'
									fill='currentColor'
									focusable='false'
								>
									<path d='M0 0h24v24H0z' fill='none'></path>
									<path
										xmlns='http://www.w3.org/2000/svg'
										d='M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z'
									></path>
								</svg>
								<ListItemText primary='compartidos Conmigo' />
							</NavLink>
						</StyledListMenuItem>
						<StyledListMenuItem>
							<NavLink className={({isActive}) => isActive ? "active": ""} to='/recientes'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 24 24'
									fill='currentColor'
									focusable='false'
								>
									<path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'></path>
									<path d='M0 0h24v24H0z' fill='none'></path>
									<path d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'></path>
								</svg>
								<ListItemText primary='Recientes' />
							</NavLink>
						</StyledListMenuItem>
						<StyledListMenuItem>
							<NavLink className={({isActive}) => isActive ? "active": ""} to='/destacados'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 24 24'
									focusable='false'
									fill='currentColor'
								>
									<path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'></path>
								</svg>
								<ListItemText primary='destacados' />
							</NavLink>
						</StyledListMenuItem>
						<StyledListMenuItem>
							<NavLink className={({isActive}) => isActive ? "active": ""} to='/papelera'>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 24 24'
									fill='currentColor'
									focusable='false'
								>
									<path d='M0 0h24v24H0z' fill='none'></path>
									<path d='M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z'></path>
									<path d='M9 8h2v9H9zm4 0h2v9h-2z'></path>
								</svg>
								<ListItemText primary='Papelera' />
							</NavLink>
						</StyledListMenuItem>
					</List>
					<Collapse>
						<List disablePadding>
							<ListItem>
								<ListItemText />
								Hola
							</ListItem>
							<ListItem>
								<ListItemText />
								Hola
							</ListItem>
							<ListItem>
								<ListItemText />
								Hola
							</ListItem>
							<ListItem>
								<ListItemText />
								Hola
							</ListItem>
						</List>
					</Collapse>
				</Box>
				<Divider sx={{ marginY: '10px' }} />
				<Box>
					<StyledListMenuItem>
						<Link
							to='/'
							style={{
								display: 'flex',
								gap: '10px',
								alignItems: 'center',
								textDecoration: 'none',
								marginBottom: '20px',
							}}
						>
							<svg
								className='a-s-fa-Ha-pa a-ml-da-Q-c'
								width='24px'
								height='24px'
								viewBox='0 0 24 24'
								focusable='false'
								fill='#6f6f6f'
							>
								<path d='M0 0h24v24H0z' fill='none'></path>
								<path d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z'></path>
							</svg>
							<Typography
								color='neutral.main'
								sx={{ textDecoration: 'none', fontSize: '14px' }}
							>
								Almacenamiento{' '}
							</Typography>
						</Link>
					</StyledListMenuItem>
					<BorderLinearProgress variant='determinate' value={50} />
					<Typography ml={3.3} mt={1} fontSize={13}>
						1.6 Gb de 15GB utilizados
					</Typography>
				</Box>
			</aside>
			<main id='content'>
				<Outlet />
			</main>
		</LayoutStyles>
	);
}

export default React.memo(PrimarySearchAppBar);
