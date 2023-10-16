import React, { useContext } from 'react'
import Perfil from "./images/profile.svg"
import styles from "./Header.module.css"
import SearchBar from './SearchBar'
import { InstaContext } from '../context/InstaContext'


const Header = () => {

  const{findUser}=useContext(InstaContext) 
  console.log(findUser)

  return (
    <header className={styles.containerHeader}>
      <p>InstaFront</p>
   <SearchBar/>
   {
    Object.keys(findUser).length === 0 ?  <div>
    <img className={styles.avatarProfile} src={Perfil} alt="Profile" />
    </div>:
     <div>
     <img className={styles.avatarProfile} src={`https://robohash.org/${findUser.id}`} alt="Profile" />
     </div>
   }
     
    </header>
  )
}

export default Header
