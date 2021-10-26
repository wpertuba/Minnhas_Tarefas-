import React from 'react';
import Casa from './Casa';
import Porta from './Porta.js';
import Janela from './Janela.js';

class App extends React.Component {
  render() {
    return(
    <div>
      <Casa />
      <Porta/>
    <Janela />

    </div>
    );
  }
}

export default App;
