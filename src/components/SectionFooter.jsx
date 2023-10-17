import React from 'react'
import styles from './SectionFooter.module.css'
import { Icon } from '@iconify/react';

const SectionFooter = () => {
  return (
    <footer className={styles.containerFooter}>
      <p >Todos los derechos reservados a Estefania Delgado H. <a href="https://github.com/EstefaniaDelgado/Insta-Front" target='_blank'><Icon icon="line-md:github-loop" style={{fontSize:'35px'}}  /></a></p>
    </footer>
  )
}

export default SectionFooter
