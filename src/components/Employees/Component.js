import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import EMPLOYEES from '../../API/Employees'
import Layout from './Layout'



function Employees(props) {
	
  const [ DataEmployees,setDataEmployees ] = useState([])
  const [Filter, setFilter] = useState('')
  const [ loading ,setLoading ] = useState(true)
  const { addToast } = useToasts()

  const company_id = props.match.params.company_id



  function handleChangeFilter(value){
    
    setFilter(value)

    
  }



    function setRol( employee_id , rol ){
      
      const company_id = props.match.params.company_id

      EMPLOYEES.update_rol( company_id , employee_id , rol )
        .then(response => {
          
         

          EMPLOYEES.list(props.match.params.company_id)
            .then(response => {
              addToast('The role '+rol+' has been configured successfully', {
                appearance: 'success',
                autoDismiss: true,
                pauseOnHover: false,
              })
              setDataEmployees(response.data)
            })
            .catch(error => {

            });

        })
        .catch(error => {
          // . . .
          setLoading(false)
        });
    }

    function deleteEmployee( company_id, employee_id  ){
      
      EMPLOYEES.delete( company_id , employee_id )
        .then(response => {
          
          getEmployees()

        })
        .catch(error => {
          // . . .
          setLoading(false)
        });
    }
   
  	function getEmployees(){
    
      // setLoading(true)
      if(!Filter){

        EMPLOYEES.list(props.match.params.company_id)
        .then(response => {
          setDataEmployees(response.data)
          setLoading(false)
          
        })
        .catch(error => {
          // . . .
          setLoading(false)
        });
      }
      else{
        EMPLOYEES.filter_all(props.match.params.company_id,{Filter})
        .then(response => {
          setDataEmployees(response.data)
          setLoading(false)

        })
        .catch(error => {
          setLoading(false)
        });
      }
    }


    useEffect(() => {

      if(!Filter){

        EMPLOYEES.list(company_id)
        .then(response => {
          setDataEmployees(response.data)
          setLoading(false)
          
        })
        .catch(error => {
          setLoading(false)
        });
      }
      else{
        EMPLOYEES.filter_all(company_id,{Filter})
        .then(response => {
          setDataEmployees(response.data)
          setLoading(false)

        })
        .catch(error => {
          setLoading(false)
        });
      }
      
    },[Filter,company_id]);


  return (
       
    <Layout
      data={ DataEmployees }
      loading={ loading }
      setRol={setRol}
      deleteEmployee={deleteEmployee}
      handleChangeFilter={handleChangeFilter}
      Filter={Filter}
      company_id={company_id}
    />
					
  );
}

export default withRouter(Employees);
