import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CollapseMenu from '../CollapseMenu';
import { NavLink } from 'react-router-dom';
import { StyledListMenuItem } from '../../layout/styled';

export default function CollapseMenuItem({ folder }) {
	const [toggle, setToggle] = useState(false);

	const handleToogle = () => {
		setToggle(prevToggle => !prevToggle);
	};

	return (
		<li>
			<StyledListMenuItem style={{ position: 'relative' }}>
				{folder.subCarpetas.length > 0 && (
					<IconButton
						onClick={handleToogle}
						sx={{
							transform: toggle ? 'rotate(90deg)' : '',
							position: 'absolute',
							left: '-35px',
							top: '-7px',
						}}
						disableRipple
					>
						<PlayArrowIcon />
					</IconButton>
				)}
				<NavLink
					className={({ isActive }) => (isActive ? 'active' : '')}
					to={`/folders/${folder.id}`}
				>
					<span>{folder.name}</span>
				</NavLink>
			</StyledListMenuItem>
			{toggle && <CollapseMenu folders={folder.subCarpetas} />}
		</li>
	);
}
