import React from 'react';
import Register from '../components/Register/Component';
import NavBar from '../components/Navbar/Component';

function RegisterPage() {

	return (
        <div>
            <NavBar/>
            <div className="container-fluid">
            	<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
						<div className="card card-signin my-5">
							<div className="card-body">
								<Register redirect={true}/>
							</div>
						</div>
					</div>
              	</div>
            </div>
        </div>
  );
}

export default RegisterPage;
