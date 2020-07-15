import React,{useState} from 'react';
import { withRouter } from 'react-router-dom'
import Paysheet from '../../API/PaySheet'
import Layout from './Layout'



function NewPaysheet(props) {

	const [ company_id ]  = useState(props.match.params.company_id)
	const [ PaySheetParams, setPaySheetParams ] = useState({ tasa : 0, FromDate : '', UntilDate : '' });
	const [Generating, setGenerating]  = useState( false )
	const [Generated, setGenerated]  = useState( false )
    

	function handleChange(value, name){
		setPaySheetParams({
			...PaySheetParams,
			[name] : value,
		})
	}

	function handleSubmit(){
		
		setGenerating(true)

		Paysheet.calc( company_id , PaySheetParams ).then(response => {
      		setGenerated(true)
        		setGenerating(false)
		}).catch(error => { /* . . . */ });
	}


  	return <Layout
			company_id={company_id}
			Generating={Generating}
    		Generated={Generated}
    		PaySheetParams={PaySheetParams}
    		handleChange={handleChange}
			handleSubmit={handleSubmit}
    		/>
}

export default withRouter(NewPaysheet);
