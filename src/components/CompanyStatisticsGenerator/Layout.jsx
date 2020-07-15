import React from 'react';
import { Segment,Form,Dimmer,Button,Loader,Grid } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";



function Layout(props) {

	

    if(props.Getting){
        return <Loader active inline='centered' />
    }


    if(props.Requesting){
	    return (
	    <Grid columns='equal'>
	    		<Grid.Column width={16}>
		  		<Segment>
			  		<center>
						<Dimmer active inverted>
						<Loader active inline='centered' />
						</Dimmer>
				  		<p>Consultando estados por favor espere un momento</p>
			  		</center>
		  		</Segment>
	    		</Grid.Column>
		</Grid>
		);
	}

if( props.Requested === false && props.Requesting === false ){

	return (
		<Segment>
			<Form onSubmit={()=>props.handleSubmit()}>
				<Grid>
					<Grid.Row>
						<Grid.Column width={16}>
                    				<h3 style={{color:'black'}}>Consultar estados</h3>
						</Grid.Column>
						<Grid.Column width={5}>
							<label>Desde</label>
							<br/>
							<DatePicker
							selected={ props.StatisticsParams.FromDate }
							onChange={date => props.handleChange(date,'FromDate')}
							dateFormat="Y-M-d"
							/>
						</Grid.Column>
						<Grid.Column width={5}>
							<label>Hasta</label>
							<br/>
							<DatePicker
							selected={ props.StatisticsParams.UntilDate }
							onChange={date => props.handleChange(date,'UntilDate')}
							dateFormat="Y-M-d"
							/>
						</Grid.Column>
						<Grid.Column width={5}>
							<br/>
							<Button type='submit' positive>Consultar</Button> 
						</Grid.Column>
					</Grid.Row>
          			</Grid>
                  </Form>

				

		</Segment>
        
	  );
	}
	  
	}
	
	export default Layout;