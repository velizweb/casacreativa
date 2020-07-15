import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import { Dropdown,Segment,Grid,Form ,Button,Message} from 'semantic-ui-react'
import EMPLOYEES from '../../API/Employees'
import ACCOUNT_REQUESTS from '../../API/AccountRequests'
import UserProfileCard from '../UserProfileCard/Index'

// import UserContext from '../../Contexts/UserContext'

function CompanyRequestModelAccount(props) {

	// const user = useContext(UserContext);
  const [ Created , setCreated ] = useState(false)
  const [ Creating , setCreating ] = useState(false)

  const user_id = props.match.params.user_id
  const company_id = props.match.params.company_id
  const [ Employee, setEmployee ] = useState('')
  const [SelectedPlatforms, setSelectedPlatforms] = useState([])
  const [SuggestedNickname, setSuggestedNickname] = useState('')
  const [Observations, setObservations] = useState('')


  const Platforms = [
    {key:'Chaturbate',value:'Chaturbate',text:'Chaturbate'},
    {key:'Bongacams',value:'Bongacams',text:'Bongacams'},
    {key:'Cam4',value:'Cam4',text:'Cam4'},
    {key:'Camsoda',value:'Camsoda',text:'Camsoda'},
    {key:'MyfreeCams',value:'MyfreeCams',text:'MyfreeCams'},
    {key:'Stripchat',value:'Stripchat',text:'Stripchat'},
    {key:'liveJasmin',value:'liveJasmin',text:'liveJasmin'},
    {key:'Streamate',value:'Streamate',text:'Streamate'},
    {key:'Skyprivate',value:'Skyprivate',text:'Skyprivate'},
    {key:'Imlive',value:'Imlive',text:'Imlive'},
    {key:'xlove',value:'xlove',text:'xlove'},
    {key:'Flirt 4 Free',value:'Flirt 4 Free',text:'Flirt 4 Free'}
  ]


  useEffect(() => {

      EMPLOYEES.find( company_id , user_id )
        .then(response => {
          setEmployee(response.data)
        })
        .catch(error => {
          // . . .

        });
  },[company_id,user_id])


  function handleMultiselect(e, { value } ){
      setSelectedPlatforms(value)
    };
  
    
    function handleSubmit(){
      
      setCreating(true);

      ACCOUNT_REQUESTS.create({
        'company_id': company_id,
        'user_id' : user_id,  
        'observations' : Observations,
        'suggested_nickname' : SuggestedNickname,
        'selected_platforms' :SelectedPlatforms

      } )
        .then(response => {
          setCreated(true)
          setCreating(false);
        })
        .catch(error => {
          setCreated(false)

        });

    }
	

	
	if(Creating)
	{
		return(
			<div>
			<h3>Creando solicitud</h3>
			<Message
				warning
				header='No cierre esta pagina hasta finalizar el proceso'
			/> 
        </div>
		)
	}


    if(Created){
      
      return(
        <div>
			<Message
				success
				header='Solicitud creada con exito'
			/> 
			<Button type='button' positive onClick={()=>props.history.push('/models/' + company_id )}>Volver a la lista de modelos</Button>
        </div>)
    }

    
  return (
 
<Grid columns='equal'>
	
	<Grid.Column width={4}>
		<UserProfileCard Employee={Employee}/>
    </Grid.Column>
    
	<Grid.Column width={8}>
		<Segment>
			<h3 style={{color:'black'}}>Solicitud de cuentas</h3>
      		<p>Por favor seleccione las plataformas que desea agregar</p>

			<Dropdown
				clearable
				fluid
				multiple
				search
				selection
				value={SelectedPlatforms}
				onChange={handleMultiselect}
				options={Platforms}
				placeholder='Seleccione las plataformas'
			/>
  
			<Form onSubmit={()=>handleSubmit()}>
				<Form.Field>
					<label>Nickname sugerido</label>
					<input
						value={SuggestedNickname}
						onChange={(e)=>setSuggestedNickname(e.target.value)}
					/>
				</Form.Field>
			
				<Form.Field>
					<label>Observaciones</label>
					<input
						value={Observations}
						onChange={(e)=>setObservations(e.target.value)}
					/>
				</Form.Field>

        <Button type='button' negative onClick={()=>props.history.push('/models/' + company_id )}>Cancelar</Button>
				<Button type='submit' positive>Enviar solicitud</Button>
			</Form>
  
		</Segment>
    </Grid.Column>

  </Grid>

  );
}

export default withRouter(CompanyRequestModelAccount);
