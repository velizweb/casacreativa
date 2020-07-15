import React from 'react';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import API from '../../API/Auth';
import Gui from './Gui';


export default class Register extends React.Component{

	constructor(props) {
        super(props);
         this.state = {

			loading : true,
			registerSuccess : false,
			email : 'barinas.code@gmail.com',
			first_name : 'Leonardo',
			last_name : 'Tapia',
			password : '123456',
			password2 : '123456',	
		 };
		
		this.addNotification = this.addNotification.bind(this);
    	this.notificationDOMRef = React.createRef();
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }

	componentDidMount(){
		this.setState({
			loading:false
		})
	}

	onChangeHandler(e){
	 	this.setState({
            ...this.state,
            [e.target.name] : e.target.value,
	 	});
    }


    onSubmitHandler(e){
		e.preventDefault()

		this.setState({
			loading:true
		})

		API.register({

			...this.state
  
		  }).then(response => {
  
			this.addNotification({
				message: 'Te has registrado con exito, ahora inicia sesion',
				type : 'success'
			})

			this.setState({
				registerSuccess: true
			})
  
		  })
		  .catch(error => {

				this.addNotification({
					message: error.response.data.error,
					type : 'danger'
				})
				
				this.setState({
					loading:false
				})

				console.log(error.response.data.error);
		  });
    }


	addNotification(data) {
		this.notificationDOMRef.current.addNotification({
		  title: "Registro de usuario",
		  message: data.message,
		  type: data.type,
		  insert: "top",
		  container: "top-right",
		  animationIn: ["animated", "fadeIn"],
		  animationOut: ["animated", "fadeOut"],
		  dismiss: { duration: 2000 },
		  dismissable: { click: true }
		});
	  }

	render(){
		return (
			<div>
				<ReactNotification ref={this.notificationDOMRef} />
				<Gui 
					params={{ ...this.state }}
					onChangeHandler={this.onChangeHandler}
					onSubmitHandler={this.onSubmitHandler}
					loading={this.state.loading}
					registerSuccess={this.state.registerSuccess}
					/>
			</div>
		)
    }
}

