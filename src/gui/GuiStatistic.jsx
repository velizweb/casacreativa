import React from 'react';
import {Card , Segment, Statistic } from 'semantic-ui-react'

function GuiStatistic(props){

return (
    <Card>   
                <center>
        <Segment inverted>
            <Statistic inverted>
                <Statistic.Value>{props.value}</Statistic.Value>
                <Statistic.Label>{props.label}</Statistic.Label>
            </Statistic>
        </Segment>
                </center>
    </Card>
)

}

export default GuiStatistic