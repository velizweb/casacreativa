import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanyProductsPage from '../pages/CompanyProductsPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanyProductsPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company-products/:company_id',
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  '/company-products/create/:company_id',
    },
    {
        page : <Page update ExcludeRolsList={['Model']} />,
        path :  '/company-products/update/:company_id/:product_id',
    }
]

export default routes