import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import ACCOUNT_REQUESTS from '../../API/AccountRequests'
import Layout from './Layout'




function CompanyAccountRequests(props) {
	
  const [ DataRequests,setDataRequests ] = useState([])
  const [Filter, setFilter] = useState('New')

  const [ loading ,setLoading ] = useState(true)
  const company_id = props.match.params.company_id;


  function handleChangeFilter(value){
    setFilter(value)
  }

   
  	function getRequests(){

        

        ACCOUNT_REQUESTS.list(Filter , company_id)
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
      ACCOUNT_REQUESTS.list( Filter , company_id)
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

export default withRouter(CompanyAccountRequests);
