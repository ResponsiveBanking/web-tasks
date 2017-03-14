import React from 'react';
import Greeting from './Greeting'

const ConfirmComponent = (context) => {
    const name = context.router.location.query.name;

    return (
        <div className="card">
            <div className="card-block">
                <Greeting name={name} />
                <p className="card-text">
                    Details here
                </p>
                <div className="row">
                    <div className="col">
                        <a href="#" className="btn btn-primary btn-block">Yes</a>
                    </div>
                    <div className="col">
                        <a href="#" className="btn btn-secondary btn-block">No</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

ConfirmComponent.contextTypes = {
    router: React.PropTypes.object
};

export default ConfirmComponent;
