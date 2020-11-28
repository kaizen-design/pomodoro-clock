import React from 'react';
import Navbar from './templates/layout/Navbar';
import Footer from './templates/layout/Footer';

const projectName = 'Pomodoro Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    //this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar brand={projectName} />
        <main role="main" className="App container my-auto py-3">
          <div className="pomodoro-clock">
            <div className="card text-center">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h6 id="break-label" className="d-block text-center mb-2">Break Length</h6>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button id="break-decrement" className="btn btn-outline-secondary" type="button">-</button>
                      </div>
                      <input id="break-length" type="text" className="form-control text-center" value="5" />
                      <div className="input-group-append">
                        <button id="break-increment" className="btn btn-outline-secondary" type="button">+</button>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <h6 id="session-label" className="d-block text-center mb-2">Session Length</h6>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button id="session-decrement" className="btn btn-outline-secondary" type="button">-</button>
                      </div>
                      <input id="session-length" type="text" className="form-control text-center" value="25" />
                      <div className="input-group-append">
                        <button id="session-increment" className="btn btn-outline-secondary" type="button">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h6 id="timer-label" className="mb-0">Session</h6>
                <h2 id="time-left" className="display-1 font-weight-bold mb-0">25:00</h2>
              </div>
              <div className="card-footer text-muted">
                <div className="row">
                  <div className="col">
                    <button id="start_stop" type="button" className="btn btn-block btn-primary">Start</button>
                  </div>
                  <div className="col">
                    <button id="reset" type="button" className="btn btn-block btn-secondary">Reset</button>
                  </div>
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