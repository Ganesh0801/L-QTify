import axios from "axios";

 const BACKEND_END =  "https://qtify-backend-labs.crio.do";


 const fetchTopAlbum = async ()=>{
    try{
        const res = await axios.get(`${BACKEND_END}/albums/top`);
        console.log(res.data)
        return res.data;
    }catch(err){
        console.log(err)
    }
}

 const fetchNewAlbum = async () => {
    try {
      const res = await axios.get(`${BACKEND_END}/albums/new`);
      return res.data;
    }catch (err) {
      console.log(err);
    }
  };

   const fetchSong = async () => {
    try {
      const res = await axios.get(`${BACKEND_END}/songs`);
      return res.data;
    }catch (err) {
      console.log(err);
    }
  };


  const fetchGenre = async () => {
    try {
      const res = await axios.get(`${BACKEND_END}/genres`);
      const response =  res.data.data;
      console.log(response);
      return response
    }catch (err) {
      console.log(err);
    }
  };


  export {
    BACKEND_END,
    fetchTopAlbum ,
    fetchNewAlbum,
    fetchSong,
    fetchGenre
  } 