import React from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader';
import useUser from '../hooks/useUser';

export default function PrivateRouter({ children, ...rest }) {
	const { hasUser } = useUser();

	if (hasUser === undefined) return <Loader />;
	if (hasUser === null) return <Navigate to='/login' />;

	return <>{children}</>;
}
