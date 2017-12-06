import React, { Component } from 'react';
import { render } from 'react-dom';


class Summary extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem perferendis quisquam asperiores error atque accusantium tempore, dolores consequatur? Distinctio error tempora libero deleniti nulla quaerat accusamus quidem. Beatae, provident.</p>
            </div> 
        )
    }
}

export default Summary;