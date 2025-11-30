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
					height: { xs: 70, md: 80 },
					zIndex: (theme) => theme.zIndex.drawer + 1,
					justifyContent: 'center',
					backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
					backdropFilter: scrolled ? 'blur(10px)' : 'none',
					borderBottom: scrolled ? '1px solid #E2E8F0' : 'none',
					transition: 'all 0.3s ease-in-out',
				}}>
				<Toolbar
					className='flex justify-between'
					sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
					<Link href='/' className='flex items-center'>
						<Image
							src='/logo.png'
							alt='logo'
							width={isMobile ? 140 : 180}
							height={isMobile ? 45 : 60}
							priority
							style={{ objectFit: 'contain' }}
						/>
					</Link>

					{!isMobile && (
						<Box component='nav' sx={{ display: 'flex', gap: 1 }}>
							{navItems.map(({ label, href }) => (
								<Link key={label} href={href} passHref>
									<Box
										component='span'
										sx={{
											display: 'flex',
											alignItems: 'center',
											px: 2.5,
											py: 1.25,
											borderRadius: '8px',
											fontSize: '15px',
											fontWeight: 500,
											color: active === href ? '#FFFFFF' : '#475569',
											backgroundColor: active === href ? '#4F46E5' : 'transparent',
											transition: 'all 0.2s ease-in-out',
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: active === href ? '#4338CA' : '#F1F5F9',
												color: active === href ? '#FFFFFF' : '#4F46E5',
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
								backgroundColor: '#F1F5F9',
								borderRadius: '10px',
								p: 1.25,
								'&:hover': { backgroundColor: '#E2E8F0' },
							}}>
							<Menu sx={{ color: '#475569' }} />
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
								borderTopLeftRadius: 20,
								borderBottomLeftRadius: 20,
							},
						},
					}}>
					<Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
						<IconButton onClick={() => setMobileOpen(false)}>
							<Close />
						</IconButton>
					</Box>
					<List sx={{ px: 2 }}>
						{navItems.map(({ label, icon, href }) => (
							<Link key={label} href={href} passHref>
								<ListItem disablePadding sx={{ mb: 1 }}>
									<ListItemButton
										selected={href === active}
										onClick={() => setMobileOpen(false)}
										sx={{
											borderRadius: '12px',
											py: 1.5,
											backgroundColor: active === href ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
											color: active === href ? '#4F46E5' : '#475569',
											'&:hover': {
												backgroundColor: active === href ? 'rgba(79, 70, 229, 0.15)' : '#F1F5F9',
											},
										}}>
										<ListItemIcon
											sx={{
												minWidth: 40,
												color: active === href ? '#4F46E5' : '#64748B',
											}}>
											{icon}
										</ListItemIcon>
										<ListItemText
											primary={label}
											primaryTypographyProps={{
												fontWeight: active === href ? 600 : 500,
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
