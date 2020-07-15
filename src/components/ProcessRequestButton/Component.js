import React from 'react';
import { withRouter } from 'react-router-dom'

import REQUESTS from '../../API/Requests'
import Layout from './Layout'



function ProcessRequestButton(props) {
	
  const company_id = props.match.params.company_id;
  const request = props.selected_request

  function process_request(request_status){
    
      REQUESTS.process_request( company_id , request.id, {request_status})
        .then(response => {
            // - - -
            props.callBack()
        })
        .catch(error => {
          // - - -
        });
  }

  return (
       
    <Layout
        selected_request={props.selected_request}
        process_request={process_request}
    />
					
  );
}

export default withRouter(ProcessRequestButton);
