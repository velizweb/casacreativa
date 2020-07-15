import React from 'react';
import { Loader } from 'semantic-ui-react'

function LoaderPage() {
    return (
        <div className='d-flex flex-row justify-content-center align-items-center violet-gradient' style={{height:"100vh"}}>
            <Loader active inline='centered' size='massive' inverted />
        </div>
    );
}

export default LoaderPage;