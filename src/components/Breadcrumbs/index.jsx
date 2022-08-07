import { Breadcrumbs, Stack } from '@mui/material';
import React, { useMemo } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';

const getParentsFolder = (folder, folders) => {
	const parents = [];
	let currentFolder = folder;
	while (currentFolder) {
		parents.push(currentFolder);
		currentFolder = folders.find(f => f.name === currentFolder.folder_root);
	}
	return parents.reverse();
	
};

const LinkStyled = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	color: theme.palette.grey["700"],
	padding: '0.5rem',
	borderRadius: '0.5rem',
	'&:hover': {
		color: theme.palette.grey["800"],
		backgroundColor: theme.palette.grey["200"],

	},
	
	
}))
export default function Breadcrumbss() {
	const location = useLocation();
	const { folders } = useSelector(state => state.folders);

	const breadcrumbsData = useMemo(() => {
		const folderIdofpath = location.pathname === '/' ? 'root' : location.pathname.split('/')[2];
		const breadcrumbsItems = [{ name: 'root', id: 'root' }];
		if (folderIdofpath === 'root') return breadcrumbsItems;
		const foldersInfo = folders.find(
			folder => folder.id.toString() === folderIdofpath
		);
		return [...breadcrumbsItems, ...getParentsFolder(foldersInfo, folders)];
	}, [location]);
 
	console.log({breadcrumbsData});
	return (
		<Stack spacing={2} mb={3}>
			<Breadcrumbs
			 className='breadcrumbs'
				separator={<NavigateNextIcon fontSize='small' />}
				aria-label='breadcrumb'
			>
				{breadcrumbsData.map((item, index) => {
					return (
						<LinkStyled
							underline='hover'
							key={index}
							color='inherit'
							to={item.name === 'root' ? '/' : `/folders/${item.id}`}
						>
							{item.name }
						</LinkStyled>
					);
				})}
			</Breadcrumbs>
		</Stack>
	);
}
