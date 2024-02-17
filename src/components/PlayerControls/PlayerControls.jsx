import { Stack, Typography, Slider, Box, IconButton } from '@mui/material';
import { formatTime } from '../../utils/formatTime';
import { PlayArrow, SkipNext, SkipPrevious, Pause } from '@mui/icons-material';
import { useEffect, useState } from 'react';


const PlayerControls = ({player ,is_paused , progress , duration }) => {
	const [currentProgress, setCurrentProgress] = useState(progress);
	const skipStyle = { width: 28, height: 28 };
	const playStyle = { width: 38, height: 38 };

	useEffect(()=>{
		const intervalID = setInterval(() => {
			if(!is_paused && player){
				setCurrentProgress((prevState)=> prevState + 1);
			}
		}, 1000);
		return () => clearInterval(intervalID);
	},[is_paused, player])

	useEffect(()=>{
		setCurrentProgress(progress);
	},[progress])

	console.log(player);
	const handlePlayPause = () => {
        player.togglePlay();
    };

    const handlePreviousTrack = () => {
        player.previousTrack();
    };

    const handleNextTrack = () => {
        player.nextTrack();
    };

    const handleSliderChange = (event, newValue) => {
        player.seek(newValue * 1000);
        setCurrentProgress(newValue);
    };

    const handleOnChange = (_, value) => {
        setCurrentProgress(value);
    };

    return (
        <Stack direction={'column'} spacing={2} justify="center" alignItems="center" sx={{ width: '100%' }}>
            <Stack spacing={1} direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
                <IconButton
                    size="small"
                    sx={{ color: 'text.primary' }}
                    onClick={handlePreviousTrack}
                >
                    <SkipPrevious sx={skipStyle} />
                </IconButton>
                <IconButton 
                    size="small" 
                    sx={{ color: 'text.primary' }}
                    onClick={handlePlayPause}
                >
                    {is_paused ? <PlayArrow sx={playStyle} /> : <Pause sx={playStyle} />}
                </IconButton>
                <IconButton 
                    size="small" 
                    sx={{ color: 'text.primary' }}
                    onClick={handleNextTrack}
                >
                    <SkipNext sx={skipStyle} />
                </IconButton>
            </Stack>
            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ width: '75%' }}>
                <Typography variant='body1' sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(currentProgress)}</Typography>
                <Slider 
                    max={duration} 
                    value={currentProgress}
                    min={0} 
                    size="medium" 
                    onChange={handleOnChange}
                    onChangeCommitted={handleSliderChange}
                />
                <Typography variant='body1' sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(duration)}</Typography>
            </Stack>
        </Stack>
    );
};

export default PlayerControls;
