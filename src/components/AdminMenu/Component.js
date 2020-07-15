import React from 'react';
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



function AdminMenu(props) {

  // const company_id = props.match.params.company_id;

	function handleItemClick(page){
    props.history.push(page)
  }
  
  return (
       
	<Menu vertical>
        
        <Menu.Item>
          <Menu.Header>Adminsitracion</Menu.Header>
            <Menu.Menu>
              <Menu.Item name='Inicio' onClick={()=>handleItemClick('/')} />
              <Menu.Item name='Mis estudios' onClick={()=>handleItemClick('/super/admin/companies/list/owner')}/>
              <Menu.Item name='Administrar estudios' onClick={()=>handleItemClick('/super/admin/companies/list')}/>
              <Menu.Item name='Aperturas de cuenta' onClick={()=>handleItemClick('/super/admin/account/requests/list')}/>
              
            </Menu.Menu>
        </Menu.Item>
      </Menu>


					
  );
}

export default withRouter(AdminMenu);
