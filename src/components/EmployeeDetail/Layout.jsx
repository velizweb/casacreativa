import React from 'react';
import { withRouter } from 'react-router-dom'
import {Loader,Grid } from 'semantic-ui-react'
import UserProfileCard from '../UserProfileCard/Index'
import EmployeeContratctInfo from '../EmployeeContractInfo/Layout'


function Layout(props) {

      
    if(props.loading){
        return (<Loader active inline='centered' />)
    }


    return (

                <Grid>
                    <Grid.Row>

                    <Grid.Column width={4}>
                        <UserProfileCard Employee={props.Employee}/>
                    </Grid.Column>
                     <Grid.Column width={12}>
                        <EmployeeContratctInfo
                            Employee={props.Employee}
                            PersonalInfo={true}
                            ContactInfo={true}
                            Documents={true}
                            />
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
					
  );
}

export default withRouter(Layout);