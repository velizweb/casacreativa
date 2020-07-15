import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import CompanyLearningItem from '../CompanyLearningItem/Component'

function CompanyLearningList(props) {

      return  <Grid>
                  { props.Data.map((item, key)=>{
                        return (
                        <Grid.Column width={props.itemWidth} key={key} onClick={()=>props.onItemClick(item)}>
                              <CompanyLearningItem data={item}  />
                        </Grid.Column>)
                  })}
      	</Grid>
}

export default withRouter(CompanyLearningList);