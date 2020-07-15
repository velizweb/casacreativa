import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
// import UserContext from '../../Contexts/UserContext'
import UserPenalties from '../../API/UserPenalties'
import SetupPenalties from '../../API/SetupEmployeesPenalties'
import Layout from './Layout'



function ModelPenalties(props) {
	
	const [ DataPenalties,setDataPenalties ] = useState([])
	const [ DataSetupPenalties,setDataSetupPenalties ] = useState([])
	const [ DataSelectPenalties,setDataSelectPenalties ] = useState([])
	const [ PenaltieCharge , setPenaltieCharge ] = useState(0)
	const [ NewPenalty , setNewPenalty ] = useState({})
	const user_id = props.user_id;
	const company_id = props.match.params.company_id;
	  
	// const user = useContext(UserContext)

	function apply_charge(penaltie_id){

		DataSetupPenalties.map((item, key)=>{

			if(parseInt(penaltie_id) === parseInt(item.id)){	
				setPenaltieCharge(item.charge)
				return item.charge
			}
			else{
				return false
			}
		})
	}


	function handleChangeSelect(value, name){

		setNewPenalty({
			...NewPenalty,
			charge : apply_charge(value),
			[name] : value,
		})
	}


	function handleChangeCharge(value){

		setPenaltieCharge(value)
	}
		
	

	/*
	*	Apply penaltie to user
	*/
	function apply_penaltie(){
		
		const data = {
			penaltie_id : NewPenalty.penaltie_id,
			charge : PenaltieCharge,

		}

		UserPenalties.create(company_id , user_id, data).then(response => {
			UserPenalties.list(company_id , user_id).then(response => {
				setDataPenalties(response.data)
			}).catch(error => { /* . . . */ });
		}).catch(error => { /* . . . */ });
	}
	


	/*
	*	Getting user active penalties
	*/	
	useEffect(() => {

		

		UserPenalties.list(company_id , user_id).then(response => {
			setDataPenalties(response.data)
		}).catch(error => { /* . . . */ });

		 
		/*
		*	Getting system penalties
		*/

		SetupPenalties.list( company_id ).then(response => {

		
			setDataSetupPenalties(response.data)
			
		/*
		*	Setting select options penalties
		*/
			const temp = []
			    
			response.data.map((item,key)=>{
            
		   		temp.push({
			    		key : item.id , 
			    		text: item.penaltie_name, 
					value : item.id
				})
			
			
			if(response.data.length === key+1)
				setDataSelectPenalties(temp)
				return true
            	})
		
          
        }).catch(error => { /* . . . */});
      
        

    },[company_id, user_id]);


    		/*
		*	Return penalties management view
		*/

		return <Layout
				data={ DataPenalties }
				apply_penaltie={apply_penaltie}
				handleChangeSelect={handleChangeSelect}
				handleChangeCharge={handleChangeCharge}
				DataSelectPenalties={DataSelectPenalties}
				setNewPenalty={setNewPenalty}
				NewPenalty={NewPenalty}
				PenaltieCharge={PenaltieCharge}
			/>;
}

export default withRouter(ModelPenalties);
