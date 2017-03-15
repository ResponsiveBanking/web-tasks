import React from 'react'

const OverspendComponent = (context) => {

    return (
        <div className="card">
            <div className="card-block">
                <div className="card-text">
                    <h1>You've overspent</h1>
                </div>
                <div>GRAPH.........</div>
                <p>Lorem ipsum dolor sit ame. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum.</p>
                <div className="row">
                    <div className="col">
                        <a href="#" className="btn btn-primary btn-block">HELP ME</a>
                        <p>I am text describing the above button</p>
                        <a href="#" className="btn btn-primary btn-block">DON'T HELP ME</a>
                        <p>I am text describing the above button</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverspendComponent;
