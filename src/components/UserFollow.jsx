import React, { useContext, useState } from 'react';
import styles from './UserFollow.module.css';
import ContainerPerfil from './images/ContainerPerfil.png';
import Perfil from './images/profile.svg';
import { InstaContext } from '../context/InstaContext';
import AvatarFollow from './AvatarFollow';
import '../App.css'

const UserFollow = () => {

  const[isFollow, setIsFollow]=useState(false)

  const { findUser, users } = useContext(InstaContext);


  const btnFollowUser = isFollow ? 'btn-FollowUser isFollowing' : 'btn-FollowUser';

  const handlerClick = ()=>{
    setIsFollow(!isFollow) 
  }

  return (
    <section className={styles.containerFollowCard}>
        {/* Current account */}
      {Object.keys(findUser).length === 0 ? (
        <article className={styles.currentUser}>
          <div className={styles.containerInfoUser}>
            <img className={styles.avatarProfile} src={Perfil} alt="profile" />
            <div className={styles.infoUser}>
              <span>
                <strong>Abril.gonzalez23</strong>
              </span>
              <p>ABRIL👻</p>
            </div>
          </div>
          <aside>
            <button className={styles.btnCurrentUser}>Cambiar</button>
          </aside>
        </article>
      ) : (
        <article className={styles.currentUser}>
          <div className={styles.containerInfoUser}>
            <img className={styles.avatarProfile} src={`https://robohash.org/${findUser.id}`} alt="profile" />
            <div className={styles.infoUser}>
              <span>
                <strong>{findUser.userName}</strong>
              </span>
              <p>{findUser.nickName}</p>
            </div>
          </div>
          <aside>
            <button className={styles.btnCurrentUser}>Cambiar</button>
          </aside>
        </article>
      )}
      
      {/* Other profiles to follow*/}
      <article className={styles.othersUsers}>
        <h4>Sugerencias de busqueda</h4>
       {/*  <article className={styles.followUser}>
          <div className={styles.infoFollowUser}>
            <img className={styles.avatarProfile} src={ContainerPerfil} alt="profile" />
            <strong className={styles.userName}>Abril Gonzales</strong>
          </div>
          <aside>
            <button className={btnFollowUser} onClick={handlerClick}>Seguir</button>
          </aside>
        </article> */}
        <>
           {
            users.map(user=>{
                return(
                    <AvatarFollow
                    userName={user.userName}
                    nickName={user.nickName}
                    id={user.id}
                    key={user.id}
                    />
                )
            })
           }
       
        </>
      </article>
    </section>
  );
};

export default UserFollow;
