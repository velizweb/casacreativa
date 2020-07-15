import React from 'react'
import { withRouter } from 'react-router-dom'

function CompanyLearningVideoPlayer(props) {
 
      return <video src={props.src} controls={true} style={{width:'100%',height:'400px'}}></video>
}



export default withRouter(CompanyLearningVideoPlayer);
