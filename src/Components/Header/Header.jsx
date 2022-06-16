import React from 'react';
import '../Header/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (

    <div className='header-wrap'>

    <div className='header-content'>
       
        <h1>CryptoSeeker</h1>  
     <FontAwesomeIcon icon = { faMagnifyingGlass } size='sm' className='searchIcon'> </FontAwesomeIcon>
    </div>

    </div>

  )
}

export default Header;