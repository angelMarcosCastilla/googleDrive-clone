import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LazyLoader from '../components/LazyLoader';
import Login from '../pages/Login';
import PrivateRouter from './PrivateRouter';
import MainLayout from '../layout/Main';
import NotFound from '../pages/NotFound';
import Papelera from '../pages/Papelera';
const Home = LazyLoader(lazy(() => import('../pages/Home')));
const Folders = LazyLoader(lazy(() => import('../pages/Folders')));

export default function RouterApp() {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/login' element={<Login />} />
			<Route
				element={
					<PrivateRouter>
						<MainLayout />
					</PrivateRouter>
				}
			>
				<Route path='/' element={<Home />} />
				<Route path='/papelera' element={<Papelera />} />
				<Route path='/folders/:id' element={<Folders />} />
			</Route>
		</Routes>
	);
}
