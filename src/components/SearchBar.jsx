import React, { useContext, useState } from 'react'
import styles from './SearchBar.module.css'
import { InstaContext } from '../context/InstaContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SearchBar = () => {

  const[user, setUser]=useState("");

  const{getUser}=useContext(InstaContext)
 
  const searchHandler =(e)=>{
    e.preventDefault();
    getUser(user);
    setUser("")
  }

  return (
    <form className={styles.containerSearchInput} onSubmit={searchHandler} >
      <input type="text" placeholder='🤖Buscador...' onChange={(e)=>setUser(e.target.value)} value={user} />
      <button className={styles.btnSearchBar}>Buscar</button>
      <ToastContainer/>
    </form>
  )
}

export default SearchBar
