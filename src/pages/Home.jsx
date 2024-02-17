import { Box, Button, Typography, List } from '@mui/material';

const Home = ({}) => {
	return (
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 5
			}}
		>
			<Typography sx={{ color: 'text.primary', fontSize: { xs: 25, md: 38 } }}>Välkommen till min Spotify-klon!</Typography>
			<Typography pt={3} px={10} sx={{ color: 'text.primary', fontSize: { xs: 20, md: 23 }}}>
				Du behöver transfera din enhet till "HambPlayer" i din vanliga Spotify app för att det ska funka.
			</Typography>
			<Typography px={10} sx={{ color: 'text.primary', fontSize: { xs: 20, md: 23 }, text:'center' }}>
				Starta en låt och pausa sen ska denna sida funka.
			</Typography>
			<Button size="large" variant="contained" href="spotify:">
				Öppna Spotify
			</Button>
		</Box>
	);
};
export default Home;
