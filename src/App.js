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
      timer: 1500,
      cycle: 'Session',
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

  setTimer = () => {
    this.state.timer = this.state.cycle === 'Session' ? this.state.sessionLength : this.state.breakLength;
    let minutes = Math.floor(this.state.timer);
    let seconds = this.state.timer - minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ' : ' + seconds;
  };

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      cycle: 'Session',
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
                <TimerControl
                  id='break'
                  title='Break'
                  value={this.state.breakLength}
                  settingsChange={this.handleSettingsChange}
                  isReadOnly={!!this.state.active}
                />
                <TimerControl
                  id='session'
                  title='Session'
                  value={this.state.sessionLength}
                  settingsChange={this.handleSettingsChange}
                  isReadOnly={!!this.state.active}
                />
              </div>
            </div>
            <div className="card-body py-5">
              <h6 id="timer-label" className="mb-0">{this.state.cycle}</h6>
              <h2 id="time-left"
                  className="display-1 font-weight-bold mb-0">
                {this.setTimer()}
              </h2>
            </div>
            <div className="card-footer text-muted">
              <div className="row">
                <div className="col">
                  <button
                    id="start_stop"
                    type="button"
                    className={this.state.active ? 'btn btn-block btn-danger' : 'btn btn-block btn-primary'}
                    onClick={this.toggleClock}>
                    {this.state.active ? 'Pause' : 'Start'}
                  </button>
                </div>
                <div className="col">
                  <button
                    id="reset"
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

class TimerControl extends React.Component {
  render() {
    return (
      <div className="col">
        <h6 id={this.props.id + '-label'} className="d-block text-center mb-2">
          {this.props.title} Length
        </h6>
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              id={this.props.id + '-decrement'}
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.settingsChange}>
              -
            </button>
          </div>
          <input
            id={this.props.id + '-length'}
            type="text"
            className="form-control text-center"
            value={this.props.value}
            onChange={this.props.settingsChange}
            readOnly={!!this.props.isReadOnly}
          />
          <div className="input-group-append">
            <button
              id={this.props.id + '-increment'}
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.settingsChange}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;