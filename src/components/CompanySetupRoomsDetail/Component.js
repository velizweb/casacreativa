import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom'
import Layout from './Layout'
import SystemRoomsInventary from '../../API/SystemRoomsInventary';
import SystemInventary from '../../API/SystemInventary';



function CompanySetupRoomsDetail(props) {
	
  const [ DataSystemRoomInventary,setDataSystemRoomInventary ] = useState([])
  const [ DataSystemInventary,setDataSystemInventary ] = useState([])
  const [ Item ,setItem ] = useState({})
  const [ getting ,setGetting ] = useState(true)
  const [ company_id ]  = useState(props.match.params.company_id)
  const [ room_id ]  = useState(props.match.params.room_id)
  	

  function handleChange(value, name){

		setItem({
			...Item,
			[name] : value,
		})
  }

  /*
	*	Asignar elemento al inventario
	*/
	function handleSubmit(){
		
		SystemRoomsInventary.create(company_id , room_id, Item).then(response => {
      
      SystemRoomsInventary.list(company_id,room_id)
          .then(response => {
            
            setDataSystemRoomInventary(response.data)
            setGetting(false)
          })
          .catch(error => {
            setGetting(false)
          });
      
		}).catch(error => { /* . . . */ });
	}

  function deleteItem(item_id){
    SystemRoomsInventary.delete(company_id,room_id,item_id)
    .then(response => {
      
      SystemRoomsInventary.list(company_id,room_id)
          .then(response => {
            
            setDataSystemRoomInventary(response.data)
            setGetting(false)
          })
          .catch(error => {
            setGetting(false)
          });
      setGetting(false)
    })
    .catch(error => {
      setGetting(false)
    });
  }


    useEffect(() => { 

      
        SystemRoomsInventary.list(company_id,room_id)
          .then(response => {
            
            setDataSystemRoomInventary(response.data)
            setGetting(false)
          })
          .catch(error => {
            setGetting(false)
          });

          SystemInventary.listSelectFormat(company_id)
          .then(response => {
            
            setDataSystemInventary(response.data)
            setGetting(false)
          })
          .catch(error => {
            setGetting(false)
          });


    },[ company_id, room_id ]);

  return (
       
    <Layout
      data={ DataSystemRoomInventary }
      DataSystemInventary={DataSystemInventary}
      Item={Item}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      deleteItem={deleteItem}
      getting={ getting }
      company_id={company_id}
    />
					
  );
}

export default withRouter(CompanySetupRoomsDetail);
