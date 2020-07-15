import React from 'react';
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
// import UserContext from '../../Contexts/UserContext'


function Layout(props) {


    // const user = useContext(UserContext);

    return (
       
        <Menu vertical>
            
            <Menu.Item>
                <Menu.Header>Estudios</Menu.Header>
                <Menu.Menu>
                    
                    {
                        props.data.map((item, key)=>{
                            return (<Menu.Item key={key}
                            name={item.company_name} 
                            onClick={()=>props.handleItemClick(`/roles/validator/${item.company_profile_id}`)}/>)
                        })
                    }
                </Menu.Menu>
            </Menu.Item>
        </Menu>		
  );
}

export default withRouter(Layout);