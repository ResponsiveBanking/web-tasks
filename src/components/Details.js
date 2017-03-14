import React from 'react';

export default ({ price, store, balance, remainingBalance }) => (
    <div>
        <div>
            <p>Purchase price: £{price}</p>
            <p>Store: {store}</p>
            <p>Current balance: £{balance}</p>
            <p>Remaining balance if purchased: £{remainingBalance}</p>
        </div>
    </div>
);
