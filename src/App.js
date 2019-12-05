import React from 'react';
import Navbar from './templates/layout/Navbar';
import Footer from './templates/layout/Footer';

const projectName = 'Javascript Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="h-100 d-flex flex-column">
        <Navbar brand={projectName} />
        <main role="main" className="App container my-auto py-3">
          <div className="calculator card mx-auto shadow">
            <input type="text" className="calculator-screen" value="2345.45" disabled/>
            <div className="calculator-keys">
              <button type="button" className="operator btn btn-warning" value="+">+</button>
              <button type="button" className="operator btn btn-warning" value="-">-</button>
              <button type="button" className="operator btn btn-warning" value="*">&times;</button>
              <button type="button" className="operator btn btn-warning" value="/">&divide;</button>
              <button type="button" value="7" className="btn btn-dark">7</button>
              <button type="button" value="8" className="btn btn-dark">8</button>
              <button type="button" value="9" className="btn btn-dark">9</button>
              <button type="button" value="4" className="btn btn-dark">4</button>
              <button type="button" value="5" className="btn btn-dark">5</button>
              <button type="button" value="6" className="btn btn-dark">6</button>
              <button type="button" value="1" className="btn btn-dark">1</button>
              <button type="button" value="2" className="btn btn-dark">2</button>
              <button type="button" value="3" className="btn btn-dark">3</button>
              <button type="button" value="0" className="btn btn-dark">0</button>
              <button type="button" value="." className="decimal function btn btn-dark">.</button>
              <button type="button" value="all-clear" className="all-clear function btn btn-danger">AC</button>
              <button type="button" value="=" className="equal-sign operator btn btn-warning">=</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;