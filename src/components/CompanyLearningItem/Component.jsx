
import React from 'react';
import { Icon, Segment } from 'semantic-ui-react'
require ('./style.css')

function Index(props) {

      return  <Segment className={'videoListItemWrapper'}>
                  <div className={'videoListItemTitleWrapper'}>
                        <h3 className={'videoListItemTitle'}>{props.data.title}</h3>
                  </div>
                  <div className={'videoListItemDescriptionWrapper'}>
                        <p className={'videoListItemDescription'}>{props.data.description}</p>
                  </div>
                  <div className={'videoThumbWrapper'}>
                        <span className={'videoThumbIcon'} > 
                              <Icon name='play'/> Play video
                        </span>
                  </div>
                  
            </Segment>
}

export default Index;
