import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ping: ''
    }
  }

  ping = async () => {
    var response = await fetch(
      'api/ping',
      {
        method: 'get'
      }
    );

    var responseJson = await response.json();
    
    this.setState({
      ping: responseJson.val
    })
  }

  render() {
    const pingr = this.state.ping;

    return (
      <div className='App'>
        <button onClick={this.ping}>Ping</button>
        <div>
          <label>{pingr}</label>
        </div>
        </div>
    )
  }
}

export default App;
