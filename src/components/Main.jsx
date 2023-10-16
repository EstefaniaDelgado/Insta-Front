import React from 'react'
import ContainerPerfil from "./images/ContainerPerfil.png"
import styles from "./Main.module.css"
import Profiles from './Profiles'
import InstaCard from './InstaCard'
import InstaFollowCard from './InstaFollowCard'

const Main = () => {
  

  return (
    <main className={styles.mainContainer} >
      <Profiles/>
      <InstaCard />
      <InstaFollowCard/>
      
    </main>
  )
}

export default Main
