import React from 'react';
import Navbar from './templates/layout/Navbar';
import Footer from './templates/layout/Footer';

const projectName = 'Javascript Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: '3245',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
      lastClicked: ''
    };
    //this.maxDigitWarning = this.maxDigitWarning.bind(this);
    //this.handleOperators = this.handleOperators.bind(this);
    //this.handleEvaluate = this.handleEvaluate.bind(this);
    this.clear = this.clear.bind(this);
    //this.handleDecimal = this.handleDecimal.bind(this);
    //this.handleNumbers = this.handleNumbers.bind(this);
  }

  clear () {
    this.setState({
      currentVal: '0',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
      lastClicked: '',
      evaluated: false
    });
  }

  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar brand={projectName} />
        <main role="main" className="App container my-auto py-3">
          <div className="calculator card mx-auto shadow">
            <input id="display" type="text" className="calculator-screen" value={this.state.currentVal} disabled/>
            <Buttons
              decimal={this.handleDecimal}
              evaluate={this.handleEvaluate}
              clear={this.clear}
              numbers={this.handleNumbers}
              operators={this.handleOperators}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div className="calculator-keys">
        <button id="add" type="button" className="operator btn btn-warning" value="+">+</button>
        <button id="subtract" type="button" className="operator btn btn-warning" value="-">-</button>
        <button id="multiply" type="button" className="operator btn btn-warning" value="*">&times;</button>
        <button id="divide" type="button" className="operator btn btn-warning" value="/">&divide;</button>
        <button id="seven" type="button" value="7" className="btn btn-dark">7</button>
        <button id="eight" type="button" value="8" className="btn btn-dark">8</button>
        <button id="nine" type="button" value="9" className="btn btn-dark">9</button>
        <button id="four" type="button" value="4" className="btn btn-dark">4</button>
        <button id="five" type="button" value="5" className="btn btn-dark">5</button>
        <button id="six" type="button" value="6" className="btn btn-dark">6</button>
        <button id="one" type="button" value="1" className="btn btn-dark">1</button>
        <button id="two" type="button" value="2" className="btn btn-dark">2</button>
        <button id="three" type="button" value="3" className="btn btn-dark">3</button>
        <button id="zero" type="button" value="0" className="btn btn-dark">0</button>
        <button id="decimal" type="button" value="." className="decimal function btn btn-dark">.</button>
        <button
          id="clear"
          type="button"
          value="all-clear"
          className="all-clear function btn btn-danger"
          onClick={this.props.clear}>
          AC
        </button>
        <button id="equals" type="button" value="=" className="equal-sign operator btn btn-warning">=</button>
      </div>
    );
  }
}

export default App;