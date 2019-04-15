import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/appBar/appBar';
import Dashboard from './components/dashboard/dashboard';

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <CssBaseline />
            <header>
               <AppBar />
            </header>
            <main>
               <Dashboard />
            </main>
         </React.Fragment>
      );
   }
}

export default App;
