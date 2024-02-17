export const getAccessTokenFromStorage =()=>{
    const token = sessionStorage.getItem('spotifyToken');
    if(token !== ''){
        return token;
    } else{
        return false;
    }
}