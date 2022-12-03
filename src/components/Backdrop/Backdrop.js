import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {

    const cssClasses = `backdrop backdrop--${props.show ? 'opened' : 'closed'}`;

    return <div className={cssClasses}></div>
};

export default backdrop;