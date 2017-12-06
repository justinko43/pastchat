import React, { Component } from 'react';
import { render } from 'react-dom';


class NavContainer extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" component="input" placeholder="URL HERE" />
          <button component="input" type="submit"> save </button>
        </form>
        <a href="/auth/google">Sign in with Google</a>
      </div>
    )
  }
}

export default NavContainer;