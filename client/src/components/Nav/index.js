import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  state = {
    user: this.props.user,
    name: this.props.user.name,
    isLoggedIn: this.props.isLoggedIn
  }
  
handleSignOut = () => {
  localStorage.removeItem('jwt');
  this.setState({
    isLoggedIn: false
  });
}


  render() {
    return (
      <nav className="navbar">

    <a className="navlink" href="/">
      <span>Root Route</span>
    </a>
        <a className="navlink" href="/paths">
      <span>Paths</span>
    </a>
  <p>
    Welcome, {this.state.user.name}!
  </p>
  <button type="signOut" onClick={()=> this.handleSignOut} className="btn btn-success">
    Sign Out
  </button>

  </nav>
  )
}
  
}

export default Nav;





// function Nav(props) {
//   return (
//     <nav className="navbar">

//       <a className="navlink" href="/">
//         <span>Root Route</span>
//       </a>
//           <a className="navlink" href="/paths">
//         <span>Paths</span>
//       </a>
//     <p>
//       Welcome, {props.user.name}!
//     </p>
//     <p>
//       Sign Out
//     </p>

//     </nav>
//   );
// }

// export default Nav;
