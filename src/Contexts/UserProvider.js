import React, { useState } from 'react'
import merge from 'lodash.merge'
import UserContext from './UserContext'
import SessionProvider from '../components/SessionProvider/Component'



const UserProvider = ({ children }) => {
  
  

  const setUserDetails = ({
    id,
    first_name,
    last_name,
    full_name,
    access_token,
    user_type,
  }) => {
    updateUserDetails(prevState => {
      const newState = { ...prevState }
      return merge(newState, {
        id,
        first_name,
        last_name,
        full_name,
        access_token,
        user_type,

      })
    })
  }

  const [userDetails, updateUserDetails] = useState({
    id: '',
    first_name: '',
    last_name: '',
    full_name: '',
    access_token : '',
    user_type : '',
    setUserDetails
  })

    

  return (
    <UserContext.Provider value={userDetails}>
      <SessionProvider />
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
