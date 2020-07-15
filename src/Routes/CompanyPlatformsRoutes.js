import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanyPlatformsPage from '../pages/CompanyPlatformsPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanyPlatformsPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/platforms/:company_id',
    }
]


						
						


export default routes