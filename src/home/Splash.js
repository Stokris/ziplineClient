import React from 'react';
import ZiplineIndex from '../ziplines/ZiplineIndex';

const Splash = (props) => {
    return (
        <div>
            <ZiplineIndex token={props.sessionToken}/>
        </div>
    )
}

export default Splash;