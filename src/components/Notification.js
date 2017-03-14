import React from 'react';
import Greeting from './Greeting'

const NotificationComponent = (context) => {
    const name = context.router.location.query.name;

    return (
        <div>
            <Greeting name={name} />
            Just to let you know...
        </div>
    )
};

NotificationComponent.contextTypes = {
    router: React.PropTypes.object
};

export default NotificationComponent;
