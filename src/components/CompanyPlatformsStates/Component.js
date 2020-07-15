import React , { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Paysheet from '../../API/PaySheet'
import Layout from './Layout'



function CompanyPlatformsStates(props) {

	const [ company_id ]  = useState(props.match.params.company_id)
	const [ StatisticsParams, setStatisticsParams ] = useState({ tasa : 0, FromDate : '', UntilDate : '' });
	const [Generating, setGenerating]  = useState( false )
	const [Generated, setGenerated]  = useState( false )
    

	function handleChange(value, name){
		setStatisticsParams({
			...StatisticsParams,
			[name] : value,
		})
	}

	function handleSubmit(){
		
		setGenerating(true)

		Paysheet.calc( company_id , StatisticsParams ).then(response => {
      		setGenerated(true)
        		setGenerating(false)
		}).catch(error => { /* . . . */ });
	}


  	return <Layout
			company_id={company_id}
			Generating={Generating}
    		Generated={Generated}
    		StatisticsParams={StatisticsParams}
    		handleChange={handleChange}
			handleSubmit={handleSubmit}
    		/>
}

export default withRouter(CompanyPlatformsStates);
