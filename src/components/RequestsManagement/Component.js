import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import REQUESTS from '../../API/Requests'
import Layout from './Layout'




function RequestsManagement(props) {
	
  const [ DataRequests,setDataRequests ] = useState([])
  const [Filter, setFilter] = useState('New')

  const [ loading ,setLoading ] = useState(true)
  const company_id = props.match.params.company_id;


  function handleChangeFilter(value){
    setFilter(value)
  }

   
  	function getRequests(){

        

        REQUESTS.list( company_id , Filter)
        .then(response => {

          setDataRequests(response.data.data)
          setLoading(false)
          
        })
        .catch(error => {
          // . . .
          setLoading(false)
        });
    }


    useEffect(() => {      
      REQUESTS.list( company_id , Filter)
        .then(response => {

          setDataRequests(response.data.data)
          setLoading(false)
          
        })
        .catch(error => {
          // . . .
          setLoading(false)
        });
      
    },[company_id, Filter]);


   




  return (
       
    <Layout
      data={ DataRequests }
      loading={ loading }
      handleChangeFilter={handleChangeFilter}
      Filter={Filter}
      setFilter={setFilter}
      getRequests={getRequests}
    />
					
  );
}

export default withRouter(RequestsManagement);
