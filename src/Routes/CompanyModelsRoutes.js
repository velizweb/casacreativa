import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanyModelsListPage from '../pages/CompanyModelsListPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanyModelsListPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/models/:company_id',
    }
    
]

export default routes