import React, { useContext } from 'react';
import styles from './Profiles.module.css';
import Profile from './images/profile.svg';
import Avatar from './Avatar';
import { InstaContext } from '../context/InstaContext';

const Profiles = () => {
 
const{users}=useContext(InstaContext)

  return (
    <section className={styles.containerImages}>
      {users.map((user) => {
        return <Avatar id={user.id} key={user.userName} />;
      })}
    </section>
  );
};

export default Profiles;

{
  /*  <article><img className={styles.avatarProfile}  src={Profile} alt="profile" /></article>
    <article><img className={styles.avatarProfile} src={Profile} alt="profile" /></article>
    <article><img className={styles.avatarProfile} src={Profile} alt="profile" /></article> */
}
