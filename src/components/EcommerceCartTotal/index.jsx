import React from 'react'
import { Header } from 'semantic-ui-react'

function index(props){     
      return <Header style={{fontSize:'2em'}}>Pagar : {props.total}</Header>
}

export default index;