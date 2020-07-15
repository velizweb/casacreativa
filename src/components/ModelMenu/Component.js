import React from 'react';
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



function ModelMenu(props) {

  const company_id = props.match.params.company_id;

	function handleItemClick(page){
    props.history.push(page)
  }
  
  return (
       
	<Menu vertical inverted style={{marginLeft:'10px'}}>
        
        <Menu.Item>
          <Menu.Header>Adminsitracion</Menu.Header>
            <Menu.Menu>
            
            <Menu.Item name='Inicio' onClick={()=>handleItemClick('/')} />
              <Menu.Item name='Tienda' onClick={()=>handleItemClick('/model/ecommerce/'+company_id)} />
              <Menu.Item name='Compras' onClick={()=>handleItemClick('/model/shopping-records/list/'+company_id)} />
              <Menu.Item name='Multas' onClick={()=>handleItemClick('/model/penalties/'+company_id)} />
              <Menu.Item name='Solicitud' onClick={()=>handleItemClick('/model/requests/'+company_id)} />
              <Menu.Item name='Capacitacion' onClick={()=>handleItemClick('/model/learning/'+company_id)} />
              <Menu.Item name='Galeria' onClick={()=>handleItemClick('/model/gallery/'+company_id)} />
            </Menu.Menu>
        </Menu.Item>
      </Menu>


					
  );
}

export default withRouter(ModelMenu);
