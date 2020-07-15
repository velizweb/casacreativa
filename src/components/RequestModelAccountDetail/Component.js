import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import { Label,Grid,Button, Table,Header, Icon} from 'semantic-ui-react'
import { useToasts } from 'react-toast-notifications'
import EMPLOYEES from '../../API/Employees'
import ACCOUNT_REQUESTS from '../../API/AccountRequests'
import UserProfileCard from '../UserProfileCard/Index'


function RequestModelAccountDetail(props) {

	// const user = useContext(UserContext);

  const { addToast } = useToasts()
  const [Updating, setUpdating] = useState(false)
  const user_id = props.match.params.user_id
  const company_id = props.match.params.company_id
  const request_id = props.match.params.request_id
  
  const [ Employee, setEmployee ] = useState('')
  const [ Request, setRequest ] = useState('')
  const [ RequestDetail, setRequestDetail ] = useState([])



  useEffect(() => {

      EMPLOYEES.find( company_id , user_id )
        .then(response => {
          setEmployee(response.data)
        }).catch(error => {/* . . . */});

        ACCOUNT_REQUESTS.find( company_id , user_id, request_id )
        .then(response => {
          setRequest(response.data)
          setRequestDetail(response.data)
        })
        .catch(error => {/* . . . */})
        
  },[company_id,user_id,request_id])


  if(!Request || !Employee.id){
    console.log(Request)
    return '';
  }
    

  function handleChange(value, name, type){

    
    let result = [];

    if(type==='nickname'){
      RequestDetail.map((item,key)=>{

          if(name === 'nikname_item_'+item.id)
          {
            item.nickname = value
            result.push(item)
          }
          else
          {
            result.push(item)
          }
          return true;
      })      
    } // endif

    if(type==='password'){
      RequestDetail.map((item,key)=>{

          if(name === 'password_item_'+item.id)
          {
            item.password = value
            result.push(item)
          }
          else
          {
            result.push(item)
          }
          return true;
      })      
    } // endif
    
    setRequestDetail(result)
}


function handleSubmit(){
    
  setUpdating(true)

  ACCOUNT_REQUESTS.update_datail(request_id , {RequestDetail} )
      .then(response => {
        setUpdating(false)

        addToast('La solicitud fue actualizada con exito', {
          appearance: 'success',
          autoDismiss: true,
          pauseOnHover: false,
        })


      })
      .catch(error => {
        
        addToast(error.response.data.error, {
          autoDismiss: true,
          appearance: 'error',
          pauseOnHover: false,
        })
        
        setUpdating(false)
      });
}




  return (
 
<Grid columns='equal'>

    <Grid.Column width={4}>
      <UserProfileCard Employee={Employee}/>
    </Grid.Column>
    <Grid.Column width={12}>


	<Header as='h2' floated='right'>
		<Button positive onClick={()=>handleSubmit()} disabled={(Updating)? true : false }>
      <Icon disabled name='check' /> Actualizar
    </Button>
    </Header>
    <Header as='h2' floated='left'>
		Solicitud de apertura de cuentas
    		<Header.Subheader>
				Por favor complete la informacion solicitada para cada plataforma
    		</Header.Subheader>
    </Header>

      



	<Table>
        
	<Table.Header>
      <Table.Row>
        <Table.HeaderCell>Platform</Table.HeaderCell>
        <Table.HeaderCell>Nickname sugerido</Table.HeaderCell>
        <Table.HeaderCell>Nickname</Table.HeaderCell>
		<Table.HeaderCell>Password</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
	<Table.Body>

    {
      RequestDetail.map((item, key) =>{

      return <Table.Row key={key}>
        <Table.Cell>
          <Label ribbon color={'red'}>
              <Icon disabled name='video camera' /> {item.platform}</Label>
        </Table.Cell>
        	<Table.Cell>{item.suggested_nickname}</Table.Cell>
			<Table.Cell>
				
        <input
        disabled={(Updating)? true : false }
        icon='edit'
        control='input'
        name={'nikname_item_' + item.id}
        value={item.nickname}
        onChange={(e)=>handleChange(e.target.value,e.target.name,'nickname')} />

			</Table.Cell>
			<Table.Cell>
      <input
        disabled={(Updating)? true : false }
        icon='edit'
        control='input'
        name={'password_item_' + item.id}
        value={item.password}
        onChange={(e)=>handleChange(e.target.value,e.target.name,'password')} />

			</Table.Cell>
      </Table.Row>

    })
	}
	</Table.Body>
	</Table> 


  
  

    </Grid.Column>
  </Grid>

  );
}

export default withRouter(RequestModelAccountDetail);
