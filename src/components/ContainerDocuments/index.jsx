import React, { useEffect, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import FolderUI from '../FolderUI';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';

const BoxFolder = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: '15px',
	marginTop: '15px',
}));

export default function ContainerDocuments() {
	const [foldersData, setFoldersData] = useState([]);
	const location = useLocation();
	const params = useParams();
	const navigate = useNavigate();
	const { folders: foldersValue, foldersStructure } = useSelector(
		state => state.folders
	);

	useEffect(() => {
		const paramsId = params?.id;
		const path = location.pathname;
		let nameFoldersRoot = path === '/' ? 'root' : '';
		if (paramsId) {
			const data = foldersValue.find(
				folder => folder.id.toString() === paramsId
			);
			if (!data) return navigate('/Not_found');
			nameFoldersRoot = data.name;
		}
		const folders = foldersStructure[nameFoldersRoot];
		setFoldersData(folders);
	}, [location, foldersValue, foldersStructure]);

	return (
		<Box component='section' mt={2}>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Typography fontSize={14}>Carpetas</Typography>
				<Stack direction='row' spacing={0.5} alignItems='center'>
					<Typography fontSize={14}>nombre</Typography>
					<IconButton>
						<ArrowDownwardOutlinedIcon />
					</IconButton>
				</Stack>
			</Stack>
			<BoxFolder>
				{foldersData?.map(folder => (
					<FolderUI key={folder.id} {...folder} />
				))}
			</BoxFolder>
		</Box>
	);
}
