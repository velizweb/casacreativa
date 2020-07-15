import React,{useContext, useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom'
import { Grid, Modal,Image,Header,Button,Icon } from 'semantic-ui-react';
import NavBar from '../components/Navbar/Component';
import ModelMenu from '../components/ModelMenu/Component';
import CompanyStatistics from '../components/CompanyStatistics/Component';
import UserContext from '../Contexts/UserContext'
import LoaderPage from './LoaderPage';
import UserRolsContext from '../Contexts/UserRolsContext'
import RequestRolsPage from './RequestRolsPage';
import User from '../API/User'

// import CompanyPlatformsTotal from '../components/CompanyPlatformsTotal'
// import CompanyStatisticsGenerator from '../components/CompanyStatisticsGenerator/Component'
// import CompanyStatisticsPlatformDetail from '../components/CompanyStatisticsPlatformDetail'


function ModelDashboardPage(props) {
	
    const user = useContext(UserContext);
    const UserRolsDetail = useContext(UserRolsContext);
	const company_id = props.match.params.company_id;
	const [ sign , setSign ] = useState(false)
	const [ loading , setLoading ] = useState(true)
	const [requested , setRequested ] = useState(false)

	useEffect(()=>{

		setLoading(true)
		if(user.access_token){

			User.checkSign( company_id ).then(response => {
				setLoading(false)
				setRequested(true)
				setSign(parseInt(response.data.contract_signed))
			}).catch(error => { setLoading(false) });
		}
	
	},[company_id, user])


	function aceptTerms(){

		setLoading(true)

		User.aceptTerms( company_id ).then(response => {
			setLoading(false)
			setRequested(true)
			setSign(parseInt(response.data.contract_signed))
		}).catch(error => { setLoading(false) });
	}


    if(!user.access_token){
        return (<LoaderPage/>);
    }

    if(UserRolsDetail.UserRolsDetail.length === 0){
        return (<RequestRolsPage />);
    }

    if( !sign && !loading && requested && user.access_token){

		return (<Modal open={true}>
			<Modal.Header>Terminos y condiciones</Modal.Header>
				<Modal.Content>
				<Modal.Description>
					<h1>
						 Términos y Condiciones Legales de Utilización del Portal Web de Castillo Estudio LLC.
					</h1>
					<p>
					El acceso y uso por parte de los usuarios (el "Usuario" o "Usuarios") del portal www.movistar.co y https://store.movistar.com/sc/co/movstore/ (en adelante, los "Portales Web de Movistar Colombia") de propiedad de Colombia Telecomunicaciones S.A. ESP (en adelante, "La Empresa"), se regirá por los siguientes términos y condiciones: El acceso a los Portales Web de Movistar Colombia atribuye la condición de Usuario del mismo e implica la aceptación plena y sin reserva de todos los términos y condiciones que se encuentren vigentes en el momento mismo en que el Usuario acceda al Portal Web de Movistar Colombia. La Empresa se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones respecto a la información contenida en el Portal Web de Movistar Colombia, así como sus términos y condiciones. Las modificaciones que se hagan producirán efecto en forma inmediata a su incorporación en el Portal Web de Movistar Colombia.
					</p>

					<p>
					El acceso y uso por parte de los usuarios (el "Usuario" o "Usuarios") del portal www.movistar.co y https://store.movistar.com/sc/co/movstore/ (en adelante, los "Portales Web de Movistar Colombia") de propiedad de Colombia Telecomunicaciones S.A. ESP (en adelante, "La Empresa"), se regirá por los siguientes términos y condiciones: El acceso a los Portales Web de Movistar Colombia atribuye la condición de Usuario del mismo e implica la aceptación plena y sin reserva de todos los términos y condiciones que se encuentren vigentes en el momento mismo en que el Usuario acceda al Portal Web de Movistar Colombia. La Empresa se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones respecto a la información contenida en el Portal Web de Movistar Colombia, así como sus términos y condiciones. Las modificaciones que se hagan producirán efecto en forma inmediata a su incorporación en el Portal Web de Movistar Colombia.
					</p>

					<p>
					El acceso y uso por parte de los usuarios (el "Usuario" o "Usuarios") del portal www.movistar.co y https://store.movistar.com/sc/co/movstore/ (en adelante, los "Portales Web de Movistar Colombia") de propiedad de Colombia Telecomunicaciones S.A. ESP (en adelante, "La Empresa"), se regirá por los siguientes términos y condiciones: El acceso a los Portales Web de Movistar Colombia atribuye la condición de Usuario del mismo e implica la aceptación plena y sin reserva de todos los términos y condiciones que se encuentren vigentes en el momento mismo en que el Usuario acceda al Portal Web de Movistar Colombia. La Empresa se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones respecto a la información contenida en el Portal Web de Movistar Colombia, así como sus términos y condiciones. Las modificaciones que se hagan producirán efecto en forma inmediata a su incorporación en el Portal Web de Movistar Colombia.
					</p>

					<p>
					El acceso y uso por parte de los usuarios (el "Usuario" o "Usuarios") del portal www.movistar.co y https://store.movistar.com/sc/co/movstore/ (en adelante, los "Portales Web de Movistar Colombia") de propiedad de Colombia Telecomunicaciones S.A. ESP (en adelante, "La Empresa"), se regirá por los siguientes términos y condiciones: El acceso a los Portales Web de Movistar Colombia atribuye la condición de Usuario del mismo e implica la aceptación plena y sin reserva de todos los términos y condiciones que se encuentren vigentes en el momento mismo en que el Usuario acceda al Portal Web de Movistar Colombia. La Empresa se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones respecto a la información contenida en el Portal Web de Movistar Colombia, así como sus términos y condiciones. Las modificaciones que se hagan producirán efecto en forma inmediata a su incorporación en el Portal Web de Movistar Colombia.
					</p>

					<p>
					El acceso y uso por parte de los usuarios (el "Usuario" o "Usuarios") del portal www.movistar.co y https://store.movistar.com/sc/co/movstore/ (en adelante, los "Portales Web de Movistar Colombia") de propiedad de Colombia Telecomunicaciones S.A. ESP (en adelante, "La Empresa"), se regirá por los siguientes términos y condiciones: El acceso a los Portales Web de Movistar Colombia atribuye la condición de Usuario del mismo e implica la aceptación plena y sin reserva de todos los términos y condiciones que se encuentren vigentes en el momento mismo en que el Usuario acceda al Portal Web de Movistar Colombia. La Empresa se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones respecto a la información contenida en el Portal Web de Movistar Colombia, así como sus términos y condiciones. Las modificaciones que se hagan producirán efecto en forma inmediata a su incorporación en el Portal Web de Movistar Colombia.
					</p>

				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button negative onClick={()=>props.history.push(`/`)}> Cancelar <Icon name='left chevron' /></Button>
				<Button positive onClick={()=>aceptTerms()}> Aceptar <Icon name='right chevron' /></Button>
			</Modal.Actions>
		</Modal>)
    }

	    if(props.PageAccess( props.accesibleBy , UserRolsDetail.UserRolsDetail )  && requested && sign){
		    return <div>
                <NavBar/>
        
			<Grid divided >
            		<Grid.Row>
                        	<Grid.Column width={3}>
                            		<ModelMenu/>
                        	</Grid.Column>
                        	<Grid.Column width={10}>
                            	<Grid.Row>
                              	<Grid.Column width={16}>
                                    	<CompanyStatistics />
                                	</Grid.Column>	
                            	</Grid.Row>
                            	{/* <Grid.Row>
                            		<Grid style={{marginTop: '1em'}}>
						    <Grid.Column width={5}>
						    <CompanyPlatformsTotal />
						    </Grid.Column>	
						    <Grid.Column width={11}>
						    <CompanyStatisticsGenerator/>
						    <CompanyStatisticsPlatformDetail />
						    </Grid.Column>	
						    </Grid>
						</Grid.Row> */}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>	
	
}
	
	return ''

}

export default withRouter(ModelDashboardPage);
