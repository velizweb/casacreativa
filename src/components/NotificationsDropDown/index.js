import React from 'react'
import { Icon } from 'semantic-ui-react'

function Index(props){


  return (
    <div style={{display : (props.visible) ? 'inline' : 'none'}} className={'sidebarContainer'}>
      {
        props.data.map((item, key)=>{

          return <div className='notificationItem'>
            <div className='notificationIcon'>
              <Icon name='bell'/>
            </div>
            <div className='notificationData'>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span>{item.created_at}</span>
              </div>
          </div>
        })
      }
      
    </div>
 
  )
}

export default Index
