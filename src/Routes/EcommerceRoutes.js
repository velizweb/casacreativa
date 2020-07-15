import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import EcommercePage from '../pages/EcommercePage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <EcommercePage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page explorer ExcludeRolsList={['Admin','Super admin','Monitor']} />,
        path :  '/model/ecommerce/:company_id',
    },
    {
        page : <Page checkout ExcludeRolsList={['Admin','Super admin','Monitor']} />,
        path :  '/model/ecommerce/checkout/:company_id',
    },
    {
        page : <Page checkoutSuccess ExcludeRolsList={['Admin','Super admin','Monitor']} />,
        path :  '/model/ecommerce/checkout/success/:company_id',
    },
    {
        page : <Page update ExcludeRolsList={['Model']} />,
        path :  '/company/learning/update/:company_id/:product_id',
    }
]

export default routes