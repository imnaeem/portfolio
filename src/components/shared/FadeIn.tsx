'use client';

import { Fade } from '@mui/material';
import { ReactNode } from 'react';

// Client-side mount animation wrapper. Pages are server components, and
// passing their JSX straight into MUI's Fade breaks static prerendering on
// Next.js 15.5+ (Fade receives an unresolved lazy child and crashes reading
// child.props.style). Rendering Fade inside a client component keeps the
// exact same visual behaviour with a working build.
const FadeIn = ({ children }: { children: ReactNode }) => {
	return (
		<Fade in timeout={500}>
			<div>{children}</div>
		</Fade>
	);
};

export default FadeIn;
