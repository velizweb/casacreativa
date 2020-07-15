import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import {Step, Form,Button,Loader,Grid,Segment,Label,Icon } from 'semantic-ui-react'

import StepWizard from 'react-step-wizard';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step1Preview from './Step1_preview';
import Step2Preview from './Step2_preview';
import Step3Preview from './Step3_preview';

function Layout(props) {


    const [CurrentStep, setCurrentStep] = useState(1);

      
      function incremetStepHeader(){
        setCurrentStep( CurrentStep + 1 )
      }

      function decremetStepHeader(){
        setCurrentStep( CurrentStep - 1 )
      }
    



    if(props.loading){
        return (<Loader active inline='centered' />)
    }


    return (
        <div>

                    
        
            
            <Form size={'small'} onSubmit={props.handleSubmit}>


                <Grid.Column columns='equal' className='mb-3'>
                        
                    <Step.Group ordered>
                    
                    <Step 
                    completed={(CurrentStep > 1) ? true : false }
                    active={(CurrentStep === 1) ? true : false }
                    size={'mini'}
                    >
                        <Step.Content >
                            <Step.Title>Informacion personal</Step.Title>
                            {/* <Step.Description>Your employee personal information</Step.Description> */}
                        </Step.Content>
                    </Step>

                    <Step 
                    completed={(CurrentStep > 2) ? true : false }
                    active={(CurrentStep === 2) ? true : false }
                    >
                    <Step.Content>
                        <Step.Title>Informacion de contacto</Step.Title>
                        {/* <Step.Description>Informacion de contacto</Step.Description> */}
                    </Step.Content>
                    </Step>

                    <Step
                        active={(CurrentStep === 3) ? true : false }
                    >
                    <Step.Content>
                        <Step.Title>Documentos y fotos</Step.Title>
                    </Step.Content>
                    </Step>
                </Step.Group>
                <br />
                
                    </Grid.Column>

                <Grid columns='equal'>

                    <Grid.Column width={6} >
                        <StepWizard initialStep={1} isLazyMount={true}>
                            
                            <Step1 
                                Employee={props.Employee}
                                handleChange={props.handleChange}
                                incremetStepHeader={incremetStepHeader}
                            />

                            <Step2
                                Employee={props.Employee}
                                handleChange={props.handleChange}
                                incremetStepHeader={incremetStepHeader}
                                decremetStepHeader={decremetStepHeader}
                            />

                            <Step3
                                Employee={props.Employee}
                                handleChange={props.handleChange}
                                decremetStepHeader={decremetStepHeader}
                                
                                FrondIdCard = {props.FrondIdCard}
                                setFrontIdCard = {props.setFrontIdCard}
                                ReverseIdCard = {props.ReverseIdCard}
                                setReverseIdCard = {props.setReverseIdCard}
                                OnHandIdCard = {props.OnHandIdCard}
                                setOnHandIdCard = {props.setOnHandIdCard}
                                FrontReverseIdCard = {props.FrontReverseIdCard}
                                setFrontReverseIdCard = {props.setFrontReverseIdCard}
                                AvatarImage = {props.AvatarImage}
                                setAvatarImage = {props.setAvatarImage}
                                OtherDocuments = {props.OtherDocuments}
                                setOtherDocuments = {props.setOtherDocuments}
                            />

                        </StepWizard>
                    </Grid.Column>

                    

                    
                     <Grid.Column>
                               
                                {(
                                    props.Employee.first_name &&
                                    props.Employee.last_name &&
                                    props.Employee.gender &&
                                    props.Employee.identification_type &&
                                    props.Employee.identification_number &&
                                    props.Employee.primary_phone &&
                                    props.Employee.secondary_phone &&
                                    props.Employee.email
                           



                                ) ? <Button fluid size={'massive'} positive ><Icon name='save' /> Actualizar empleado</Button> : '' }
                                

                                {/* <Button fluid size={'massive'} positive ><Icon name='save' /> Actualizar empleado</Button>  */}

                        <Segment padded>
                            <Label attached='top' color='green' >Informacion del empleado</Label>

                            <Grid columns='equal' divided>
                                <Step1Preview Employee={props.Employee} />
                                <Step2Preview Employee={props.Employee} />
                                <Step3Preview 
                                FrondIdCard = {props.FrondIdCard}
                                setFrontIdCard = {props.setFrontIdCard}
                                ReverseIdCard = {props.ReverseIdCard}
                                setReverseIdCard = {props.setReverseIdCard}
                                OnHandIdCard = {props.OnHandIdCard}
                                setOnHandIdCard = {props.setOnHandIdCard}
                                FrontReverseIdCard = {props.FrontReverseIdCard}
                                setFrontReverseIdCard = {props.setFrontReverseIdCard}
                                AvatarImage = {props.AvatarImage}
                                setAvatarImage = {props.setAvatarImage}
                                OtherDocuments = {props.OtherDocuments}
                                setOtherDocuments = {props.setOtherDocuments}
                                Employee={props.Employee} />
                                
                            </Grid>

                        </Segment>

                

                        {(
                                    props.Employee.first_name &&
                                    props.Employee.last_name &&
                                    props.Employee.gender &&
                                    props.Employee.identification_type &&
                                    props.Employee.identification_number &&
                                    props.Employee.primary_phone &&
                                    props.Employee.secondary_phone &&
                                    props.Employee.email
                                    
                                  



                                ) ? <Button fluid size={'massive'} positive ><Icon name='save' /> Actualizar empleado</Button> : '' }


                    </Grid.Column>
                </Grid>

        </Form>
            
       
        
        </div>
					
  );
}

export default withRouter(Layout);