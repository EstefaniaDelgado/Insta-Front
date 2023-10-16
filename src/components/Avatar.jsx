import React from 'react'
import styles from "./Avatar.module.css"

const Avatar = ({id}) => {
   
  return (
    <article>
      <img className={styles.avatarProfile} src={`https://robohash.org/${id}`} alt="profile" />
    </article>
  )
}

export default Avatar
