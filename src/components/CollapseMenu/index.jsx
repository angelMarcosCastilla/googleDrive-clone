import React from 'react';
import CollapseMenuItem from '../CollapseMenuItem';

export default function CollapseMenu({ folders = [] }) {

	return (
		<ol style={{listStyle:"none"}}>
			{folders.map(folder => <CollapseMenuItem key={folder.id} folder={folder}/>)}
		</ol>
	);
}
