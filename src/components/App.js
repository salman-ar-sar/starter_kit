import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
  captureFile = (event) => {
    event.preventDefault();
    console.log(event.target.files);
    // Process file for IPFS

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://en.wikipedia.org/wiki/Meme"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meme of the Day
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="https://ethereum.org/en/developers/docs/storage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <p>&nbsp;</p>
                <h1>Meme of the Day</h1>
                <p>&nbsp;</p>
                <h3>Change Meme</h3>
                <form>
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit' />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
