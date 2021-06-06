import React, { Component } from 'react';
import './App.css';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buffer: null,
      memeHash: 'QmRjg6pi6sbsNfqdVXDsBvStfXPsnwYBAFwsTcXVDadAe4'
    };
  }

  captureFile = (event) => {
    event.preventDefault();
    // console.log(event.target.files);
    // Process file for IPFS
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
    }
  }

  // Sample hash: "QmRjg6pi6sbsNfqdVXDsBvStfXPsnwYBAFwsTcXVDadAe4"
  // Sample URL: https://ipfs.infura.io/ipfs/QmRjg6pi6sbsNfqdVXDsBvStfXPsnwYBAFwsTcXVDadAe4
  onSubmit = (event) => {
    event.preventDefault();
    console.log("Inside")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log("IPFS result", result);
      if (error) {
        console.error(error)
        return
      }
      this.setState({ memeHash: result[0].hash })
      console.log(this.state.memeHash)
    })
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
                  <img src={ 'https://ipfs.infura.io/ipfs/' + this.state.memeHash } className="App-logo" alt="logo" width="400" />
                </a>
                <p>&nbsp;</p>
                <h1>Meme of the Day</h1>
                <p>&nbsp;</p>
                <h3>Change Meme</h3>
                <form onSubmit={this.onSubmit} >
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
