import React,{useContext} from 'react';
import { Card } from 'semantic-ui-react'
import StatisticsContext from '../../Contexts/StatisticsContext'
function CompanyPlatformsTotal(props) {

    const StatisticsDetail = useContext(StatisticsContext)

         return <div style={{paddingRight:'1em'}}>
        <Card fluid>
            <Card.Content>
   
            
                <Card.Header>LiveJasmin</Card.Header>
                    <Card.Meta> USD {StatisticsDetail.livejasmin.total} </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Chaturbate</Card.Header>
                    <Card.Meta> USD {StatisticsDetail.chaturbate.total} </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Stripchat</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Bongacams</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Cam4</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Camsoda</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>MyfreeCams</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        

        <Card fluid>
            <Card.Content>
                <Card.Header>Streamate</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Skyprivate</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Imlive</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>xlove</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Flirt 4 Free</Card.Header>
                    <Card.Meta> USD 0,00 </Card.Meta>
                </Card.Content>
        </Card>
        </div>



       

}

export default CompanyPlatformsTotal;