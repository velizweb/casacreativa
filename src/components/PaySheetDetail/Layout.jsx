import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card,Loader,Grid,Header,Button,Icon, Label } from 'semantic-ui-react'
import GuiHeader from'../../gui/GuiHeader'
import PaySheetGeneralDetail from '../PaySheetGeneralDetail/Component'
import PaySheetPlatformsDetail from '../PaySheetPlatformsDetail/Component'
import PaysheetShoppingRecordsDetail from '../PaysheetShoppingRecordsDetail/Component'
import PaySheetPenaltiesDetail from '../PaySheetPenaltiesDetail/Component'
import PaySheetRequestsDetail from '../PaySheetRequestsDetail/Component'

function Layout(props) {

    if(props.loading){
        return (<Loader active inline='centered' />)
    }

    const PaySheetDetailData = props.PaySheetDetailData;
    

    return <Grid>
    <Grid.Row>
        <Grid.Column>
            <GuiHeader
                header_text={'Detalle nomina'}
                button_text={'Calcular nueva nomina'}
                header_sub_text={`Codigo : ${PaySheetDetailData.paysheet_code}`}
                page={'/generate/paysheet/'+props.company_id}
            />
           
        </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{marginTop:'0px',paddingTop:'0px'}}>
        <Grid.Column>
            <p>Tasa de combertivilidad USD / COP <span style={{fontSise:'2em',color:'black',fontWeight:'bolder'}}>{PaySheetDetailData.tasa}</span></p>
            
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
           {    
               (parseInt(PaySheetDetailData.paid) === 0) &&  <Button animated size='small' positive onClick={()=>props.paid()}>
               <Button.Content visible>Liquidar</Button.Content>
                   <Button.Content hidden >
                       <Icon name='folder open' />
                   </Button.Content>
               </Button>
               
           }

            {    
               (parseInt(PaySheetDetailData.paid) === 1) &&  <Label color='green'>Nomina liquidada</Label>
               
           }
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
        <Card fluid>
            <Card.Content>
             <PaySheetGeneralDetail PaySheetDetailData={ PaySheetDetailData } />
            </Card.Content>
        </Card>
        </Grid.Column>
    </Grid.Row>

    <Grid.Row>
        <Grid.Column>
            
        <Grid columns='equal'>
            <Grid.Column width={5}>
            <Header as='h1'>Ingresos</Header>
            
            <PaySheetPlatformsDetail PaySheetDetailData={ PaySheetDetailData } />
                

    </Grid.Column>
    <Grid.Column width={11}>

    <Header as='h1'>Egresos</Header>

        <Card fluid>
            <Card.Content>
                <Card.Header>Compras</Card.Header>
                    <Card.Meta> COP {parseFloat(PaySheetDetailData.TOTAL_COMPRAS).toLocaleString()} </Card.Meta>

    			<PaysheetShoppingRecordsDetail ShoppingRecords={props.ShoppingRecords} paid={props.PaySheetDetailData.paid} />

                </Card.Content>
        </Card>



        <Card fluid>
            <Card.Content>
                <Card.Header>Multas</Card.Header>
                    <Card.Meta> COP {parseFloat(PaySheetDetailData.TOTAL_MULTAS).toLocaleString()} </Card.Meta>

                    <PaySheetPenaltiesDetail PenaltiesData={props.PenaltiesData} paid={PaySheetDetailData.paid} />

                </Card.Content>
        </Card>


        <Card fluid>
            <Card.Content>
                <Card.Header>Solicitudes</Card.Header>
                    <Card.Meta> COP {parseFloat(PaySheetDetailData.TOTAL_SOLICITUDES).toLocaleString()} </Card.Meta>

                    <PaySheetRequestsDetail UserRequestsData={props.UserRequestsData} paid={PaySheetDetailData.paid} />

    
                </Card.Content>
        </Card>


    </Grid.Column>
   
  </Grid>

        </Grid.Column>
    </Grid.Row>



   
</Grid>

}

export default withRouter(Layout);