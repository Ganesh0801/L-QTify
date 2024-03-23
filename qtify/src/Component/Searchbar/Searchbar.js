import React from 'react';
import styles from "./Searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../asset/Search-icon.svg";

const Searchbar = ({placeholder}) => {
  return (
    <form className={styles.wrapper} >
      <input className={styles.search} required placeholder={placeholder}/>
          <button type="submit" className={styles.searchButton}>
            <SearchIcon 
            style={{width:'20px',height:'20px'}}/>
          </button>
    </form>
  )
}

export default Searchbar