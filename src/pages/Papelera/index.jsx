import Container from './Container';
import React from 'react';
import PapeleraFilesProvider from './context/papeleraFiles';

export default function Papelera() {
	return (
		<PapeleraFilesProvider>
			<Container />
		</PapeleraFilesProvider>
	);
}
