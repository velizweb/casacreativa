import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout'
import STATISTICS from '../../API/Statistics'

function CompanyStatistics(props) {

    const [ company_id ]  = useState(props.match.params.company_id)

    const [EmployeesQty , setEmployeesQty ] = useState({
            label : 'Empleados',
            value : 0
    });

    const [ProductsQty , setProductsQty ] = useState({
        label : 'Productos',
        value : 0
    });

    const [NewOrdersQty] = useState({
        label : 'Solicitudes',
        value : 0
    });

    


    useEffect(() => {

        function getEmployesQty(){

            STATISTICS.countEmployes(company_id).then(response => {
                setEmployeesQty({
                    label : 'Empleados',
                    value : response.data.total
                })
            }).catch(error => { /* . . .*/ });
        }
    
        function getProducts(){
    
            STATISTICS.countProducts(company_id).then(response => {
                setProductsQty({
                    label : 'Productos',
                    value : response.data.total
                })
            }).catch(error => { /* . . .*/ });
        }

        getProducts()
        getEmployesQty()

    },[company_id]);

    
    return (
        <Layout 
            Data={[
                EmployeesQty,
                ProductsQty,
                NewOrdersQty,
            ]}
        />
    );
}

export default withRouter(CompanyStatistics);
