import React from 'react';
import ZiplineIndex from '../ziplines/ZiplineIndex';
import './splash.css';

const Splash = (props) => {
    return (
        <div className="splash">
            <ZiplineIndex token={props.sessionToken}/>
        </div>
    )
}

export default Splash;