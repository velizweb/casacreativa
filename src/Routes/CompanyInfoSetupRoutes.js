import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanyInfoSetupPage from '../pages/CompanyInfoSetupPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanyInfoSetupPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const exclude = []
const routes = [

    {
        page : <Page ExcludeRolsList={exclude} update />,
        path :  '/company/info/setup/:company_id',
    }
]

export default routes