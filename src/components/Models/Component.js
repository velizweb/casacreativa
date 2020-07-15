import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
// import UserContext from '../../Contexts/UserContext'
import EMPLOYEES from '../../API/Employees'
import Layout from './Layout'



function Models(props) {
	
  const [ DataEmployees,setDataEmployees ] = useState([])
  const [Filter, setFilter] = useState('')
  const [Employee, setEmployee] = useState('')
  const company_id = props.match.params.company_id;
	// const user = useContext(UserContext)

  function handleChange(value){
    
    setFilter(value)
    setEmployee('')
  }

  function setDefaultState(){
    setFilter('')
    setEmployee('')
  }
  

    useEffect(() => {      
      EMPLOYEES.filter_models(company_id,{Filter})
        .then(response => {
          setDataEmployees(response.data)


        })
        .catch(error => {

        });
      
    },[company_id,Filter]);




  return (
       
    <Layout
      data={ DataEmployees }
      handleChange={handleChange}
      Employee={Employee}
      setEmployee={setEmployee}
      setDefaultState={setDefaultState}
      Filter={Filter}
    />
					
  );
}

export default withRouter(Models);
