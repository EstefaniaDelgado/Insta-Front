import React, { createContext, useEffect, useState } from 'react';
import data from '../data/data';

export const InstaContext = createContext()


export function InstaContextProvider(props) {

    const [users, setUsers] = useState([]);
   
    
    const[findUser, setFindUser]=useState({});
  

    useEffect(() => {
        setUsers(data);
      }, []);

/* Looking for a user */
const getUser = (user) => {
  const foundUser = users.find((ele) => ele.userName.toLowerCase() === user.toLowerCase());
  if (foundUser) {
    setFindUser({
      id:foundUser.id,
      userName: foundUser.userName,
      nickName:foundUser.nickName,
      // Otras propiedades del usuario que desees incluir
    });
  }else{
    window.alert("Usuario no encontrado")
  }
};
      
  return (
    <InstaContext.Provider value={{
       users,
       getUser, 
       findUser
    }}>
        {props.children}
    </InstaContext.Provider>
  

  )
}
