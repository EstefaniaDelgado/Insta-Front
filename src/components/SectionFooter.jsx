import React from 'react'
import styles from './SectionFooter.module.css'
import { Icon } from '@iconify/react';

const SectionFooter = () => {
  return (
    <footer className={styles.containerFooter}>
      <p >Todos los derechos reservados a Estefania Delgado H.</p>
      <a className={styles.linkGitHub} href="https://github.com/EstefaniaDelgado/Insta-Front" target='_blank'> <Icon icon="line-md:github-loop"/></a>
    </footer>
  )
}

export default SectionFooter
