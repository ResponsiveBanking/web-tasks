import React from 'react'
import Greeting from './Greeting'
import Details from './Details'

const NotificationComponent = (context) => {
    const name = context.router.location.query.name;
    const price = context.router.location.query.price;
    const store = context.router.location.query.store;
    const balance = context.router.location.query.balance;
    const remainingBalance = context.router.location.query.remainingBalance;

    return (
        <div className="card">
            <div className="card-block">
                <Greeting name={name} />
                <p className="card-text">
                    <Details price={price} store={store} balance={balance} remainingBalance={remainingBalance} />
                </p>
                <div className="row">
                    <div className="col">
                        <a href="#" className="btn btn-primary btn-block">Ok</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

NotificationComponent.contextTypes = {
    router: React.PropTypes.object
};

export default NotificationComponent;
