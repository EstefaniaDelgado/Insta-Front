import React, { useContext } from 'react';
import Profile from './images/profile.svg';
import styles from './InstaCard.module.css';
import { Icon } from '@iconify/react';
import mainImage from "./images/main-image.svg"
import { InstaContext } from '../context/InstaContext';

const InstaCard = () => {

const{findUser}=useContext(InstaContext);


  return (
    <>
    {
      Object.keys(findUser).length === 0 ? 
      <section className={styles.containerCard}>
      {/* Encabezado card */}
      <article className={styles.titleCard}>
        <div className={styles.containerTitle}>
          <img className={styles.avatarProfile} src={Profile} alt="profile" />
          <span className={styles.userName}>Abril González</span>
        </div>
        <div>
        <Icon icon="bi:three-dots" />
        </div>
      </article>
      {/* Main Image */}
      <article className={styles.containerMainImage}>
        <img src={mainImage} alt="main image" />
      </article>
      {/* Info card */}
      <article className={styles.containerInfoCard}>
        <div className={styles.containerIcons}>
        <Icon icon="ph:heart" />
        <Icon icon="simple-line-icons:bubble" />
        <Icon icon="tabler:send" />
        <Icon icon="la:smile-solid" />
        </div>
        <div className={styles.infoCard}>
          <p>Les gusta a lulipringless y otras personas</p>
          <p className={styles.commentsCard}>Ver los 3,672 comentarios</p>
          <p><strong>Gabriela Mancini</strong> Hola! que placer verte en frontend!!</p>
          <p><strong>Jonathan Gonzalez</strong> Te estabamos esperando!! Vamooh!</p>
        </div>
      </article>

    </section>
     :
     <section className={styles.containerCard}>
      {/* Encabezado card */}
      <article className={styles.titleCard}>
        <div className={styles.containerTitle}>
          <img className={styles.avatarProfile} src={`https://robohash.org/${findUser.id}`} alt="profile" />
          <span className={styles.userName}>{findUser.userName}</span>
        </div>
        <div>
        <Icon icon="bi:three-dots" />
        </div>
      </article>
      {/* Main Image */}
      <article className={styles.containerMainImage}>
        <img src={`https://robohash.org/${findUser.id}/?bgset=bg1`} alt="main image" />
      </article>
      {/* Info card */}
      <article className={styles.containerInfoCard}>
        <div className={styles.containerIcons}>
        <Icon icon="ph:heart" />
        <Icon icon="simple-line-icons:bubble" />
        <Icon icon="tabler:send" />
        <Icon icon="la:smile-solid" />
        </div>
        <div className={styles.infoCard}>
          <p>Les gusta a lulipringless y otras personas</p>
          <p className={styles.commentsCard}>Ver los 3,672 comentarios</p>
          <p><strong>Gabriela Mancini</strong> Hola! que placer verte en frontend!!</p>
          <p><strong>Jonathan Gonzalez</strong> Te estabamos esperando!! Vamooh!</p>
        </div>
      </article>

    </section>     
    }
    </>
  );
};

export default InstaCard;


{/* <section className={styles.containerCard}>

<article className={styles.titleCard}>
  <div className={styles.containerTitle}>
    <img className={styles.avatarProfile} src={Profile} alt="profile" />
    <span className={styles.userName}>Abril González</span>
  </div>
  <div>
  <Icon icon="bi:three-dots" />
  </div>
</article>

<article className={styles.containerMainImage}>
  <img src={mainImage} alt="main image" />
</article>

<article className={styles.containerInfoCard}>
  <div className={styles.containerIcons}>
  <Icon icon="ph:heart" />
  <Icon icon="simple-line-icons:bubble" />
  <Icon icon="tabler:send" />
  <Icon icon="la:smile-solid" />
  </div>
  <div className={styles.infoCard}>
    <p>Les gusta a lulipringless y otras personas</p>
    <p className={styles.commentsCard}>Ver los 3,672 comentarios</p>
    <p><strong>Gabriela Mancini</strong> Hola! que placer verte en frontend!!</p>
    <p><strong>Jonathan Gonzalez</strong> Te estabamos esperando!! Vamooh!</p>
  </div>
</article>

</section> */}