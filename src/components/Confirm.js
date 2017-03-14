import React from 'react';
import Greeting from './Greeting'

const ConfirmComponent = (context) => {
    const name = context.router.location.query.name;

    return (
        <div>
            <Greeting name={name} />
            Confirm payment...
        </div>
    )
};

ConfirmComponent.contextTypes = {
    router: React.PropTypes.object
};

export default ConfirmComponent;
