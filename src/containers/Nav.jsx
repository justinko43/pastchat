import React, { Component } from 'react';
import { render } from 'react-dom';


class Nav extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" component="input" placeholder="URL HERE"/>
                    <button component="input" type="submit"> save </button>
                </form>
                <button>OAuth button</button>
            </div>
        )
    }
}

export default Nav;