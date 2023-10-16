import React from 'react'
import styles from './AvatarFollow.module.css'
import { useState } from 'react';
import '../App.css'

const AvatarFollow = ({userName,id}) => {
   
    const[isFollow,setIsFollow]=useState(false)
 
    /* Cambiar el texto con un renderizado condicional*/
    const text = isFollow ? "Siguiendo": "Seguir";

      /* Cambiar el estilo para ese boton */
 const btnFollowUser = isFollow ? 'btn-FollowUser isFollowing' : 'btn-FollowUser';
 

 const handlerClick = ()=>{
    setIsFollow(!isFollow) 
  }

  return (
    <article className={styles.followUser}>
    <div className={styles.infoFollowUser}>
            <img className={styles.avatarProfile} src={`https://robohash.org/${id}/`} alt="profile" />
            <strong className={styles.userName}>{userName}</strong>
          </div>
          <aside>
            <button className={btnFollowUser} onClick={handlerClick}>
            <span className='followCard-text'>{text}</span>
            <span className='followCard-stopFollow'>Dejar de seguir</span>
            </button>
          </aside>
      
    </article>
  )
}

export default AvatarFollow
