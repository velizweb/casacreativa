import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

function PaySheetPlatformsDetail(props) {

     return <div>
        <Card fluid>
            <Card.Content>
   
            
                <Card.Header>LiveJasmin</Card.Header>
                    <Card.Meta> {parseFloat(props.PaySheetDetailData.earnings_livejasmin).toLocaleString()} </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Chaturbate</Card.Header>
                    <Card.Meta> <Card.Meta> {parseFloat(props.PaySheetDetailData.earnings_chaturbate).toLocaleString()} </Card.Meta> </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Bongacams</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Cam4</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Camsoda</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>MyfreeCams</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Stripchat</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Streamate</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Skyprivate</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Imlive</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>xlove</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>

        <Card fluid>
            <Card.Content>
                <Card.Header>Flirt 4 Free</Card.Header>
                    <Card.Meta> 0.00,00 </Card.Meta>
                </Card.Content>
        </Card>
        </div>



       

}

export default withRouter(PaySheetPlatformsDetail);