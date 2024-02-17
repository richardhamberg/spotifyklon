
export const formatTime =(secounds) =>{
    const rest = (secounds % 60).toFixed(0);
    const min = Math.floor(secounds / 60); 
    const restSecounds = rest < 10 ? `0${rest}` : rest;

    return `${min}:${restSecounds}`
}