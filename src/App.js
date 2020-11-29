import React from 'react';
import Navbar from './templates/layout/Navbar';
import Footer from './templates/layout/Footer';

const projectName = 'Pomodoro Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      currentState: 'Session',
      active: false,
    };
    //this.handleSettingsChange = this.handleSettingsChange.bind(this);
  }

  handleSettingsChange = (e) => {
    if (!this.state.active) {
      const id = e.target.id;
      switch (id) {
        case 'break-decrement':
          if (this.state.breakLength > 1) {
            this.setState({
              breakLength: this.state.breakLength - 1
            });
          }
          break;
        case 'break-increment':
          if (this.state.breakLength < 60) {
            this.setState({
              breakLength: this.state.breakLength + 1
            });
          }
          break;
        case 'session-decrement':
          if (this.state.sessionLength > 1) {
            this.setState({
              sessionLength: this.state.sessionLength - 1
            });
          }
          break;
        case 'session-increment':
          if (this.state.sessionLength < 60) {
            this.setState({
              sessionLength: this.state.sessionLength + 1
            });
          }
          break;
      }
    }
  };

  toggleClock = () => {
    this.setState({
      active: !this.state.active
    });
  };

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      currentState: 'Session',
      active: false
    });
  };

  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar brand={projectName} />
        <main role="main" className="App container my-auto py-3">
          <div className="pomodoro-clock card text-center">
            <div className="card-header">
              <div className="row">
                <div className="col">
                  <h6 id="break-label" className="d-block text-center mb-2">Break Length</h6>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button id="break-decrement" className="btn btn-outline-secondary" type="button" onClick={this.handleSettingsChange}>-</button>
                    </div>
                    <input id="break-length"
                           type="text"
                           className="form-control text-center"
                           value={this.state.breakLength}
                           onChange={this.handleSettingsChange}
                           readOnly={!!this.state.active}
                           min="1"
                           max="60" />
                    <div className="input-group-append">
                      <button id="break-increment" className="btn btn-outline-secondary" type="button" onClick={this.handleSettingsChange}>+</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h6 id="session-label" className="d-block text-center mb-2">Session Length</h6>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button id="session-decrement" className="btn btn-outline-secondary" type="button" onClick={this.handleSettingsChange}>-</button>
                    </div>
                    <input id="session-length"
                           type="text"
                           className="form-control text-center"
                           value={this.state.sessionLength}
                           onChange={this.handleSettingsChange}
                           readOnly={!!this.state.active}
                           min="1"
                           max="60" />
                    <div className="input-group-append">
                      <button id="session-increment" className="btn btn-outline-secondary" type="button" onClick={this.handleSettingsChange}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body py-5">
              <h6 id="timer-label" className="mb-0">Session</h6>
              <h2 id="time-left" className="display-1 font-weight-bold mb-0">25:00</h2>
            </div>
            <div className="card-footer text-muted">
              <div className="row">
                <div className="col">
                  <button id="start_stop"
                          type="button"
                          className={this.state.active ? 'btn btn-block btn-danger' : 'btn btn-block btn-primary'}
                          onClick={this.toggleClock}>
                    {this.state.active ? 'Pause' : 'Start'}
                  </button>
                </div>
                <div className="col">
                  <button id="reset"
                          type="button"
                          className="btn btn-block btn-secondary"
                          onClick={this.reset}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;