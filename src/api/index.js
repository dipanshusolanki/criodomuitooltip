const fetchSongs = async () => {
    const response = await fetch("https://qtify-backend-labs.crio.do/albums/top");
    const data = await response.json();
    return data;    
}

export default fetchSongs;