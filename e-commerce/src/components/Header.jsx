import { Topics } from "./Topics";
import { Component } from "react";

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="sticky-top">
    
        <div className="header ">
        <div>
          <a href="/">
            <img src="logo.jpeg" alt="headerLogo" className="headerLogo" />
          </a>
        </div>

        <div className="twologos">
         <a href="/shoppingcart">
            <i className="fas fa-shopping-cart shoppingCart"></i>
          </a>
          <div
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <Topics />
          </div>
          <div className="mobile " onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          </div>
        </div>
          
      </div>
    );
  }
}

export default Header;
