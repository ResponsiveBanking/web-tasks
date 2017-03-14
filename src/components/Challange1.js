import React, { Component } from 'react';
import Greeting from './Greeting'

class Challange1Component extends Component {
    constructor() {
        super();

        this.state = {
            number: 1
        };
        
    }

    changeNumber() {
        const newNumber = Math.floor((Math.random() * 10) + 1);
        this.setState({
            number: newNumber
        });

        setTimeout(this.changeNumber.bind(this), 600);
    }

    componentDidMount() {
        this.changeNumber()
    }

    

    render() {
        
        var name = this.context.router.location.query.name;
        return (
            <div className="card">
                <div className="card-block">
                    <Greeting name={name} />
                    <p className="card-text">
                        Let's play a game...
                        <br />
                        Tap the screen when the number 1 is shown
                        <br />
                        Number: {this.state.number}
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
    }
};

Challange1Component.contextTypes = {
    router: React.PropTypes.object
};

export default Challange1Component;
