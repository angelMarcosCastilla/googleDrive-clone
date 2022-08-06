import React, { Suspense } from 'react';

// eslint-disable-next-line react/display-name
const LazyLoader = Component => props => {
	return (
		<Suspense fallback={''}>
			<Component {...props} />
		</Suspense>
	);
};

export default LazyLoader;
