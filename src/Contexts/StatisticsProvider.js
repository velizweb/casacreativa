import React, { useState } from 'react'
import StatisticsContext from './StatisticsContext'


const StatisticsProvider = ({ children }) => {
  


  const [StatisticsDetail, setStatisticsDetail] = useState({
		livejasmin : {
      total : 0,
      detail : []
    },
		chaturbate : {
      total : 0,
      detail : []
    },
	})

  const obj = {
    ...StatisticsDetail,
    setStatisticsDetail
    
  }
  

  return (
    <StatisticsContext.Provider value={obj}>
      {children}
    </StatisticsContext.Provider>
  )
}

export default StatisticsProvider
