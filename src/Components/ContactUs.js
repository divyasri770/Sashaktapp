
import React, { Component } from 'react';


class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className='image1'>
      <div>
        {!this.state.submitted ? (
          <form onSubmit={this.handleSubmit}>
            <h1>Contact-Us</h1>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Message:
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="thank-you-message">
          <h1>Thank You!</h1>
          <p> Your submission has been received.</p>
          
        </div>
          
        )}
        
      </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contact Us</h1>
        <ContactUs />
      </div>
    );
  }
}

export default ContactUs;
