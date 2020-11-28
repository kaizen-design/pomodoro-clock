import React from 'react';
import Navbar from './templates/layout/Navbar';
import Footer from './templates/layout/Footer';

const projectName = 'Javascript Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '0',
      firstOperand: '',
      operator: '',
      previousKeyType: ''
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const key = e.target;
    const id = e.target.id;
    const value = e.target.value;
    const operators = ['add', 'subtract', 'multiply', 'divide'];

    //  Remove the 'active' class from all keys
    Array.from(key.parentNode.children).forEach(k => k.classList.remove('active'));

    //  Calculate function
    const calculate = (n1, operator, n2) => {
      let result = '';
      switch (operator) {
        case 'add':
          result = parseFloat(n1) + parseFloat(n2);
          break;
        case 'subtract':
          result = parseFloat(n1) - parseFloat(n2);
          break;
        case 'multiply':
          result = parseFloat(n1) * parseFloat(n2);
          break;
        case 'divide':
          result = parseFloat(n1) / parseFloat(n2);
          break;
      }
      return result;
    };

    switch (true) {
      //  HANDLE OPERATOR KEYS
      case operators.includes(id):
        if (this.state.output !== '') {
          key.classList.add('active');
          const firstOperand = this.state.firstOperand;
          const operator = this.state.operator;
          if (firstOperand && operator && this.state.previousKeyType !== 'operator') {
            const calc = calculate(firstOperand, operator, this.state.output);
            this.setState({
              firstOperand: calc,
              output: calc,
            });
          } else {
            this.setState({
              firstOperand: this.state.output
            })
          }
          this.setState({
            operator: id,
            previousKeyType: 'operator',
          });
        }
        break;
      //  HANDLE DECIMALS
      case id === 'decimal':
        if (this.state.previousKeyType === 'operator') {
          this.setState({
            output: '0' + value,
            previousKeyType: 'decimal'
          });
        } else if (this.state.output !== '' && !this.state.output.includes('.')) {
          this.setState({
            output: this.state.output + value,
            previousKeyType: 'decimal'
          });
        }
        break;
      //  HANDLE CLEAR
      case id === 'clear':
        this.setState({
          output: '0',
          firstOperand: '',
          operator: '',
          previousKeyType: ''
        });
        break;
      //  HANDLE EQUALS
      case id === 'equals':
        this.setState({
          output: calculate(this.state.firstOperand, this.state.operator, this.state.output),
          previousKeyType: 'equals',
          operator: '',
        });
        break;
      //  HANDLE NUMBERS
      default:
        if (this.state.output === '0' || this.state.previousKeyType === 'operator') {
          this.setState({
            output: value,
            previousKeyType: 'number'
          });
        } else {
          this.setState({
            output: this.state.output + value,
            previousKeyType: 'number'
          });
        }
        break;
    }
  }

  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar brand={projectName} />
        <main role="main" className="App container my-auto py-3">
          <div className="calculator card mx-auto shadow">
            <input id="display" type="text" className="calculator-screen" value={this.state.output} disabled/>
            <Buttons click={this.handleButtonClick} />
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
        <button
          id="add"
          type="button"
          className="operator btn btn-warning" value="+"
          onClick={this.props.click}>
          +
        </button>
        <button
          id="subtract"
          type="button"
          className="operator btn btn-warning"
          value="-"
          onClick={this.props.click}>
          -
        </button>
        <button
          id="multiply"
          type="button"
          className="operator btn btn-warning"
          value="*"
          onClick={this.props.click}>
          &times;
        </button>
        <button
          id="divide"
          type="button"
          className="operator btn btn-warning"
          value="/"
          onClick={this.props.click}>
          &divide;
        </button>
        <button
          id="seven"
          type="button"
          value="7"
          className="btn btn-dark"
          onClick={this.props.click}>
          7
        </button>
        <button
          id="eight"
          type="button"
          value="8"
          className="btn btn-dark"
          onClick={this.props.click}>
          8
        </button>
        <button
          id="nine"
          type="button"
          value="9"
          className="btn btn-dark"
          onClick={this.props.click}>
          9
        </button>
        <button
          id="four"
          type="button"
          value="4"
          className="btn btn-dark"
          onClick={this.props.click}>
          4
        </button>
        <button
          id="five"
          type="button"
          value="5"
          className="btn btn-dark"
          onClick={this.props.click}>
          5
        </button>
        <button
          id="six"
          type="button"
          value="6"
          className="btn btn-dark"
          onClick={this.props.click}>
          6
        </button>
        <button
          id="one"
          type="button"
          value="1"
          className="btn btn-dark"
          onClick={this.props.click}>
          1
        </button>
        <button
          id="two"
          type="button"
          value="2"
          className="btn btn-dark"
          onClick={this.props.click}>
          2
        </button>
        <button
          id="three"
          type="button"
          value="3"
          className="btn btn-dark"
          onClick={this.props.click}>
          3
        </button>
        <button
          id="zero"
          type="button"
          value="0"
          className="btn btn-dark"
          onClick={this.props.click}>
          0
        </button>
        <button
          id="decimal"
          type="button"
          value="."
          className="decimal function btn btn-dark"
          onClick={this.props.click}>
          .
        </button>
        <button
          id="clear"
          type="button"
          value="all-clear"
          className="all-clear function btn btn-danger"
          onClick={this.props.click}>
          AC
        </button>
        <button
          id="equals"
          type="button"
          value="="
          className="equal-sign operator btn btn-warning"
          onClick={this.props.click}>
          =
        </button>
      </div>
    );
  }
}

export default App;