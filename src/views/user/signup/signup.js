import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import action
import { registration } from "../../../reduxModules/actions/index";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "a@a.com",
      password: "1",
    };
  }

  onHandelInputChange = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSignUp = () => {
    const { email, password } = this.state;
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (email === "" || regEmail.test(email) !== true) {
      alert("Enter valid email");
    } else if (password === "") {
      alert("Password email");
    } else {
      let data = {
        email: email,
        password: password,
      };
      this.props.registration(data);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 form-box">
            <div className="form-top">
              <div className="form-top-left">
                <h3>Sign up to our site</h3>
                <p>Enter your email and password to signup</p>
              </div>
              <div className="form-top-right">
                <i className="fa fa-key"></i>
              </div>
            </div>
            <div className="form-bottom">
              <div className="form-group">
                <label className="sr-only" htmlFor="form-username">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="email..."
                  className="form-username form-control"
                  id="form-username"
                  onChange={(txt) => this.onHandelInputChange(txt)}
                />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="form-password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password..."
                  className="form-password form-control"
                  id="form-password"
                  onChange={(txt) => this.onHandelInputChange(txt)}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={() => this.onSignUp()}
              >
                Sign Up!
              </button>
            </div>
            <a href="http://www.google.com">Sign In</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      registration,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
