import React, { Component, Fragment } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/appBar/appBar';
import Dashboard from './components/dashboard/dashboard';

class App extends Component {
   render() {
      return (
         <Fragment>
            <CssBaseline />

            <header className='App-header'>
               <AppBar />
            </header>
            <main>
               <Dashboard />
            </main>
         </Fragment>
      );
   }
}

export default App;
