'use client';
import { ContactMail, Description, Home, Menu, Work, Close } from '@mui/icons-material';
import {
	AppBar,
	Box,
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
	Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
	{ label: 'About', icon: <Home />, href: '/' },
	{ label: 'Experience', icon: <Description />, href: '/experience' },
	{ label: 'Portfolio', icon: <Work />, href: '/portfolio' },
	{ label: 'Blog', icon: <Description />, href: '/blogs' },
	{ label: 'Contact', icon: <ContactMail />, href: '/contact' },
];

export const Navbar = () => {
	const pathname = usePathname();
	const [active, setActive] = useState(pathname);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	useEffect(() => {
		setActive(`/${pathname.split('/')[1]}`);
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<AppBar
				elevation={0}
				sx={{
					position: 'sticky',
					top: 0,
					height: { xs: 64, md: 72 },
					zIndex: (theme) => theme.zIndex.drawer + 1,
					justifyContent: 'center',
					backgroundColor: '#FFFFFF',
					borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
					transition: 'all 0.2s ease-in-out',
				}}>
				<Toolbar
					className='flex justify-between'
					sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
					<Link href='/' className='flex items-center'>
						<Image
							src='/logo.png'
							alt='logo'
							width={isMobile ? 120 : 140}
							height={isMobile ? 38 : 45}
							priority
							style={{ objectFit: 'contain' }}
						/>
					</Link>

					{!isMobile && (
						<Box component='nav' sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
							{navItems.map(({ label, href }) => (
								<Link key={label} href={href} passHref>
									<Box
										component='span'
										sx={{
											display: 'flex',
											alignItems: 'center',
											px: 1.5,
											py: 1,
											fontSize: '14px',
											fontWeight: 500,
											color: active === href ? '#171717' : '#737373',
											backgroundColor: 'transparent',
											transition: 'color 0.2s ease-in-out',
											cursor: 'pointer',
											'&:hover': {
												color: '#171717',
											},
										}}>
										{label}
									</Box>
								</Link>
							))}
						</Box>
					)}

					{isMobile && (
						<IconButton
							onClick={() => setMobileOpen(true)}
							sx={{
								color: '#171717',
								p: 1,
							}}>
							<Menu sx={{ fontSize: 24 }} />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>

			{isMobile && (
				<Drawer
					anchor='right'
					open={mobileOpen}
					onClose={() => setMobileOpen(false)}
					slotProps={{
						paper: {
							sx: {
								width: 280,
								backgroundColor: '#FFFFFF',
								borderTopLeftRadius: 16,
								borderBottomLeftRadius: 16,
							},
						},
					}}>
					<Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
						<Typography sx={{ fontSize: 16, fontWeight: 600, color: '#171717' }}>Menu</Typography>
						<IconButton 
							onClick={() => setMobileOpen(false)}
							sx={{ color: '#171717' }}>
							<Close sx={{ fontSize: 20 }} />
						</IconButton>
					</Box>
					<List sx={{ px: 2, pt: 2 }}>
						{navItems.map(({ label, icon, href }) => (
							<Link key={label} href={href} passHref>
								<ListItem disablePadding sx={{ mb: 1 }}>
									<ListItemButton
										selected={href === active}
										onClick={() => setMobileOpen(false)}
										sx={{
											borderRadius: '8px',
											py: 1.5,
											backgroundColor: active === href ? '#fafafa' : 'transparent',
											color: active === href ? '#171717' : '#525252',
											'&:hover': {
												backgroundColor: '#f5f5f5',
											},
										}}>
										<ListItemIcon
											sx={{
												minWidth: 40,
												color: active === href ? '#171717' : '#a3a3a3',
											}}>
											{icon}
										</ListItemIcon>
										<ListItemText
											primary={label}
											primaryTypographyProps={{
												fontWeight: active === href ? 600 : 500,
												fontSize: 15,
											}}
										/>
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
