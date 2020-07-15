import React, { useState } from 'react'
import UserRolsContext from './UserRolsContext'

const UserRolsProvider = ({ children }) => {
  const [UserRolsDetail, setUserRols] = useState([])

  const obj = {
    UserRolsDetail,
    setUserRols
    
  }
  

  return (
    <UserRolsContext.Provider value={obj}>
      {children}
    </UserRolsContext.Provider>
  )
}

export default UserRolsProvider