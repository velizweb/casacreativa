import React,{useState,useContext} from 'react';
import { withRouter } from 'react-router-dom'
import Statistics from '../../API/Statistics'
import Layout from './Layout'
import StatisticsContext from '../../Contexts/StatisticsContext'


function NewPaysheet(props) {

	const [ company_id ]  = useState(props.match.params.company_id)
	const [ StatisticsParams, setStatisticsParams ] = useState({ tasa : 0, FromDate : '', UntilDate : '' });
	const [Requesting, setRequesting]  = useState( false )
	const [Requested, setRequested]  = useState( false )
    

	
	const {setStatisticsDetail} = useContext(StatisticsContext)

	function handleChange(value, name){
		setStatisticsParams({
			...StatisticsParams,
			[name] : value,
		})
	}

	function handleSubmit(){
		
		setRequesting(true)

		Statistics.platformsStates( company_id , StatisticsParams ).then(response => {
			setStatisticsDetail(response.data)
			setRequested(false)
		  	setRequesting(false)

		}).catch(error => { 
			setRequested(false)
        		setRequesting(false)
		});
	}


  	return <Layout
			company_id={company_id}
			Requesting={Requesting}
    			Requested={Requested}
    			StatisticsParams={StatisticsParams}
    			handleChange={handleChange}
			handleSubmit={handleSubmit}
    		/>
}

export default withRouter(NewPaysheet);
