import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import NavItem from '../NavItem/NavItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NavPlaylist from '../NavPlaylist/NavPlaylist';

const SideNav = ({ spotifyApi, token }) => {
	const [loading, setLoading] = useState(true);
	const [albumList, setAlbumList] = useState(null);

	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;

			const data = await spotifyApi.getUserPlaylists();
			console.log(data.body);
			setAlbumList(data.body.items);
			setLoading(false);
		}
		getPlaylists();
	}, []);

	const renderPlaylist = () => {
		if (loading) {
			return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, id) => {
				return <NavPlaylist key={id} loading={loading} />;
			});
		}
		return albumList.map((playlist, id) => {
			return <NavPlaylist key={id} id={playlist.id} loading={loading} name={playlist.name} />;
		});
	};

	return (
		<Box
			sx={{
				backgroundColor: 'background.default',
				width: '230px',
				height: '100%',
				display: {xs: 'none' , md:'flex' },
				flexDirection: 'column'
			}}
		>
			<Box p={3}>
				<img src="/public/Spotify_Logo.png" alt="Spotify logo" width={'75%'} />
			</Box>
			<NavItem name="Home" Icon={HomeRoundedIcon} target="/" />
			<Box px={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			<Box sx={{ overflowY: 'auto', flex: 1 }}>
				{renderPlaylist()}
			</Box>
		</Box>
	);
};
export default SideNav;
