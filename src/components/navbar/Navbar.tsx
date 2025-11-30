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
					backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.7)',
					backdropFilter: 'blur(12px)',
					borderBottom: scrolled ? '1px solid rgba(79, 70, 229, 0.1)' : '1px solid rgba(226, 232, 240, 0.5)',
					boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.03)' : 'none',
					transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				}}>
				<Toolbar
					className='flex justify-between'
					sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3 } }}>
					<Link href='/' className='flex items-center'>
						<Image
							src='/logo.png'
							alt='logo'
							width={isMobile ? 140 : 170}
							height={isMobile ? 45 : 56}
							priority
							style={{ objectFit: 'contain' }}
						/>
					</Link>

					{!isMobile && (
						<Box component='nav' sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
							{navItems.map(({ label, href }) => (
								<Link key={label} href={href} passHref>
									<Box
										component='span'
										sx={{
											display: 'flex',
											alignItems: 'center',
											px: 2,
											py: 1,
											borderRadius: '10px',
											fontSize: '14px',
											fontWeight: 600,
											letterSpacing: '0.01em',
											color: active === href ? '#4F46E5' : '#64748B',
											backgroundColor: 'transparent',
											transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
											cursor: 'pointer',
											position: 'relative',
											'&::after': active === href ? {
												content: '""',
												position: 'absolute',
												bottom: 0,
												left: '20%',
												right: '20%',
												height: '2px',
												backgroundColor: '#4F46E5',
												borderRadius: '2px 2px 0 0',
											} : {},
											'&:hover': {
												backgroundColor: 'rgba(79, 70, 229, 0.05)',
												color: '#4F46E5',
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
								backgroundColor: 'rgba(79, 70, 229, 0.08)',
								borderRadius: '12px',
								p: 1.25,
								border: '1px solid rgba(79, 70, 229, 0.15)',
								transition: 'all 0.2s ease-in-out',
								'&:hover': { 
									backgroundColor: 'rgba(79, 70, 229, 0.15)',
									borderColor: 'rgba(79, 70, 229, 0.3)',
								},
							}}>
							<Menu sx={{ color: '#4F46E5', fontSize: 22 }} />
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
								borderTopLeftRadius: 24,
								borderBottomLeftRadius: 24,
								boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.08)',
							},
						},
					}}>
					<Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E2E8F0' }}>
						<Typography sx={{ fontSize: 16, fontWeight: 700, color: '#1E293B' }}>Menu</Typography>
						<IconButton 
							onClick={() => setMobileOpen(false)}
							sx={{
								backgroundColor: 'rgba(79, 70, 229, 0.08)',
								'&:hover': { backgroundColor: 'rgba(79, 70, 229, 0.15)' }
							}}>
							<Close sx={{ fontSize: 20, color: '#4F46E5' }} />
						</IconButton>
					</Box>
					<List sx={{ px: 2, pt: 2 }}>
						{navItems.map(({ label, icon, href }) => (
							<Link key={label} href={href} passHref>
								<ListItem disablePadding sx={{ mb: 1.5 }}>
									<ListItemButton
										selected={href === active}
										onClick={() => setMobileOpen(false)}
										sx={{
											borderRadius: '14px',
											py: 1.75,
											backgroundColor: active === href ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
											border: active === href ? '1px solid rgba(79, 70, 229, 0.2)' : '1px solid transparent',
											color: active === href ? '#4F46E5' : '#475569',
											transition: 'all 0.2s ease-in-out',
											'&:hover': {
												backgroundColor: active === href ? 'rgba(79, 70, 229, 0.15)' : 'rgba(79, 70, 229, 0.05)',
												borderColor: active === href ? 'rgba(79, 70, 229, 0.3)' : 'rgba(79, 70, 229, 0.1)',
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
												fontWeight: active === href ? 700 : 600,
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
