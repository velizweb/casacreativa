import React from 'react';
import { Link } from 'react-router-dom'

const goTologinView = (
    <div className="card card-signin my-5">
    <div className="card-body">
        <h5 className="card-title text-center">Te has registrado con exito</h5>
        <p>Ahora debes iniciar sesion, has click en entrar para continuar</p>
        <Link
            to="/login"
            className="nav-link btn btn-primary text-white">
            Entrar
        </Link>
    </div>
    </div>
)


export default class Gui extends React.Component{

    constructor(props) {
        super(props);
         this.state = {};
    }


    

    render() {

        if(this.props.registerSuccess){
            return goTologinView    
        }

    
    return (
            <div>

                
                <h5 className="card-title text-center">Crea tu cuenta</h5>
                
                <form className="form-signin" onSubmit={this.props.onSubmitHandler}>
                    
                    <div className='row'>
                    <div className="form-label-group col-lg-12">
                        <input 
                            disabled={this.props.loading}
                            type="email" 
                            className="form-control" 
                            placeholder="Email address" 
                            required
                            onChange={this.props.onChangeHandler}
                            value={this.props.params.email || ''}
                            name='email'
                            id='email'
                            />
                        <label htmlFor='email'>Correo electronico</label>
                    </div>

                    <div className="form-label-group col-lg-6">
                        <input 
                            disabled={this.props.loading}
                            type="text" 
                            className="form-control" 
                            placeholder="tu nombre" 
                            required
                            onChange={this.props.onChangeHandler}
                            value={this.props.params.first_name || ''}
                            name='first_name'
                            id='first_name'
                            />
                        <label htmlFor='first_name'>Nombre</label>
                    </div>

                    <div className="form-label-group col-lg-6">
                        <input 
                            disabled={this.props.loading}
                            type="text" 
                            className="form-control" 
                            placeholder="Tu apellido" 
                            required
                            onChange={this.props.onChangeHandler}
                            value={this.props.params.last_name || ''}
                            name='last_name'
                            id='last_name'
                            />
                        <label htmlFor='last_name'>Apellido</label>
                    </div>
    
                    <div className="form-label-group col-lg-6">
                        <input 
                            disabled={this.props.loading}
                            type="password" 
                            className="form-control"
                            placeholder="Password" required
                            onChange={this.props.onChangeHandler}
                            value={this.props.params.password || ''}
                            name='password'
                            id='password'
                            />
                        <label htmlFor='password'>Tu clave de acceso</label>
                    </div>
                
                <div className="form-label-group col-lg-6">
                    <input 
                        disabled={this.props.loading}
                        type="password" 
                        className="form-control" 
                        required
                        onChange={this.props.onChangeHandler}
                        value={this.props.params.password2 || ''}
                        name='password2'
                        id='password2'
                        
                    />
                    <label htmlFor='password2'>Repite tu clave de acceso</label>
                  </div>
    
                <button 
                className="btn btn-lg btn-primary btn-block text-uppercase"
                type="submit"
                disabled={this.props.loading}
                >Crear</button>
</div>
              </form>
            </div>





    );
    }
}

