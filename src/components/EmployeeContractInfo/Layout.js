import React from 'react';
import { withRouter } from 'react-router-dom'
import {Loader,Grid,Label } from 'semantic-ui-react'


import PersonalIfno from './PersonalIfno';
import ContactInfo from './ContactInfo';
import Documents from './Documents';

function Component(props) {   
      
    if(props.loading){
        return (<Loader active inline='centered' />)
    }

    const PersonalInfoConst = ()=>{
        return  <Grid.Column width={6}>
                    <PersonalIfno Employee={props.Employee}/>
                </Grid.Column>
    }

    const ContactInfoConst = ()=>{
        return  <Grid.Column width={5}>
                    <ContactInfo Employee={props.Employee} />
                </Grid.Column>
    }

    const DocumentsConst = ()=>{
        return  <Grid.Column width={5}>
                    <Documents Employee={props.Employee} />
                </Grid.Column>
    }



    return (

                <Grid columns='equal'>
                     <Grid.Column width={16} style={{marginTop:'1em'}}>


                            <Label attached='top' color='green' >Informacion del empleado</Label>

                            <Grid columns='equal' divided>
                                
                                {props.PersonalInfo  && <PersonalInfoConst/>}

                                {props.ContactInfo  && <ContactInfoConst/>}

                                {props.Documents  && <DocumentsConst/>}

                               
                            </Grid>



                    </Grid.Column>
                </Grid>
					
  );
}

export default withRouter(Component);