import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import ModelShoppingRecordsPage from '../pages/ModelShoppingRecordsPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <ModelShoppingRecordsPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Admin','Super admin', 'Monitor']} />,
        path :  '/model/shopping-records/list/:company_id',
    },
    {
        page : <Page detail ExcludeRolsList={['Admin','Super admin', 'Monitor']} />,
        path :  '/model/shopping-records/detail/:company_id/:master_id',
    }
]

export default routes