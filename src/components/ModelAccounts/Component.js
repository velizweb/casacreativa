import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import EMPLOYEES from '../../API/Employees'
import ACCOUNT_REQUESTS from '../../API/AccountRequests'
import Layout from './Layout';



function ModelAccounts(props) {

	// const user = useContext(UserContext);


  const user_id = props.user_id
  const company_id = props.company_id
  const request_id = props.match.params.request_id
  
  const [ Employee, setEmployee ] = useState('')
  const [ Request, setRequest ] = useState('')
  const [ RequestDetail, setRequestDetail ] = useState([])



  useEffect(() => {

      EMPLOYEES.find( company_id , user_id )
        .then(response => {

          setEmployee(response.data)


        })
        .catch(error => {
          // . . .

        });

        ACCOUNT_REQUESTS.find( company_id , user_id, request_id )
        .then(response => {

          setRequest(response.data)
          setRequestDetail(response.data)
        })
        .catch(error => {
          // . . .

        })
        
  },[company_id,user_id,request_id])


  if(!Request || !Employee.id){
    return '';
  }
    
    return <Layout
    Employee={Employee}
    RequestDetail={RequestDetail}
    />
}

export default withRouter(ModelAccounts);
