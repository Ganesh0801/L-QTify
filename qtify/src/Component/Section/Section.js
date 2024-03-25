import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const Section = ({ title, newData, type, genres }) => {
  
  const [carouselToggle, setCauroselToggle] = useState(true);
  const [filteredSongsData, setFilteredSongsData] = useState([]);
  const [isSelect, setIsSelect] = useState("all");

  useEffect(() => {
    handlefilterSongs();
  }, [newData, isSelect]); 

  const handleToggle = () => {
    setCauroselToggle(!carouselToggle);
  };

  const handlefilterSongs = () => {
    if (type === "song") {
      if (isSelect === "all") {
        setFilteredSongsData(newData);
      } else {
        const filteredData = newData.filter(
          (item) => item.genre.key === isSelect
        );
        setFilteredSongsData(filteredData);
      }
    } else {
      setFilteredSongsData(newData);
    }
  };

  const selectGenre = (key) => {
    setIsSelect(key);
    handlefilterSongs();
  };

  return (
    <div className={`${type === "song" ? styles.songsBorder : ""}`}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type === "song" ? null : (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggle ? "Collapse" : "Show All"}
          </h4>
        )}
      </div>
      {type === "song" ? (
        <div className={styles.genres}>
          {genres.map((genre) => (
            <div className={styles.genreNameSection} key={genre.key}>
              <h5
                className={`${styles.genreName} ${
                  isSelect === genre.key ? styles.selectedGenre : ""
                }`}
                onClick={() => selectGenre(genre.key)}
              >
                {genre.label}
              </h5>
            </div>
          ))}
        </div>
      ) : null}

      {filteredSongsData.length === 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <CircularProgress />
        </div>
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {filteredSongsData.map((item, idx) => (
                <Card key={idx} data={item} type={type} genres={genres} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredSongsData}
              renderedComponent={(filteredSongsData) => (
                <Card 
                  key={filteredSongsData.id}
                  data={filteredSongsData}
                  type={type}
                  genres={genres}
                />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;

