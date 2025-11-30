'use client';
import { Email, Link, WhatsApp } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const handleLinkClick = (link: string) => {
	window.open(link, '_blank');
};

const contactDetails = [
	{
		title: 'Phone',
		description: 'WhatsApp',
		color: '#25D366',
		icon: <WhatsApp />,
		route: '/whatsapp',
	},
	{
		title: 'Email',
		values: [
			{ text: 'contact@imnaeem.dev', link: 'mailto:contact@imnaeem.dev' },
			{ text: 'imnaeem.dev@gmail.com', link: 'mailto:imnaeem.dev@gmail.com' },
		],
		color: '#4F46E5',
		icon: <Email />,
	},
	{
		title: 'Social Profiles',
		values: [
			{ text: 'LinkedIn', link: 'https://www.linkedin.com/in/im-naeem/' },
			{ text: 'Github', link: 'https://github.com/imnaeem/' },
		],
		color: '#14B8A6',
		icon: <Link />,
	},
];

export const ContactDetails = () => {
	const handleCardClick = (route?: string) => {
		if (route) {
			window.open(route, '_blank');
		}
	};

	return (
		<Stack spacing={2.5} flex={1} width='100%'>
			{contactDetails.map((item) => (
				<Box
					key={item.title}
					onClick={() => handleCardClick(item.route)}
					sx={{
						p: 3,
						borderRadius: '16px',
						backgroundColor: '#FFFFFF',
						border: '1px solid #E2E8F0',
						cursor: item.route ? 'pointer' : 'default',
						transition: 'all 0.2s ease-in-out',
						'&:hover': {
							borderColor: item.color,
							boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
						},
					}}>
					<Stack direction='row' spacing={2} alignItems='flex-start'>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: 48,
								height: 48,
								borderRadius: '12px',
								backgroundColor: `${item.color}15`,
								flexShrink: 0,
							}}>
							{item.icon && React.cloneElement(item.icon, { sx: { color: item.color, fontSize: 24 } })}
						</Box>
						<Stack spacing={0.5}>
							<Typography
								sx={{
									fontSize: 12,
									fontWeight: 600,
									color: '#64748B',
									textTransform: 'uppercase',
									letterSpacing: '0.5px',
								}}>
								{item.title}
							</Typography>
							{item.description && (
								<Typography
									sx={{
										fontSize: 16,
										fontWeight: 600,
										color: '#1E293B',
										cursor: item.route ? 'pointer' : 'default',
										'&:hover': {
											color: item.route ? item.color : '#1E293B',
										},
									}}>
									{item.description}
								</Typography>
							)}
							{item.values?.map((value) => (
								<Typography
									key={value.text}
									onClick={(e) => {
										e.stopPropagation();
										handleLinkClick(value.link);
									}}
									sx={{
										fontSize: 15,
										fontWeight: 500,
										color: '#1E293B',
										cursor: 'pointer',
										'&:hover': {
											color: item.color,
										},
									}}>
									{value.text}
								</Typography>
							))}
						</Stack>
					</Stack>
				</Box>
			))}
		</Stack>
	);
};
