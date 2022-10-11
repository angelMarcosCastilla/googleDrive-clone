import { Box } from '@mui/material';
import React from 'react';
import CardFile from '../components/Card';
import EmptyPapelera from '../components/EmptyPapelera';
import useContextFiles from '../hooks/useContext';

export default function Container() {
	const {files} = useContextFiles();

	if (files === null) return null;

	if (files.length === 0) return <EmptyPapelera />;

	return (
		<Box sx={{
      display: 'grid',
      'grid-template-columns': 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '15px',
      '& img': {
        height: '180px',
        objectFit: 'cover',
        width: '100%',
      },
    }}>
			{files.map(file => (
				<CardFile key={files.id} file={file}></CardFile>
			))}
		</Box>
	);
}
