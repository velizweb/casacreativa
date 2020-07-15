import React, { useState } from 'react'
import PaysheetContext from './PaySheetContext'


const PaySheetProvider = ({ children }) => {
  


  const [PaySheetDetails, setPaySheetDetails] = useState({
		shoppingRecords : [],
		penalties : [],
		requests : []
	})

  const obj = {
    ...PaySheetDetails,
    setPaySheetDetails
    
  }
  

  return (
    <PaysheetContext.Provider value={obj}>
      {children}
    </PaysheetContext.Provider>
  )
}

export default PaySheetProvider
