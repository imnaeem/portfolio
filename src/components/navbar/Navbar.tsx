'use client';
import { lightTheme } from '@/theme';
import { ContactMail, Description, Home, Menu, Work } from '@mui/icons-material';
import {
	AppBar,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
	{ label: 'About', icon: <Home />, href: '/' },
	{ label: 'Experience', icon: <Description />, href: '/experience' },
	{ label: 'Portfolio', icon: <Work />, href: '/portfolio' },
	{ label: 'Contact', icon: <ContactMail />, href: '/contact' },
];

export const Navbar = () => {
	const pathname = usePathname();
	const [active, setActive] = useState(pathname);
	const [mobileOpen, setMobileOpen] = useState(false);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const primaryColor = lightTheme.palette.primary.main;

	useEffect(() => {
		setActive(`/${pathname.split('/')[1]}`);
	}, [pathname]);

	return (
		<>
			{isMobile && <div style={{ height: isMobile ? 80 : 130 }} />}
			<AppBar
				elevation={0}
				sx={{
					position: isMobile ? 'fixed' : 'relative',
					height: isMobile ? 80 : 130,
					zIndex: (theme) => theme.zIndex.drawer + 1,
					justifyContent: 'center',
					backgroundColor: isMobile ? '#F3F6F6' : 'transparent',
				}}>
				<Toolbar className='flex justify-between' sx={{ width: '100%', maxWidth: '1380px', mx: 'auto' }}>
					<Link href='/'>
						<Image src='/logo.png' alt='logo' width={isMobile ? 160 : 356} height={isMobile ? 50 : 95} priority />
					</Link>
					{!isMobile && (
						<div className='flex space-x-4'>
							{navItems.map(({ label, icon, href }) => (
								<Link
									key={label}
									href={href}
									passHref
									className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-300 shadow-sm ${
										active === href
											? `bg-[${primaryColor}] text-white`
											: `bg-white text-gray-800 hover:bg-[${primaryColor}] hover:text-white`
									}`}>
									{icon}
									<span>{label}</span>
								</Link>
							))}
						</div>
					)}

					{isMobile && (
						<div className='flex items-center space-x-3'>
							<IconButton onClick={() => setMobileOpen(true)} className='bg-white p-2 rounded-full'>
								<Menu className='text-gray-800' />
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>

			{isMobile && (
				<Drawer
					slotProps={{ paper: { sx: { mt: { xs: 10, lg: 0 } } } }}
					anchor='right'
					open={mobileOpen}
					onClose={() => setMobileOpen(false)}>
					<List className='w-64 h-full'>
						{navItems.map(({ label, icon, href }) => (
							<Link key={label} href={href} passHref>
								<ListItem disablePadding>
									<ListItemButton
										selected={href === active}
										onClick={() => setMobileOpen(false)}
										className={active === href ? 'bg-red-500 text-white' : 'text-gray-800'}>
										<ListItemIcon>{icon}</ListItemIcon>
										<ListItemText primary={label} />
									</ListItemButton>
								</ListItem>
							</Link>
						))}
					</List>
				</Drawer>
			)}
		</>
	);
};
