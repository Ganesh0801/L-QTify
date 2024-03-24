import React from 'react';
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({data,type}) => {
  
    const getCard = (type) => {
        switch (type) {
          case "album": {
            const { image, follows, title, songs } = data;
            return (
              <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                <div className={styles.wrapper}>
                  <div className={styles.card}>
                    <img src={image} alt="album" />
                    <div className={styles.banner}>
                      <Chip
                        label={`${follows} Follows`}
                        size="small"
                        className={styles.chip}
                      ></Chip>
                    </div>
                  </div>
                  <div className={styles.titleWrappers}>
                    <p>{title}</p>
                  </div>
                </div>
              </Tooltip>
            );
          }
          case "song": {
            const { image, likes, title, durationInMs } = data;
            return (
              <Tooltip title={`${durationInMs} Seconds`} placement="top" arrow>
                <div className={styles.wrapper}>
                  <div className={styles.card}>
                    <img src={image} alt="album" />
                    <div className={styles.banner}>
                      <Chip
                        label={`${likes} Likes`}
                        size="small"
                        className={styles.chip}
                      ></Chip>
                    </div>
                  </div>
                  <div className={styles.titleWrappers}>
                    <p>{title}</p>
                  </div>
                </div>
              </Tooltip>
            );
          }
          default:
            return <></>;
        }
      };
    
      return getCard(type);
  
}

export default Card