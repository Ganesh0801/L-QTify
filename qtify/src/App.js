// import { useEffect, useState }  from 'react';
// import Navbar from "./Component/Navbar/Navbar";
// import HeroSection from './Component/Hero/HeroSection';
// import "./App.css";
// import {
//         fetchTopAlbum,
//         fetchNewAlbum,
//         fetchSong,
//         fetchGenre,
// } from "./Component/api/api";
// import Section from "./Component/Section/Section";

// const App = () => {

//   const [topAlbumsData, setTopAlbumsData] = useState([]);
//   const [newAlbumsData, setNewAlbumsData] = useState([]);
//   const [songData, setSongData] = useState([]);
//   const [genresData, setGenresData] = useState([]);

//   useEffect(() => {
//     generateData();
//   }, []);




//   const generateData = async () => {
//     try {
//       const TopData = await fetchTopAlbum();
//       const NewData = await fetchNewAlbum();
//       const SongData = await fetchSong();
//       const GenresData = await fetchGenre();
  
//       const newGenre = { key: "all", label: "All" };
//         setTopAlbumsData(TopData);
//         setNewAlbumsData(NewData);
//         setSongData(SongData);
//         setGenresData([newGenre, ...GenresData]);
//     } catch (error) {
//       console.error("Error while fetching data:", error);
//     }
//   };
  


//   return (
//    <>
//       <Navbar/>
//       <HeroSection 
//             heading1="100 Thousand Songs, ad-free"
//             heading2="Over thousands podcast episodes"
//       />

//       <div>
//         <Section newData={topAlbumsData} type="album" title="Top Albums" />
//         <Section newData={newAlbumsData} type="album" title="New Albums" />
//         <Section
//           newData={songData}
//           type="song"
//           title="Songs"
//           genres={genresData}
//         />
//       </div>
//    </>
//   )
// }

// export default App;


import React, { useEffect, useState } from 'react';
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from './Component/Hero/HeroSection';
import "./App.css";
import {
        fetchTopAlbum,
        fetchNewAlbum,
        fetchSong,
        fetchGenre,
} from "./Component/api/api";
import Section from "./Component/Section/Section";

const App = () => {

  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    generateData();
  }, []);

  const generateData = async () => {
    try {
      const TopData = await fetchTopAlbum();
      const NewData = await fetchNewAlbum();
      const SongData = await fetchSong();
      const GenresData = await fetchGenre();
  
      const newGenre = { key: "all", label: "All" };
        setTopAlbumsData(TopData);
        setNewAlbumsData(NewData);
        setSongData(SongData);
        setGenresData([newGenre, ...GenresData]);
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };
  
  return (
    <>
      <Navbar/>
      <HeroSection 
            heading1="100 Thousand Songs, ad-free"
            heading2="Over thousands podcast episodes"
      />

      <div>
        <Section newData={topAlbumsData} type="album" title="Top Albums" />
        <Section newData={newAlbumsData} type="album" title="New Albums" />
        <Section
          newData={songData}
          type="song"
          title="Songs"
          genres={genresData}
        />
      </div>
    </>
  )
}

export default App;
