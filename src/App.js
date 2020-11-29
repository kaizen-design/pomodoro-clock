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
      timerInterval: null,
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
            this.soundAlert();
            this.setState({
              breakLength: this.state.breakLength + 1
            });
          }
          break;
        case 'session-decrement':
          if (this.state.sessionLength > 1) {
            this.setState({
              sessionLength: this.state.sessionLength - 1,
              timer: (this.state.sessionLength - 1) * 60
            });
          }
          break;
        case 'session-increment':
          if (this.state.sessionLength < 60) {
            this.setState({
              sessionLength: this.state.sessionLength + 1,
              timer: (this.state.sessionLength + 1) * 60
            });
          }
          break;
      }
    }
  };

  toggleClock = () => {
    if (!this.state.active) {
      this.setState({
        active: true,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.cycleControl();
        }, 1000)
      });
      this.countDown();
    } else {
      this.state.timerInterval && clearInterval(this.state.timerInterval);
      this.setState({
        active: false,
        timerInterval: null
      });
    }
  };

  countDown = () => {
    if (this.state.timer === 0) {
      this.audioBeep.play();
    } else if (this.state.timer === -1) {
      if (this.state.cycle === 'Session') {
        this.setState({
          cycle: 'Break',
          timer: this.state.breakLength * 60
        });
      } else {
        this.setState({
          cycle: 'Session',
          timer: this.state.sessionLength * 60
        });
      }
    }
  };

  decreaseTimer() {
    this.setState({
      timer: this.state.timer - 1
    });
  }

  cycleControl = () => {

  };

  setTimer = (timer) => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${minutes}:${seconds}`;
  };

  soundAlert = (timer) => {
    if (timer === 0) {
      this.audioBeep.play();
    }
  };

  reset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      cycle: 'Session',
      active: false,
      timerInterval: null
    });
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
    this.state.timerInterval && clearInterval(this.state.timerInterval);
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
                {this.setTimer(this.state.timer)}
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

            <audio
              id="beep"
              preload="auto"
              ref={(audio) => {this.audioBeep = audio}}
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />

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