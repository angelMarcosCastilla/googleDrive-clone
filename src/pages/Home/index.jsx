import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import ContainerDocuments from '../../components/ContainerDocuments';
export default function Home() {
	return (
		<section style={{ paddingRight: '15px' }}>
			<Typography
				sx={{ fontSize: '14px' }}
				variant='h4'
				marginBottom={2}
				color='neutral.main'
			>
				Sugerido
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={2.4}>
					<Card elevation={0} sx={{ border: `1px solid ${grey[300]}` }}>
						<CardMedia
							component='img'
							height='120'
							image='https://picsum.photos/300/300'
							alt='green iguana'
						/>
						<CardContent>
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{
									display: 'flex',
									alignItems: 'center',
									direction: 'row',
									gap: '10px',
									mb: '10px',
								}}
							>
								<img
									width={15}
									height={15}
									src='https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.google-apps.spreadsheet'
									alt=''
								/>
								Proyectos en excel
							</Typography>
							<Typography color='neutral.main' sx={{ fontSize: '13px' }}>
								Lo abriste
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2.4}>
					<Card elevation={0} sx={{ border: `1px solid ${grey[300]}` }}>
						<CardMedia
							component='img'
							height='120'
							image='https://picsum.photos/300/300'
							alt='green iguana'
						/>
						<CardContent>
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{
									display: 'flex',
									alignItems: 'center',
									direction: 'row',
									gap: '10px',
									mb: '10px',
								}}
							>
								<img
									width={15}
									height={15}
									src='https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.google-apps.spreadsheet'
									alt=''
								/>
								Proyectos en excel
							</Typography>
							<Typography color='neutral.main' sx={{ fontSize: '13px' }}>
								Lo abriste
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2.4}>
					<Card elevation={0} sx={{ border: `1px solid ${grey[300]}` }}>
						<CardMedia
							component='img'
							height='120'
							image='https://picsum.photos/300/300'
							alt='green iguana'
						/>
						<CardContent>
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{
									display: 'flex',
									alignItems: 'center',
									direction: 'row',
									gap: '10px',
									mb: '10px',
								}}
							>
								<img
									width={15}
									height={15}
									src='https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.google-apps.spreadsheet'
									alt=''
								/>
								Proyectos en excel
							</Typography>
							<Typography color='neutral.main' sx={{ fontSize: '13px' }}>
								Lo abriste
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2.4}>
					<Card elevation={0} sx={{ border: `1px solid ${grey[300]}` }}>
						<CardMedia
							component='img'
							height='120'
							image='https://picsum.photos/300/300'
							alt='green iguana'
						/>
						<CardContent>
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{
									display: 'flex',
									alignItems: 'center',
									direction: 'row',
									gap: '10px',
									mb: '10px',
								}}
							>
								<img
									width={15}
									height={15}
									src='https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.google-apps.spreadsheet'
									alt=''
								/>
								Proyectos en excel
							</Typography>
							<Typography color='neutral.main' sx={{ fontSize: '13px' }}>
								Lo abriste
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={2.4}>
					<Card elevation={0} sx={{ border: `1px solid ${grey[300]}` }}>
						<CardMedia
							component='img'
							height='120'
							image='https://picsum.photos/300/300'
							alt='green iguana'
						/>
						<CardContent>
							<Typography
								variant='body2'
								color='text.secondary'
								sx={{
									display: 'flex',
									alignItems: 'center',
									direction: 'row',
									gap: '10px',
									mb: '10px',
								}}
							>
								<img
									width={15}
									height={15}
									src='https://drive-thirdparty.googleusercontent.com/32/type/application/vnd.google-apps.spreadsheet'
									alt=''
								/>
								Proyectos en excel
							</Typography>
							<Typography color='neutral.main' sx={{ fontSize: '13px' }}>
								Lo abriste
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<ContainerDocuments />
		</section>
	);
}
