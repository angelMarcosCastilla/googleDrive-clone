import {
	Button,
	InputBase,
	LinearProgress,
	linearProgressClasses,
	ListItem,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const Search = styled('div')(({ theme, props }) => ({
	width: '700px',
	borderRadius: '10px',
	padding: '5px 10px',
	background: grey[100],
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
}));

export const StyledLinkLogo = styled(Link)(({ theme, props }) => ({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'row',
	gap: '10px',
	color: theme.palette.primary.main,
	textDecoration: 'none',
	fontSize: '1.5rem',
	width: '270px',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	flex: 1,
	'& .MuiInputBase-input': {
		margin: '0',
	},
}));

export const LayoutStyles = styled('div')(({ theme }) => ({
	display: 'grid',
	minHeight: '100vh',
	gridTemplateColumns: '270px 1fr',
	gridTemplateRows: 'auto 1fr',
	gap: '10px',
	gridTemplateAreas: `
    "header header"
    "sidebar content"
    `,
	'& #header': {
		gridArea: 'header',
		padding: '7px 15px',
		borderBottom: `1px solid ${grey[300]}`,
	},
	'& #sidebar': {
		gridArea: 'sidebar',
		paddingRight: '15px',
	},
	'& #content': {
		gridArea: 'content',
	},
}));

export const StyledNewButton = styled(Button)(({ theme }) => ({
	background: '#fff',
	boxShadow:
		'0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
	minWidth: '120px',
	display: 'flex',
	marginLeft: '10px',
	padding: '7px 0',
	paddingLeft: '10px',
	borderRadius: '24px',
	alignItems: 'center',
	cursor: 'pointer',
	fontSize: '14px',
	gap: '10px',
	fontWeight: '500px',
	'&:hover': {
		boxShadow:
			'0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
		background: '#efeded',
	},
	'&:active': {
		transition: 'none',
		boxShadow:
			'0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
	},
}));

export const StyledListMenuItem = styled(ListItem)(({ theme }) => ({
	padding: '7px 0',
	fontSize: '13px !important',
	display: 'flex',
	alignItems: 'center',
	position: 'relative',
	paddingLeft: '25px',
	gap: '20px',
	borderRadius: '0 25px 25px 0',
	'&:hover': {
		background: grey[100],
		cursor: 'pointer',
	},
	'& .MuiListItemText-primary': {
		fontSize: '13px',
		fontWeight: '500',
		color: theme.palette.neutral.main,
	},
	'& .MuiSvgIcon-root': {
		position: 'absolute',
		left: '3px',
		color: theme.palette.neutral.main,
	},
	'& > svg': {
		color: theme.palette.neutral.main,
	},
}));

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 4,
	width: '200px',
	marginLeft: '25px',
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
	},
}));

export const StyledCreateNewFolder = styled(Button)(({ theme }) => ({
	color: theme.palette.info.main,
	padding: '7px 10px',
	textTransform: 'none',
	'&:hover': {
		background: '#E8F0FE',
	},
}));
