'use client';
import ContactForm from '@/components/contact/ContactForm';
import Card from '@/components/shared/Card';
import Title from '@/components/shared/Title';
import { Phone, Email, Link } from '@mui/icons-material';
import { Box, Divider, Fade, Stack, TextField, Typography } from '@mui/material';

const handleLinkClick = (link: string) => {
  window.open(link, '_blank');
};

const contactDetails = [
  {
    title: 'Phone',
    description: (
      <Typography
        onClick={() => handleLinkClick('tel:03006511173')}
        sx={{
          cursor: 'pointer',
          ':hover': { textDecoration: 'underline' },
        }}
      >
        03006511173
      </Typography>
    ),
    color: '#FF6F61',
    icon: <Phone />,
  },
  {
    title: 'Email',
    description: (
      <>
        <Typography
          onClick={() => handleLinkClick('mailto:contact@muhammadnaeem.me')}
          sx={{
            cursor: 'pointer',
            ':hover': { textDecoration: 'underline' },
          }}
        >
          contact@muhammadnaeem.me
        </Typography>
        <Typography
          onClick={() => handleLinkClick('mailto:ceinfo.pk@gmail.com')}
          sx={{
            cursor: 'pointer',
            ':hover': { textDecoration: 'underline' },
          }}
        >
          ceinfo.pk@gmail.com
        </Typography>
      </>
    ),
    color: '#FFD166',
    icon: <Email />,
  },
  {
    title: 'Profile',
    description: (
      <>
        <Typography
          onClick={() => handleLinkClick('https://www.linkedin.com/in/im-naeem/')}
          sx={{
            cursor: 'pointer',
            ':hover': { textDecoration: 'underline' },
          }}
        >
          LinkedIn
        </Typography>
        <Typography
          onClick={() => handleLinkClick('https://github.com/imnaeem/')}
          sx={{
            cursor: 'pointer',
            ':hover': { textDecoration: 'underline' },
          }}
        >
          Github
        </Typography>
      </>
    ),
    color: '#FFD166',
    icon: <Link />,
  },
];

const Contact = () => {
  return (
    <Fade in timeout={500}>
      <div>
        <Title title='Contact Me' />
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          alignItems='center'
          mb={4}
          py={5}
        >
          <Stack spacing={4} flex={1}>
            {contactDetails.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </Stack>

          <Divider orientation='horizontal' flexItem sx={{ display: { xs: 'block', md: 'none' } }} />

          <Stack spacing={2} flex={2} width='100%'>
            <Box>
              <Typography variant='body1' fontSize={25}>
                I'm always open to discussing product
              </Typography>
              <Typography fontSize={25} fontWeight={600}>
                design work or partnerships
              </Typography>
            </Box>
            <ContactForm />
          </Stack>
        </Stack>
      </div>
    </Fade>
  );
};

export default Contact;
